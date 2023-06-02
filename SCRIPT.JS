const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const dolar = 5.1

const convertValues = () => {
  const inputReals = document.getElementById("input-real").value
  const realvalueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")


  realvalueText.innerHTML = inputReals

  realvalueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputReals);

  currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(inputReals / dolar);

}

changeCurrency = (chamada) => 
  console.log(chamada)
  const currencyName = document.getElementById("currency-name")
  const currencyimg = document.getElementById("currency-img")

  if (select.value === 'US$ Dolar') {
    currencyName.innerHTML = "Dolar"
    currencyimg.src= "assets/dolar.png.png"
  };

  if (select.value === '€ Euro') {
    currencyName.innerHTML = "Euro"
    currencyimg.src= "assets/euro.png.png"
  }


button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)