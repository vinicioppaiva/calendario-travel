import axios from 'axios';

// Coordenadas das cidades padrão para busca direta
const COORDENADAS = {
  'Rio de Janeiro, BR': { lat: -22.9064, lon: -43.1822 },
  'São Paulo, BR': { lat: -23.5505, lon: -46.6333 },
  'Belo Horizonte, BR': { lat: -19.9167, lon: -43.9345 },
  'Curitiba, BR': { lat: -25.4284, lon: -49.2733 },
  'Lisboa, PT': { lat: 38.7223, lon: -9.1393 },
  'Londres, GB': { lat: 51.5074, lon: -0.1278 },
  'Paris, FR': { lat: 48.8566, lon: 2.3522 },
  'Nova York, US': { lat: 40.7128, lon: -74.0060 }
};

export const getWeatherByCity = async (cityName) => {
  try {
    const coords = COORDENADAS[cityName];
    
    // Se a cidade não estiver na lista, usamos uma busca genérica ou erro
    if (!coords) throw new Error("Cidade fora da lista de teste.");

    const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
      params: {
        latitude: coords.lat,
        longitude: coords.lon,
        current_weather: true,
        timezone: "auto"
      }
    });

    // Formatando para que o seu WeatherCard continue entendendo os dados
    const data = response.data.current_weather;
    return {
      name: cityName,
      main: { temp: data.temperature },
      weather: [{ 
        description: "Céu limpo", // Open-meteo usa códigos, simplificamos aqui
        icon: "01d" 
      }],
      wind: { speed: data.windspeed }
    };
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    throw error;
  }
};