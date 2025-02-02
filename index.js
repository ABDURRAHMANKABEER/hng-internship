let date = new Date();
let utcDate = date.toUTCString();

document.getElementById('current-time').textContent = `Current Time: ${utcDate}`;
