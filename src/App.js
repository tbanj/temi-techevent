import { Component, Suspense } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import { Route, Routes } from 'react-router-dom';
import Landing from './component/pages/Landing';
import EventList from './component/pages/EventList';
import ErrorBoundary from './component/errorBoundary';

import "./asset/sass/main.scss";





class App extends Component {
  state = {}

  componentDidMount() {

  }
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>loading</div>}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/events" element={<EventList />} />
              </Routes>
            </PersistGate>
          </Provider>
        </Suspense>
      </ErrorBoundary>

    );
  }
}

export default App;
