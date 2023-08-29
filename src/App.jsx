import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto bg-fuchsia-50 p-4 shadow-lg">
              <h1 className="text-3xl font-medium text-center text-gray-600">
                Welcome to Brandistic!
              </h1>
            </div>
          }
        />

        <Route path="/welcome" element={<h1>Welcome!</h1>} />
      </Routes>
    </>
  );
}

export default App;
