import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  COUNTER_ACTION_FINISHED,
  COUNTER_ACTION_STARTED
} from './testConstants';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  };
};

export const finishCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
    return async dispatch => {
        dispatch(startCounterAction())
        await delay(1000);
        dispatch({type: INCREMENT_COUNTER})
        dispatch(finishCounterAction())
    }
}

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: DECREMENT_COUNTER });
    dispatch(finishCounterAction());
  };
};
