import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
// import user from "store/modules/user";


const reducer = combineReducers({
    // user,
});

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(
            // 배포할 때
            applyMiddleware(thunk)
        )
        : composeWithDevTools(
            //개발환경일 때
            applyMiddleware(thunk)
        );

const store = configureStore(reducer, enhancer);

export default store;
