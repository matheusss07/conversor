const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
} )

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e){
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0){
        alert('Informe um valor correto');
        return;
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda');
        return;
    }
    converter();
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value * 5.47;
        result.innerHTML = valueformatter('pt-BR', 'EUR');

        animateResult();

    } else if(selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value * 5.06;
        result.innerHTML = valueformatter('en-US', 'USD');

        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '';

};

function valueformatter(Locale, currency) {
    const value = valueConverted.toLocaleString(`${Locale}`, { style: 'currency', currency: `${currency}`});
    return `<span>DIN</span> ${value} <span>DIN</span>`;
}

function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)'},
        { transform: 'translateY(0px)'},
    ], { duration: 500 })
}