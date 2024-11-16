export const generateRecurringDates = ({ frequency, interval, startDate, endDate }) => {
    const dates = [];
    let currentDate = new Date(startDate);
  
    while (!endDate || currentDate <= endDate) {
      dates.push(new Date(currentDate));
      if (frequency === 'Daily') currentDate.setDate(currentDate.getDate() + interval);
      if (frequency === 'Weekly') currentDate.setDate(currentDate.getDate() + interval * 7);
      if (frequency === 'Monthly') currentDate.setMonth(currentDate.getMonth() + interval);
      if (frequency === 'Yearly') currentDate.setFullYear(currentDate.getFullYear() + interval);
    }
  
    return dates;
  };
  