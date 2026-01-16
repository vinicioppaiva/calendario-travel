import { useState, useMemo } from 'react';

const useCalendar = () => {
  // Estado que armazena a data atual visualizada no calendário
  const [currentDate, setCurrentDate] = useState(new Date());

  // Cálculos memorizados para performance (só recalculam se a data mudar)
  const { days, monthName, year } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Nome do mês em português
    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);

    // 1. Descobrir o primeiro dia da semana do mês (0 = Domingo, 1 = Segunda...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // 2. Descobrir quantos dias tem o mês atual
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 3. Criar o array de dias
    const daysArray = [];

    // Preencher espaços vazios antes do dia 1 (dias do mês anterior)
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    // Preencher os dias reais do mês
    for (let d = 1; d <= daysInMonth; d++) {
      daysArray.push(new Date(year, month, d));
    }

    return { days: daysArray, monthName, year };
  }, [currentDate]);

  // Funções para navegar entre os meses
  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  return {
    currentDate,
    days,
    monthName,
    year,
    nextMonth,
    prevMonth
  };
};

export default useCalendar;