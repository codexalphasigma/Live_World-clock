const cities = [
  { name: 'New York', timeZone: 'America/New_York' },
  { name: 'London', timeZone: 'Europe/London' },
  { name: 'Japan', timeZone: 'Asia/Tokyo' },
  { name: 'South Korea', timeZone: 'Asia/Seoul' },
  { name: 'Thailand', timeZone: 'Asia/Bangkok' },
  { name: 'Australia', timeZone: 'Australia/Sydney' },
  { name: 'South Africa', timeZone: 'Africa/Johannesburg' },
  { name: 'Delhi', timeZone: 'Asia/Kolkata' }
];

const clockGrid = document.getElementById('clockGrid');

function createClockCards() {
  cities.forEach((city) => {
    const card = document.createElement('div');
    card.className = 'clock-card';

    card.innerHTML = `
      <div class="city-name">${city.name}</div>
      <div class="time" id="time-${city.name.replace(/\s+/g, '-').toLowerCase()}"></div>
      <div class="date" id="date-${city.name.replace(/\s+/g, '-').toLowerCase()}"></div>
    `;

    clockGrid.appendChild(card);
  });
}

function updateClocks() {
  const now = new Date();

  cities.forEach((city) => {
    const timeId = `time-${city.name.replace(/\s+/g, '-').toLowerCase()}`;
    const dateId = `date-${city.name.replace(/\s+/g, '-').toLowerCase()}`;

    const timeText = new Intl.DateTimeFormat('en-US', {
      timeZone: city.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now);

    const dateText = new Intl.DateTimeFormat('en-US', {
      timeZone: city.timeZone,
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(now);

    document.getElementById(timeId).textContent = timeText;
    document.getElementById(dateId).textContent = dateText;
  });
}

createClockCards();
updateClocks();
setInterval(updateClocks, 1000);
