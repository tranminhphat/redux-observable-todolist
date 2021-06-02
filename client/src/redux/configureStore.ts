import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
