// Apenas processamento de dados. Não precisa ser .jsx
export const formatWeatherDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR').format(date);
};