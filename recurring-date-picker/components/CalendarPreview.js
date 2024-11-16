import { useRecurrenceStore } from '../store/recurrenceStore';
import { generateRecurringDates } from '../utils/dateUtils';

const CalendarPreview = () => {
  const { frequency, interval, startDate, endDate } = useRecurrenceStore();

  if (!startDate) {
    return <p className="text-sm text-gray-500 mt-4">Select a start date to preview recurrence.</p>;
  }

  const recurringDates = generateRecurringDates({ frequency, interval, startDate, endDate });

  return (
    <div className="mt-4">
      <h3 className="text-sm font-bold">Recurring Dates:</h3>
      <ul className="list-disc list-inside text-sm">
        {recurringDates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
