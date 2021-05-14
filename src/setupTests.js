// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-extended'
import { Machine } from 'xstate'
import { createModel } from '@xstate/test'
import axios from 'axios'

axios.defaults.adapter = require('axios/lib/adapters/http')

const addStateTests = (state, tests) => ({
  ...state,
  states: Object.entries(state.states).reduce((s, [stateKey, stateValue]) => {
    return {
      ...s,
      [stateKey]: {
        ...stateValue,
        meta: {
          ...stateValue.meta,
          test: tests[stateKey]
        }
      }
    }
  }, {})
})

const createTestMachine = (machine, stateTests) => (
  Machine(
    addStateTests(
      machine.config,
      stateTests
    ),
    machine.options
  )
)

const createTestModel = (machine, events) => (
  createModel(machine).withEvents(events)
)

const createTestPlans = (testModel) => testModel.getShortestPathPlans()

const createTestWrapper = (machine, stateTests, eventTests) => {
  const testMachine = createTestMachine(machine, stateTests)

  const testModel = createTestModel(testMachine, eventTests)

  const testPlans = createTestPlans(testModel)

  return {
    testMachine,
    testModel,
    testPlans
  }
}

global.createTestWrapper = createTestWrapper
