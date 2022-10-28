const form = document.querySelector('form');
const output = document.querySelector('.output');

const currencyConverter = function (event) {
  event.preventDefault();

  const amount = form.amount.value;
  const conversion = form.conversion.value;

  if (conversion === 'aruban') {
    const newAmount = amount * 1.33;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Aruban Florin`;
  } else if (conversion === 'bahamian') {
    const newAmount = amount * 0.74;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Bahamian Dollars`;
  } else if (conversion === 'barbadian') {
    const newAmount = amount * 1.5;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Barbadian Dollars`;
  } else if (conversion === 'belize') {
    const newAmount = amount * 1.5;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Belize Dollars`;
  } else if (conversion === 'bermudian') {
    const newAmount = amount * 0.74;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Bermudian Dollar`;
  } else if (conversion === 'cayman') {
    const newAmount = amount * 0.62;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Cayman Islands Dollar`;
  } else if (conversion === 'colombian') {
    const newAmount = amount * 3545.55;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Colombian Pesos`;
  } else if (conversion === 'costa') {
    const newAmount = amount * 463.71;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Costa Rica Colon`;
  } else if (conversion === 'cuban') {
    const newAmount = amount * 17.86;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Cuban Pesos`;
  } else if (conversion === 'danish') {
    const newAmount = amount * 5.5;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Danish Krone`;
  } else if (conversion === 'dominican') {
    const newAmount = amount * 40.12;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Dominican Pesos`;
  } else if (conversion === 'caribbean') {
    const newAmount = amount * 2;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    East Caribbean Dollars`;
  } else if (conversion === 'euro') {
    const newAmount = amount * 0.74;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    French Euros`;
  } else if (conversion === 'guatemalan') {
    const newAmount = amount * 5.83;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Guatemalan Quetzals`;
  } else if (conversion === 'haitian') {
    const newAmount = amount * 93.72;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Haitian Gourdes`;
  } else if (conversion === 'honduran') {
    const newAmount = amount * 18.39;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Honduran Lempira`;
  } else if (conversion === 'jamaican') {
    const newAmount = amount * 113.64;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Jamaican Dollars`;
  } else if (conversion === 'mexican') {
    const newAmount = amount * 14.65;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Mexican Pesos`;
  } else if (conversion === 'netherlands') {
    const newAmount = amount * 1.43;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Netherlands Antillean Guilders`;
  } else if (conversion === 'nicaraguan') {
    const newAmount = amount * 26.78;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Nicaraguan Cordobas`;
  } else if (conversion === 'panamanian') {
    const newAmount = amount * 0.74;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Panamanian Bolboas`;
  } else if (conversion === 'sint') {
    const newAmount = amount * 2;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    Sint Eustatius`;
  } else if (conversion === 'usa') {
    const newAmount = amount * 0.74;
    output.innerHTML = ` $${amount} Canadian dollars is equal to $${newAmount.toFixed(2)} 
    US Dollars`;
  } else {
    output.innerHTML = `Invalid conversion type. Please Try again.`;
  }
}

form.addEventListener('submit', currencyConverter);
