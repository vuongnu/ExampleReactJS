import { combineReducers } from 'redux';

import bookReducer from './book/reducer';
import userReducer from './user/reducer';

export const reducer = combineReducers({
    bookState: bookReducer,
    userState: userReducer
})