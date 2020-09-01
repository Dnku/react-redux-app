import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light border-bottom border-blue">
        <div className="container-fluid">
          <span class="navbar-brand mb-0 h1">Example React-Redux-App</span>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-light">Redux</div>
          <div className="card-body">
            <button
              className="btn btn-outline-secondary px-5"
              onClick={() => dispatch(increment(5))}
            >
              + 5
            </button>
            <span className="card-text mx-3">{counter}</span>
            <button
              className="btn btn-outline-secondary px-5"
              onClick={() => dispatch(decrement(3))}
            >
              - 3
            </button>
            {isLogged ? <p className="card-text">Logged</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
