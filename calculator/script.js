const display = document.getElementById('display');

function appendValue(value) {
  if (display.textContent === '0') {
    display.textContent = '';
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent) || '0';
  } catch {
    display.textContent = 'Error';
  }
}
