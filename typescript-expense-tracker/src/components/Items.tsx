import React from 'react';
import { AppContext } from './context';
import { Types } from './Reducer';
import '../App.css';

export const Items = () => {
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        Add Expense
      </button>
      {state.TodoCart}
    </div>
  );
};

{
  /* <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        Add Expense
      </button>
      {state.TodoCart} */
}
