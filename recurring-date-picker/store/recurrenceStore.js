import create from 'zustand';

export const useRecurrenceStore = create((set) => ({
  frequency: 'Daily',
  interval: 1,
  startDate: null,
  endDate: null,
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
