document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const metricBtn = document.getElementById('metric-btn');
    const imperialBtn = document.getElementById('imperial-btn');
    const resultArea = document.getElementById('result-area');
    const bmiValueElement = resultArea.querySelector('.bmi-value');
    const bmiCategoryElement = resultArea.querySelector('.bmi-category');

    let isMetric = true;

    metricBtn.addEventListener('click', () => {
        if (!isMetric) {
            isMetric = true;
            metricBtn.classList.add('active');
            imperialBtn.classList.remove('active');
        }
    });

    imperialBtn.addEventListener('click', () => {
        if (isMetric) {
            isMetric = false;
            imperialBtn.classList.add('active');
            metricBtn.classList.remove('active');
        }
    });

    calculateBtn.addEventListener('click', () => {
        const heightInput = document.getElementById('height-cm');
        const weightInput = document.getElementById('weight-kg');
        
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid positive numbers for height and weight.");
            resultArea.style.display = 'none';
            return;
        }

        let bmi;
        if (isMetric) {
            const heightInMeters = height / 100;
            bmi = weight / (heightInMeters * heightInMeters);
        } else {
            const heightInMeters = height / 100;
            bmi = weight / (heightInMeters * heightInMeters);
        }
        
        displayResult(bmi);
    });

    function displayResult(bmi) {
        const roundedBmi = bmi.toFixed(1);
        let category = '';
        let className = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            className = 'underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
            className = 'normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            className = 'overweight';
        } else {
            category = 'Obese';
            className = 'obese';
        }

        bmiValueElement.textContent = roundedBmi;
        bmiCategoryElement.textContent = category;
        
        bmiCategoryElement.className = 'bmi-category ' + className;
        
        resultArea.style.display = 'block';
    }
});