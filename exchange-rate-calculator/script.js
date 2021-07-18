const currencyElement_one = document.getElementById("currency-one");
const currencyElement_two = document.getElementById("currency-two");
const amountElement_one = document.getElementById("amount-one");
const amountElement_two = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swapElement = document.getElementById("swap");

// eff7fe2ad4a7ad8fcd9584f2

function calculate() {
   const currency_one = currencyElement_one.value;
   const currency_two = currencyElement_two.value;

//    console.log(currency_one, currency_two)

    fetch(`https://v6.exchangerate-api.com/v6/eff7fe2ad4a7ad8fcd9584f2/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.conversion_rates[currency_two];

        rateElement.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountElement_two.value = (amountElement_one.value * rate).toFixed(2)

        console.log(rate);
    });
}


// Events
currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);
swapElement.addEventListener('click', () => {
    const dummy = currencyElement_one.value;
    currencyElement_one.value = currencyElement_two.value;
    currencyElement_two.value = dummy;
    calculate();
});

calculate();