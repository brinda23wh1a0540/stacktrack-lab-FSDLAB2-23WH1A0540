import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/add-task"
            element={<QuestionPage />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
