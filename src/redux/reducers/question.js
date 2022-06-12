import { QUESTION } from 'actionsType';

const dummyData = [
  {
    id: 1,
    question: '문제를 건너뛰려면?',
    answers: [
      {
        id: 1,
        content: '건너뛰기를 누른다',
      },
      {
        id: 2,
        content: '문제 추가를 누른다',
      },
      {
        id: 3,
        content: '가만히 있는다',
      },
    ],
    correctAnswerId: 1,
  },
  {
    id: 2,
    question:
      'PC, 노트북, 휴대폰 등 각종 저장매체 또는 인터넷 상에 남아 있는 각종 디지털 정보를 분석해 범죄 단서를 찾는 수사기법을 무엇이라고 할까요?',
    answers: [
      {
        id: 1,
        content: '디지털포렌식',
      },
      {
        id: 2,
        content: '디지털파일링',
      },
      {
        id: 3,
        content: '블루라이트',
      },
    ],
    correctAnswerId: 2,
  },
];

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
