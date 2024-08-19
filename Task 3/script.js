function convertTemperature() {
     // Prevent the form from submitting if this function is called on form submission
    if (event) {
        event.preventDefault();
    }

    // Get the value of the temperature input by the user
    const degree = parseFloat(document.getElementById('degree').value);
    const convertFrom = document.getElementById('convertFrom').value;
    const convertTo = document.getElementById('convertTo').value;

    console.log('Convert From:', convertFrom);
    console.log('Entered Temperature:', degree);
    console.log('Selection Conversion:', convertTo)

    let result;
    let unit;

    if (convertFrom === 'fahrenheit' && convertTo === 'celsius') {
        result = 5/9 * (degree - 32);
        unit = '°C'; // Celsius unit
    } else if (convertFrom === 'celsius' && convertTo === 'fahrenheit') {
        result = 9/5 * degree + 32;
        unit = '°F'; // Fahrenheit unit
    } else if (convertFrom === 'celsius' && convertTo === 'kelvin') {
        result = degree + 273.15;
        unit = 'K'; // Kelvin unit
    } else if (convertFrom === 'kelvin' && convertTo === 'celsius') {
        result = degree - 273.15;
        unit = '°C'; // Celsius unit
    } else if (convertFrom === 'fahrenheit' && convertTo === 'kelvin') {
        // 1. convert fahrenheit to celsius
        // 2. convert celsius to kelvin
        celsius = 5/9 * (degree - 32);
        result = celsius + 273.15;

        // or you can also combine the formula
        // result = 5/9 * (degree - 32) + 273.15;
        unit = 'K'; // Kelvin unit
    } else if (convertFrom === 'kelvin' && convertTo === 'fahrenheit') {
        kelvin = degree - 273.15;
        result = kelvin * 9/5 + 32;
        unit = 'K'; // Kelvin unit
    } else {
        result = 'Invalid Conversion (Try Again!)';
    }
    // Display the result in the 'result' span
    document.getElementById('result').textContent = `${result.toFixed(2)} ${unit}`;
}