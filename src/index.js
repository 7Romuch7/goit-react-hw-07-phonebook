import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
/* import { PersistGate } from 'redux-persist/integration/react'; */
import store from './redux/store';

console.log(store);;

ReactDOM.render(
  
    <Provider store={store}>
      {/* <PersistGate loading={<h1>Loading...</h1>} persistor={store.persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>,
  document.getElementById('root')
);