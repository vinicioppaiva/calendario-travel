import React from 'react';

const DayCell = ({ date }) => {
  // Se a data for null (espaço vazio no início do grid), renderizamos uma div vazia
  if (!date) {
    return <div className="day-cell empty"></div>;
  }

  // Pegamos o número do dia (ex: 1, 15, 30)
  const dayNumber = date.getDate();

  // Verificamos se este dia é "hoje" para aplicar um destaque visual
  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <div className={`day-cell ${isToday ? 'today' : ''}`}>
      <span className="day-number">{dayNumber}</span>
      
      {/* Aqui é onde futuramente você poderá renderizar 
          ícones de clima ou lembretes de viagem */}
      <div className="day-content">
        {/* Exemplo: {hasTrip && <span className="trip-dot">✈️</span>} */}
      </div>
    </div>
  );
};

export default DayCell;