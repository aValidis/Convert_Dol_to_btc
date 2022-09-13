const rateInput = document.getElementById('rate');
const sumInput = document.getElementById('sum');
const resultElement = document.getElementById('result');

rateInput.addEventListener('change', recalculate);
sumInput.addEventListener('change', recalculate);

function recalculate(){
		resultElement.textContent = convert(rateInput.value, sumInput.value);
}

function convert(rate, sum) {
	if(rate == 0) return '?';
  
  return (sum / rate).toFixed(7);
}

