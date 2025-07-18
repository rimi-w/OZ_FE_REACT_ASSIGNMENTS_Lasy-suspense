import React, { lazy, Suspense } from "react";
import "./App.css";

const TestComponent = lazy(() => import("./TestComponent"));

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
