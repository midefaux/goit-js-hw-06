let counterValue = 0;

        const valueElement = document.getElementById('value');
        const incrementButton = document.querySelector('[data-action="increment"]');
        const decrementButton = document.querySelector('[data-action="decrement"]');

        function updateCounter() {
            valueElement.textContent = counterValue;
        }
        incrementButton.addEventListener('click', () => {
            counterValue++;
            updateCounter();
        });
        decrementButton.addEventListener('click', () => {
            counterValue--;
            updateCounter();
        });
        updateCounter();
