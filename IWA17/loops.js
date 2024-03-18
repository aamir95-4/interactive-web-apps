const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (length) => {
  const result = [];
  // Fixed the for loop
  for (let i = 0; i < length; i++) {
    result.push(i);
  }
  return result;
};

const createData = () => {
  // Fixed function to new Date()
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay(); // Fixed getting start day of the week
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5);
  const result = [];

  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      // Fixed loop for each day of the week
      const day = dayIndex - startDay + weekIndex * 7 + 1; // Fixed day calculation
      const isValid = day > 0 && day <= daysInMonth;

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }

  return result;
};

const addCell = (existing, classString, value) => {
  const result = `<td class="${classString}">&nbsp;${value}&nbsp;</td>`;
  return existing + result;
};

const createHtml = (data) => {
  let result = "";

  for (const { week, days } of data) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 7 || dayOfWeek === 1;
      const isAlternate = week % 2 === 0;

      let classString = "table__cell";

      if (isToday) classString += " table__cell_today";
      if (isWeekend) classString += " table__cell_weekend";
      if (isAlternate) classString += " table__cell_alternate";

      inner = addCell(inner, classString, value);
    }

    result += `<tr>${inner}</tr>`;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
