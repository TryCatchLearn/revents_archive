import { createReducer } from '../../app/common/util/reducerUtil';
import { ASYNC_ACTION_ERROR, ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from './asyncConstants';

const initialState = {
    loading: false
}

export const aysncActionStarted = (state, payload) => {
    return {...state, loading: true}
}

export const asyncActionFinished = (state) => {
    return {...state, loading: false}
}

export const asyncActionError = (state) => {
    return {...state, loading: false}
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: aysncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionError
})