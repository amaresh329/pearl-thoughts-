import { useRecurrenceStore } from '../store/recurrenceStore';
import RecurrenceOptions from './RecurrenceOptions';
import CalendarPreview from './CalendarPreview';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Recurring Date Picker</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Start Date</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">End Date (optional)</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
        />
      </div>
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
