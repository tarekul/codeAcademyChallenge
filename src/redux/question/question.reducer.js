import questionActionTypes from './question.types';

const INITIAL_STATE = {
  answer: null,
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case questionActionTypes.SET_ANSWER_SELECTION:
      return {
        ...state,
        answer: action.payload,
      };
    case questionActionTypes.RESET_ANSWER_SELECTION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default questionReducer;
