import { createContext } from 'react'

const MainContext = createContext({
  service: null,
  send: null,
  matches: null
})

export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

export default MainContext
