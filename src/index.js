import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
/**
 * In React Redux, the Provider component serves a crucial role in integrating Redux with a React application. Its primary purpose is to ensure that the Redux store is accessible to all components in the application without needing to explicitly pass it down through component props.
 * Here's why the Provider component is important:
 * Centralized Store Access: Redux maintains a single global state store for the entire application. The Provider component wraps the root component of your React application and makes the Redux store available to all components in the component tree.
 * Avoids Prop Drilling: Without the Provider, passing the Redux store down through multiple layers of components (prop drilling) would be cumbersome and error-prone. The Provider eliminates this need by automatically providing access to the store to any component within its subtree.
 * Context API Integration: Internally, the Provider component uses React's Context API to pass the Redux store down the component tree. This ensures that components can access the store without needing to manually pass it through props.
 * Store Subscription and Updates: Components wrapped in the Provider will automatically re-render whenever the Redux store's state changes. This subscription mechanism enables React components to stay in sync with the application state managed by Redux.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
