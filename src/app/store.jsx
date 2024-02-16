import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
/**
 * This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
 * 1. In React Redux, configureStore is a function provided by the Redux toolkit, 
 *    which is a set of utility functions to simplify common Redux use cases. 
 *    The purpose of configureStore is to create a Redux store instance with sensible defaults and additional configuration options, making it easier to set up and use Redux in your React application.
 * 2. Overall, configureStore simplifies the process of setting up a Redux store in React applications by providing sensible defaults, allowing customization, and reducing boilerplate code. It's a recommended approach, especially when using Redux Toolkit, as it aligns with Redux best practices and promotes cleaner, more maintainable code.


 */

/**
 * Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
 */
export default configureStore({
     reducer : {
        counter : counterReducer,
     },
})