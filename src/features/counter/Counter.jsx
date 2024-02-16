// import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment } from "./counterSlice"
/**
 * useDispatch is a hook provided by the React Redux library. Its purpose is to provide a reference to the dispatch function of the Redux store. The dispatch function is used to dispatch actions to the Redux store, which in turn triggers state changes.
 *
 * Here's how it works:
 * When you create a Redux store using createStore, it provides a dispatch function.
 * To interact with the store from your React components, you typically use the useDispatch hook.
 * By using useDispatch, you can access the dispatch function within your functional components.
 * 
 *  @returns 
 */

/**
 * 
 * Now, any time you click the "Increment" and "Decrement buttons:
 * The corresponding Redux action will be dispatched to the store
 * The counter slice reducer will see the actions and update its state
 * The <Counter> component will see the new state value from the store and re-render itself with the new data
 * @returns 
 */

// export function Counter() {
//     const count = useSelector((state) => state.counter.value)
//     const dispatch = useDispatch()
  
//     return (
//       <div>
//         <div>
//           <button
//             aria-label="Increment value"
//             onClick={() => dispatch(increment())}
//           >
//             Increment
//           </button>
//           <span>{count}</span>
//           <button
//             aria-label="Decrement value"
//             onClick={() => dispatch(decrement())}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     )
//   }

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
