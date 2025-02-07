'use client';

import { create } from 'zustand';

interface CalendarState {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));

export default useCalendarStore;
