const calendar = document.querySelector('table tbody');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Clear existing calendar
  calendar.innerHTML = '';

  // Add empty cells for the first days of the week
  for (let i = 0; i < firstDay; i++) {
    const td = document.createElement('td');
    calendar.appendChild(td);
  }

  // Add days with proper styling
  for (let i = 1; i <= daysInMonth; i++) {
    const td = document.createElement('td');
    td.textContent = i;
    if (i === new Date().getDate() && month === currentMonth && year === currentYear) {
      td.classList.add('today');
    }
    if (month === currentMonth && year === currentYear) {
      td.classList.add('current-month');
    }
    calendar.appendChild(td);
  }

  // Update month and year display
  document.getElementById('currentMonthYear').textContent = monthNames[month] + ' ' + year;
}

generateCalendar(currentMonth, currentYear);

// Add event listeners for navigation buttons
document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});