const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_code) {
    let selected;
    if (i == 0) {
      selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "NPR" ? "selected" : "";
    }
    let optionTag = `
            <option value="${currency_code}" ${selected}>${currency_code}</option>     
        `;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector(".amount input");
  const exchangeRateTxt = document.querySelector(".exchange-rate");
  let amountVal = amount.value;

  if (amount == "" || amount == "0") {
    amount.value = "1"
    amountVal = 1;
  }

  exchangeRateTxt.innerText = "Getting Exchange Rate";
}




