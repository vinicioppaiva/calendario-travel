import React from 'react';

const CalendarHeader = ({ monthName, year, onNext, onPrev }) => {
  return (
    <div className="calendar-header">
      <button onClick={onPrev} className="nav-button"> &lt; </button>
      
      <h2 className="month-display">
        {/* Transformar a primeira letra do mês em maiúscula */}
        {monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}
      </h2>
      
      <button onClick={onNext} className="nav-button"> &gt; </button>
    </div>
  );
};

export default CalendarHeader;