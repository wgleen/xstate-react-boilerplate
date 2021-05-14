import { createBrowserHistory } from 'history'
import { fromEventPattern } from 'rxjs'
import { map } from 'rxjs/operators'
import { useMachine } from '@xstate/react'
import merge from 'lodash/merge'
import find from 'lodash/find'
import { Machine } from 'xstate'

const history = createBrowserHistory()

export const getRouteByPathname = (path, routes) => {
  if (path === undefined) throw new Error('A path must be defined')

  const route = find(routes, (route) => {
    return route.path === path
  })

  return route
}

export const getRouteByState = (state, routes) => {
  if (!state) throw new Error('A state must be defined')

  const route = find(routes, (route) => route.id === state)

  return route
}

export const getStateByPathname = (pathname, routes) => {
  if (!pathname) throw new Error('A pathname must be defined')
  if (!routes) throw new Error('A route config must be defined')

  const route = getRouteByPathname(pathname, routes)

  if (!route) return

  return route.id
}

export const redirectByState = (state, routes) => {
  if (!state) throw new Error('A state interpreter must be define')

  const route = getRouteByState(state, routes)

  if (!route) return false
  if (route.path === history.location.pathname) return false

  return history.push(route.path)
}

export const historyListenerEvents = () => (
  fromEventPattern(history.listen).pipe(
    map((event) => ({
      type: 'ROUTE_CHANGED',
      value: event
    }))
  )
)

export const machineListenerEvents = (interpreter, routes) => {
  if (!interpreter) throw new Error('A machine interpreter must be define')

  interpreter.onTransition((transitionState) => {
    redirectByState(transitionState.value, routes)
  })

  return interpreter
}

export const verifyRouter = (routes) => (_, event, condMeta) => {
  const state = getStateByPathname(event.value.location.pathname, routes)

  if (condMeta.state.value === state) return false
  if (condMeta.cond.target !== state) return false

  return true
}

export const generateRouterEvents = (routes) => {
  if (!routes) throw new Error('A routes config must be defined')

  const routerEvents = Object.entries(routes).map(([_, { id }]) => ({
    target: id,
    cond: {
      type: 'verifyRouter',
      target: id
    }
  }))

  return {
    ROUTE_CHANGED: routerEvents
  }
}

export const createMachine = (machineConfig, machineOptions, options) => {
  const machine = Machine(machineConfig, machineOptions)

  return useMachine(machine, options)
}

export const useRouterMachine = (machineConfig, machineOptions, routes, options) => {
  const newMachineConfig = merge({}, machineConfig, {
    invoke: {
      src: historyListenerEvents
    },
    on: generateRouterEvents(routes)
  })

  const newMachineOptions = merge({}, machineOptions, {
    guards: { verifyRouter: verifyRouter(routes) }
  })

  const [state, send, service] = createMachine(newMachineConfig, newMachineOptions, options)

  const serviceConfigured = machineListenerEvents(service, routes)

  return [state, send, serviceConfigured]
}
