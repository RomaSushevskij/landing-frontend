import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { contactFormReducer } from 'store/reducers/contactFormReducer';

export const rootReducer = combineReducers({
  contactForm: contactFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
});
