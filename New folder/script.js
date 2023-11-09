document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const householdSizeInput = document.getElementById('householdSize');
    const mealsSavedInput = document.getElementById('mealsSaved');
    const result = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        const householdSize = parseInt(householdSizeInput.value);
        const mealsSaved = parseInt(mealsSavedInput.value);

        if (!isNaN(householdSize) && !isNaN(mealsSaved)) {
            const mealsPerPerson = mealsSaved / householdSize;
            result.textContent = `You've saved an average of ${mealsPerPerson.toFixed(2)} meals per person from food waste!`;
        } else {
            result.textContent = 'Please enter valid numbers for household size and meals saved.';
        }
    });
});
