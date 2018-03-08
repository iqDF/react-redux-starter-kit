
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/rootReducer';
import thunk from 'redux-thunk'

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(
      thunk
    )
  )
  const store = createStore(reducers, enhancer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}