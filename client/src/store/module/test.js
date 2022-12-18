import { produce } from "immer";
import { getPostListAPI } from "store/apis/board";

// Actions
const FETCH_POSTLIST_REQUEST = "board/FETCH_POSTLIST_REQUEST";
const FETCH_POSTLIST_SUCCESS = "board/FETCH_POSTLIST_SUCCESS";
const FETCH_POSTLIST_ERROR = "board/FETCH_POSTLIST_ERROR";

// Action 생성자
export const fetchPostListRequest = () => {
  return {
    type: FETCH_POSTLIST_REQUEST,
  };
};
export const fetchPostListSuccess = (payload) => {
  return {
    type: FETCH_POSTLIST_SUCCESS,
    payload,
  };
};
export const fetchPostListError = (error) => {
  return {
    type: FETCH_POSTLIST_ERROR,
    payload: error,
  };
};

// thunk
export const fetchPostList = region => async dispatch => {
    dispatch(fetchPostListRequest());
    try{
        const response = await getPostListAPI(region);
        const payload = [];
        response.forEach(doc => {
            payload.push(doc.data());
        })
        dispatch(fetchPostListSuccess(payload));
    }catch(error){
        dispatch(fetchPostListError(error))
    }
}

// Reducer
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTLIST_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case FETCH_POSTLIST_SUCCESS:
      return {
        ...prevState,
        loading: false,
        data: action.payload,
      };
    case FETCH_POSTLIST_ERROR:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};

export default reducer;
