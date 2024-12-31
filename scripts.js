// Budget Calculator
const budgetForm = document.getElementById('budget-form');
const needsDisplay = document.getElementById('needs');
const wantsDisplay = document.getElementById('wants');
const savingsDisplay = document.getElementById('savings');

budgetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);

    if (income) {
        const needs = income * 0.50;
        const wants = income * 0.30;
        const savings = income * 0.20;

        needsDisplay.textContent = `$${needs.toFixed(2)}`;
        wantsDisplay.textContent = `$${wants.toFixed(2)}`;
        savingsDisplay.textContent = `$${savings.toFixed(2)}`;
    }
});

// Savings Goal Tracker
const savingsForm = document.getElementById('savings-form');
const monthlySavingsDisplay = document.getElementById('monthly-savings');

savingsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const months = parseInt(document.getElementById('months').value, 10);

    if (goalAmount && months && months > 0) {
        const monthlySavings = goalAmount / months;
        monthlySavingsDisplay.textContent = `$${monthlySavings.toFixed(2)}`;
        localStorage.setItem('savingsGoal', JSON.stringify({ goalAmount, months }));
    }
});

// Load saved savings goal from local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedGoal = JSON.parse(localStorage.getItem('savingsGoal'));
    if (savedGoal) {
        const { goalAmount, months } = savedGoal;
        const monthlySavings = goalAmount / months;
        monthlySavingsDisplay.textContent = `$${monthlySavings.toFixed(2)}`;
    }
});
