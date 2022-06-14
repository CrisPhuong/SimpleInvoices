import { QUESTION } from "actionsType";

const dummyData = [];

const initialState = {
  questionList: dummyData || [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION.CREATE.SUCCESS:
      return {
        ...state,
        questionList: [...state.questionList, action.payload?.question],
      };
    default:
      return state;
  }
};

export default questionReducer;
