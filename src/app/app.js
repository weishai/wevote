import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import * as reducers from './reducers'
import App from './containers/App'
import {VoteAdd, VoteView, VoteResult} from './components'

const reducer = combineReducers({
  // ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

const history = syncHistoryWithStore(browserHistory, store)

//Needed for onTouchTap
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={VoteAdd} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
