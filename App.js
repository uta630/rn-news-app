import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import store, { persist } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
