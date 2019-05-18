/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import App from './Apps';

const store = configureStore();

const rnredux = () => {
  return ( 
    <Provider store={store}>
      <App />
    </Provider>
   );
}
 
export default rnredux;

