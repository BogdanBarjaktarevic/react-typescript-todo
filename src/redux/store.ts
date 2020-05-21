import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { RootState } from "./rootReducer";
import { TodoActionTypes } from "./todos/todos.types";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<RootState, TodoActionTypes>)
  )
);

export default store;
