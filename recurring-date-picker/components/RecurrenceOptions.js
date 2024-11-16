import { useRecurrenceStore } from '../store/recurrenceStore';

const RecurrenceOptions = () => {
  const { frequency, interval, setFrequency, setInterval } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Frequency</label>
      <select
        className="border rounded p-2 w-full"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      <label className="block text-sm font-medium mt-4 mb-2">Interval</label>
      <input
        type="number"
        min="1"
        className="border rounded p-2 w-full"
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value))}
      />
    </div>
  );
};

export default RecurrenceOptions;
