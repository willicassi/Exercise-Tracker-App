// Cassidy Williams Assignment 7 Exercise Tracker

// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

// Define the function that renders the content in routes using State.
function App() {
  const [exercise, setExercise] = useState([]);
  return (
    <>
      <Router>
          <header>
            <h1>FitTracker</h1>
            <p>Log your exercise, track your fitness!</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise}/>
            </Route>

            <Route path="/create-exercise">
              <CreatePage/>
            </Route>

            <Route path="/edit-exercise/">
              <EditPage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>CS 290 &copy; 2022 Cassidy Williams</p>
          </footer>
      </Router>
    </>
  );
}

export default App;