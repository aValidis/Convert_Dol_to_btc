const USDviuw = document.querySelector('.usd')
const usdInRub = document.querySelector('.usd-in-btc')
const usdInput = document.querySelector('.usd-input')

const valute = {
        USD: "21000"
}

usdInput.addEventListener('change', () => {
    if (!Number.isInteger(+usdInput.value)) {
        usdInRub.textContent = "Вы ввели не число"
    } else if (usdInput.value === '') {
        usdInRub.textContent = 0
    } else {
        usdInRub.textContent = Math.round(+usdInput.value * valute.USD) + " BTC"
    }
})

