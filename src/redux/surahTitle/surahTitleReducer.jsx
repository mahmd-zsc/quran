import * as typeAction from "./surahTitleTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let SurahTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SURAH_TITLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SURAH_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SURAH_TITLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default SurahTitleReducer;
