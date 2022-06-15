import { AUTH } from "actionsType";

const initialState = {
  isLogin: false,
  tokenInfo: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN.SUCCESS:
      const { access_token } = action.payload;
      return {
        ...state,
        isLogin: !!access_token,
        tokenInfo: action.payload,
      };

    case AUTH.GET_USER_PROFILE.SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };

    case AUTH.LOGIN.FAILURE:
      return {
        ...state,
        isLogin: false,
        tokenInfo: {},
      };

    default:
      return state;
  }
};

export default auth;
