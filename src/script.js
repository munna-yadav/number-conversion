  


// function to take input as binary
function takeAsBinary(){
  document.getElementById("from").textContent="Binary"
  var number=document.getElementById("number_input").value
  var binary=parseInt(number,2)
  return binary;
}

function takeAsDecimal(){
  document.getElementById("from").textContent="Decimal"
  var number=document.getElementById("number_input").value
  var decimal=parseFloat(number,10)
  return decimal
}

function convertIntoBinary(){
  document.getElementById("base").textContent="Binary"
    var number=document.getElementById("number_input").value
    var binary=parseFloat(number, 10).toString(2);
    var roundedBinary = parseFloat(binary).toFixed(4); 
    document.getElementById("output").innerText=roundedBinary
    document.getElementById('base').textContent = 'Binary';
}

// to convert number into octal
function convertIntoOctal(){
  document.getElementById("base").textContent="Octal"

  var number=document.getElementById("number_input").value
  var octal=parseFloat(number, 10).toString(8);
  var roundedOctal=parseFloat(octal).toFixed(4)
  document.getElementById("output").innerText=roundedOctal
}

//function to convert number into hexadecimal
function convertIntoHexa(){
  document.getElementById("base").textContent="Hexa Decimal"
   var number=document.getElementById("number_input").value
   var hexadecimal=parseFloat(number,10).toString(16)
  //var convert_number= takeAsBinary()    
  // var roundedHexaDecimal=parseFloat(hexadecimal).toFixed(4)
  document.getElementById("output").innerText=hexadecimal.toUpperCase();
}
function toggleDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// Function to update the dropdown button text and hide the dropdown content
function selectConversionOption(conversionFunction, buttonText) {
  conversionFunction();
  document.getElementById('base').textContent = buttonText;
  toggleDropdown();
}

// Get all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropbtn');

// Add event listener to each dropdown button
dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleDropdown();
  });
});

// Get all conversion options buttons
const conversionOptions = document.querySelectorAll('.dropdown-content button');

// Add event listener to each conversion option button
conversionOptions.forEach(option => {
  option.addEventListener('click', () => {
    const buttonText = option.textContent;
    if (buttonText === 'Binary') {
      selectConversionOption(convertIntoBinary, buttonText);
    } else if (buttonText === 'Octal') {
      selectConversionOption(convertIntoOctal, buttonText);
    } else if (buttonText === 'Hexadecimal') {
      selectConversionOption(convertIntoHexa, buttonText);
    }
  });
});
