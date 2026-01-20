import React from 'react';

const WeatherCard = ({ data, selectedDay }) => {
  return (
    <div className="weather-sidebar-info">
      <h3 className="sidebar-date">
        {selectedDay ? `Dia ${selectedDay} de Janeiro` : 'Selecione um dia'}
      </h3>
      
      {data ? (
        <div className="info-content">
          <p className="city-label"><strong>📍 {data.name}</strong></p>
          <div className="temp-section">
            <span className="emoji-large">☀️</span>
            <span className="temp-large">{Math.round(data.main?.temp || 0)}°C</span>
          </div>
          <p className="weather-desc">Céu limpo</p>
          <div className="details-grid">
            <p>💧 Umidade: {data.main?.humidity}%</p>
            <p>💨 Vento: {data.wind?.speed} km/h</p>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <p>Pesquise uma cidade para ver o clima da sua viagem.</p>
        </div>
      )}

      {selectedDay && (
        <div className="notes-section">
          <textarea placeholder="O que planeja fazer hoje?"></textarea>
          <button className="save-plan-btn">Salvar Plano</button>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;