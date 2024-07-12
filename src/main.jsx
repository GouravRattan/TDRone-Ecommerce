import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {store} from './Pages/redux/store.jsx';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider > */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
