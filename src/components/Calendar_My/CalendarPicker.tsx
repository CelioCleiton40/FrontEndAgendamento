'use client';

import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import useCalendarStore from '../../store/useCalendarStore';

// Registrar a localização em português
registerLocale('pt-BR', ptBR);

const TimeSlotGrid = React.memo(() => {
  const aiSuggestions = ['09:00', '11:00', '15:30'];
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Sugestões da IA:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {aiSuggestions.map((time) => (
          <button
            key={time}
            className="bg-blue-100 text-blue-800 p-3 rounded-lg hover:bg-blue-200 transition-colors text-sm md:text-base"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
});

const CalendarPicker: React.FC = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
  }, []);

  const CustomInput: React.FC<{ value?: string; onClick?: () => void }> = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="w-full bg-white p-4 rounded-lg shadow-md text-lg font-semibold hover:bg-gray-50"
    >
      {value || 'Selecione uma data'}
    </button>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Escolha seu horário</h2>
      {isMobile ? (
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          minDate={new Date()}
          customInput={<CustomInput />}
          withPortal
          locale="pt-BR"
        />
      ) : (
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          inline
          minDate={new Date()}
          className="border-none"
          locale="pt-BR"
        />
      )}
      <TimeSlotGrid />
    </div>
  );
};

export default CalendarPicker;
