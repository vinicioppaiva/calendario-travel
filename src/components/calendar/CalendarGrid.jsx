import React from 'react';
import useCalendar from '../../hooks/useCalendar';
import CalendarHeader from './CalendarHeader';
import DayCell from './DayCell';
import "../../styles/Calendar.css"; 

const CalendarGrid = () => {
  // Pegamos os dados e funções do nosso Hook
  const { days, monthName, year, nextMonth, prevMonth } = useCalendar();

  // Nomes dos dias da semana para o cabeçalho da grade
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="calendar-container">
      {/* Passamos as funções de navegação e o nome do mês para o Header */}
      <CalendarHeader 
        monthName={monthName} 
        year={year} 
        onNext={nextMonth} 
        onPrev={prevMonth} 
      />

      <div className="grid-header">
        {weekDays.map(day => (
          <div key={day} className="weekday-label">{day}</div>
        ))}
      </div>

      <div className="grid-body">
        {days.map((date, index) => (
          <DayCell 
            key={index} 
            date={date} // Se for null, o DayCell renderiza vazio
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;