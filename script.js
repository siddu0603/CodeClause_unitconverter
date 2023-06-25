const units = {
    length: {
      cm: 'Centimeters (cm)',
      inch: 'Inches (in)',
      m: 'Meters (m)',
      ft: 'Feet (ft)'
    },
    temperature: {
      celsius: 'Celsius (°C)',
      fahrenheit: 'Fahrenheit (°F)',
      kelvin: 'Kelvin (K)'
    },
    time: {
      hour: 'Hours (h)',
      minute: 'Minutes (min)',
      second: 'Seconds (s)'
    },
    weight: {
      gram: 'Grams (g)',
      kg: 'Kilograms (kg)',
      lb: 'Pounds (lb)',
      oz: 'Ounces (oz)'
    }
  };
  
  function changeUnits(type) {
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');
  
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';
  
    const selectedUnits = units[type];
  
    for (const key in selectedUnits) {
      const option = document.createElement('option');
      option.value = key;
      option.text = selectedUnits[key];
      inputUnitSelect.appendChild(option.cloneNode(true));
      outputUnitSelect.appendChild(option);
    }
  }
  
  function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
  
    let outputValue;
  
    // Length Conversions
    if (inputUnit === 'cm') {
      if (outputUnit === 'inch') {
        outputValue = inputValue / 2.54;
      } else if (outputUnit === 'm') {
        outputValue = inputValue / 100;
      } else if (outputUnit === 'ft') {
        outputValue = inputValue / 30.48;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'inch') {
      if (outputUnit === 'cm') {
        outputValue = inputValue * 2.54;
      } else if (outputUnit === 'm') {
        outputValue = inputValue * 0.0254;
      } else if (outputUnit === 'ft') {
        outputValue = inputValue / 12;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'm') {
      if (outputUnit === 'cm') {
        outputValue = inputValue * 100;
      } else if (outputUnit === 'inch') {
        outputValue = inputValue * 39.37;
      } else if (outputUnit === 'ft') {
        outputValue = inputValue * 3.281;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'ft') {
      if (outputUnit === 'cm') {
        outputValue = inputValue * 30.48;
      } else if (outputUnit === 'inch') {
        outputValue = inputValue * 12;
      } else if (outputUnit === 'm') {
        outputValue = inputValue / 3.281;
      } else {
        outputValue = inputValue;
      }
    }
  
    // Temperature Conversions
    else if (inputUnit === 'celsius') {
      if (outputUnit === 'fahrenheit') {
        outputValue = (inputValue * 9/5) + 32;
      } else if (outputUnit === 'kelvin') {
        outputValue = inputValue + 273.15;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'fahrenheit') {
      if (outputUnit === 'celsius') {
        outputValue = (inputValue - 32) * 5/9;
      } else if (outputUnit === 'kelvin') {
        outputValue = (inputValue - 32) * 5/9 + 273.15;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'kelvin') {
      if (outputUnit === 'celsius') {
        outputValue = inputValue - 273.15;
      } else if (outputUnit === 'fahrenheit') {
        outputValue = (inputValue - 273.15) * 9/5 + 32;
      } else {
        outputValue = inputValue;
      }
    }
  
    // Time Conversions
    else if (inputUnit === 'hour') {
      if (outputUnit === 'minute') {
        outputValue = inputValue * 60;
      } else if (outputUnit === 'second') {
        outputValue = inputValue * 3600;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'minute') {
      if (outputUnit === 'hour') {
        outputValue = inputValue / 60;
      } else if (outputUnit === 'second') {
        outputValue = inputValue * 60;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'second') {
      if (outputUnit === 'hour') {
        outputValue = inputValue / 3600;
      } else if (outputUnit === 'minute') {
        outputValue = inputValue / 60;
      } else {
        outputValue = inputValue;
      }
    }
  
    // Weight Conversions
    else if (inputUnit === 'gram') {
      if (outputUnit === 'kg') {
        outputValue = inputValue / 1000;
      } else if (outputUnit === 'lb') {
        outputValue = inputValue / 453.592;
      } else if (outputUnit === 'oz') {
        outputValue = inputValue / 28.35;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'kg') {
      if (outputUnit === 'gram') {
        outputValue = inputValue * 1000;
      } else if (outputUnit === 'lb') {
        outputValue = inputValue * 2.205;
      } else if (outputUnit === 'oz') {
        outputValue = inputValue * 35.274;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'lb') {
      if (outputUnit === 'gram') {
        outputValue = inputValue * 453.592;
      } else if (outputUnit === 'kg') {
        outputValue = inputValue / 2.205;
      } else if (outputUnit === 'oz') {
        outputValue = inputValue * 16;
      } else {
        outputValue = inputValue;
      }
    } else if (inputUnit === 'oz') {
      if (outputUnit === 'gram') {
        outputValue = inputValue * 28.35;
      } else if (outputUnit === 'kg') {
        outputValue = inputValue / 35.274;
      } else if (outputUnit === 'lb') {
        outputValue = inputValue / 16;
      } else {
        outputValue = inputValue;
      }
    }
  
    document.getElementById('outputValue').textContent = outputValue.toFixed(2);
  }
  
  changeUnits('length'); 
  