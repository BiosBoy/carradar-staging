import { createMemoryHistory, createBrowserHistory } from 'history'
import isServer from '../utils/isServer'

const history = (url?: string) => {
  return isServer() ? createMemoryHistory({ initialEntries: [url || '/'] }) : createBrowserHistory()
}

export default history
