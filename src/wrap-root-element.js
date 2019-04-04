import React from 'react'
import { createStore,applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import combineReducers from './redux/reducers'
import { client } from './apollo'

export default ({element})=>(
    <ApolloProvider client={ client }>
        <Provider store={createStore(combineReducers,applyMiddleware(reduxThunk))}>
         {element}
        </Provider>
    </ApolloProvider>
)

