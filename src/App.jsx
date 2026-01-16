import React from 'react';
import CalendarGrid from './components/calendar/CalendarGrid';
import './App.css'; // Estilos globais

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Travel Calendar ✈️</h1>
      </header>
      <main>
        <CalendarGrid />
      </main>
    </div>
  );
}

export default App;