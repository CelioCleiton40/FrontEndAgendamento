'use client';

import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import useCalendarStore from '../../store/useCalendarStore';
import { Sparkles, Clock, Calendar } from 'lucide-react';

// Registrar a localização em português
registerLocale('pt-BR', ptBR);

const getRandomStatus = (): 'Livre' | 'Ocupado' | 'Esperando Confirmação' => {
  const statuses = ['Livre', 'Ocupado', 'Esperando Confirmação'] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

interface TimeSlotProps {
  suggestion: {
    time: string;
    status: 'Livre' | 'Ocupado' | 'Esperando Confirmação';
  };
  onClick: () => void;
}

const TimeSlot = ({ suggestion, onClick }: TimeSlotProps) => {
  const getStatusStyles = (status: 'Livre' | 'Ocupado' | 'Esperando Confirmação'): string => {
    switch (status) {
      case 'Livre':
        return 'bg-gradient-to-br from-green-50 to-green-100 text-green-800 border-green-200';
      case 'Ocupado':
        return 'bg-gradient-to-br from-red-50 to-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`p-4 rounded-xl border shadow-sm cursor-pointer backdrop-blur-sm 
        ${getStatusStyles(suggestion.status)} 
        transition-all duration-300 ease-out`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <Clock className="w-4 h-4 mr-2" />
        <span className="text-lg font-medium">{suggestion.time}</span>
      </div>
      <div className="mt-2 text-sm font-medium opacity-80">
        {suggestion.status}
      </div>
    </motion.div>
  );
};

const TimeSlotGrid = React.memo(() => {
  const allSuggestions = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30'
  ];

  const [aiSuggestions, setAiSuggestions] = useState([
    { time: '09:00', status: getRandomStatus() },
    { time: '11:00', status: getRandomStatus() },
    { time: '15:30', status: getRandomStatus() }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiSuggestions([
        { time: allSuggestions[Math.floor(Math.random() * allSuggestions.length)], status: getRandomStatus() },
        { time: allSuggestions[Math.floor(Math.random() * allSuggestions.length)], status: getRandomStatus() },
        { time: allSuggestions[Math.floor(Math.random() * allSuggestions.length)], status: getRandomStatus() }
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <div className="flex items-center mb-4">
        <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Sugestões Inteligentes
        </h3>
      </div>
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiSuggestions.map((suggestion, index) => (
            <TimeSlot
              key={`${suggestion.time}-${index}`}
              suggestion={suggestion}
              onClick={() => console.log('Horário selecionado:', suggestion.time)}
            />
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
});

const CalendarPicker = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CustomInput = React.forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(({ value, onClick }, ref) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      ref={ref}
      className="w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg
        border border-gray-100 transition-all duration-300
        flex items-center justify-center gap-2 text-lg font-medium"
    >
      <Calendar className="w-5 h-5 text-purple-500" />
      <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        {value || 'Selecione uma data'}
      </span>
    </motion.button>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-lg rounded-2xl
        shadow-xl border border-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-6 text-center
          bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
      >
        Agende seu Horário
      </motion.h2>

      <div className="relative">
        {isMobile ? (
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            customInput={<CustomInput />}
            withPortal
            locale="pt-BR"
            className="rounded-xl border-gray-200 shadow-sm"
          />
        ) : (
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            inline
            minDate={new Date()}
            locale="pt-BR"
            className="mx-auto"
            calendarClassName="animate-in fade-in duration-300 border-none shadow-lg rounded-xl"
          />
        )}
      </div>

      <TimeSlotGrid />
    </motion.div>
  );
};

export default CalendarPicker;
