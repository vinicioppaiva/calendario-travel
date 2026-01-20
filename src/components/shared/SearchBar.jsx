import React, { useState } from 'react';

const CIDADES_PADRAO = [
  { name: 'Rio de Janeiro', country: 'BR' },
  { name: 'São Paulo', country: 'BR' },
  { name: 'Belo Horizonte', country: 'BR' },
  { name: 'Curitiba', country: 'BR' },
  { name: 'Lisboa', country: 'PT' },
  { name: 'Londres', country: 'GB' },
  { name: 'Paris', country: 'FR' },
  { name: 'Nova York', country: 'US' }
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = CIDADES_PADRAO.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (city) => {
    const fullCity = `${city.name}, ${city.country}`;
    setQuery(fullCity);
    setShowSuggestions(false);
    onSearch(fullCity);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Escolha uma cidade da lista..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
        />
        <button onClick={() => onSearch(query)}>Ver Clima</button>
      </div>

      {showSuggestions && query.length > 0 && (
        <ul className="suggestions-list">
          {filtered.map((c, i) => (
            <li key={i} onClick={() => handleSelect(c)}>
              {c.name}, {c.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;