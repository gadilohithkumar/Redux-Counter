import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:  (state) =>{
            state.value += 1
        },
        decrement:  (state) =>{
            state.value -= 1
        },
        incrementByAmount:  (state,action) =>{
            state.value += action.payload 
        },  
    }
})

/**
 * Action creators are generated for each case reducer function
 */
/**
 * 
 * The function below is called a selector and allows us to select a value from
 * the state. Selectors can also be defined inline where they're used instead of
 * in the slice file. For example: `useSelector((state) => state.counter.value)`
 * @param {*} amount 
 * @returns 
 */
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 5000)
  }
export const selectCount = (state) => state.counter.value
export const {increment,decrement,incrementByAmount} =counterSlice.actions

export default counterSlice.reducer
