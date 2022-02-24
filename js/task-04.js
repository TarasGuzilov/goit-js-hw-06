const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});

btnIncrement.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});




