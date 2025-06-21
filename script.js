// Get display and all buttons
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'AC':
                // Clear the display
                display.value = '';
                break;

            case 'DE':
                // Delete last character
                display.value = display.value.slice(0, -1);
                break;

            case '=':
                // Evaluate the expression safely
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
                break;

            default:
                // Add button value to display
                display.value += value;
        }
    });
});
