import { combineReducers, createStore as reduxCreateStore } from 'redux';
import themeReducer from './reducer/themeReducer';

const rootReducer = combineReducers({
  themeReducer,
});

const createStore = () => reduxCreateStore(rootReducer);

export default createStore;

export type RootState = ReturnType<typeof rootReducer>;
