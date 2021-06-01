import React from "react";
import { Provider } from "react-redux";
import TodoAppContainer from "./components/TodoAppContainer";
import configureStore from "./redux/configureStore";

const App: React.FC = React.memo(() => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>
  );
});

export default App;
