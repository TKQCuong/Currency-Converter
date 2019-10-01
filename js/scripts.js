// const exchangeRates = {
//     "usd": {
//         "eur": 0.91,
//         "aud": 1.48,
//         "krw": 1203.00,
//         "vnd": 23200.70,
//     },
//     "eur": {
//         "usd": 1.09,
//         "aud": 1.62,
//         "krw": 1316.21,
//         "vnd": 25383.96,
//     },
//     "aud": {
//         "usd": 0.68,
//         "eur": 0.62,
//         "krw": 813.58,
//         "vnd": 15690.63,
//     },
//     "krw": {
//         "usd": 0.00083,
//         "aud": 0.0012,
//         "eur": 0.00076,
//         "vnd": 19.29,
//     },
//     "vnd": {
//         "krw": 0.052,
//         "usd": 0.000043,
//         "aud": 0.000064,
//         "eur": 0.000039,
//     },
// }

//Add Money Sign
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

//Real time currency
async function callApi(conversion, moneyInput) {
    let url = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + conversion + "&compact=ultra&apiKey=0913e5f1e4f80c4d11f2";
    let result = await fetch(url);
    let json = await result.json();

    console.log(json[conversion])

    return json[conversion] * moneyInput
}

//CLICK button
document.getElementById("conversion-button").onclick = moneyExchange;
//Calculation
async function moneyExchange() {
    const From = document.getElementById("From").value;
    // const currencyFrom = From[From.selectedIndex].value
    const To = document.getElementById("To").value;
    const moneyInput = document.getElementById("amountTextbox").value;
    const fromTo = From + "_" + To;
    // const currencyTo = To[To.selectedIndex].value
    const convertedValue = await callApi(fromTo, moneyInput)
    // const moneyExchange = moneyInput * exchangeRates[currencyFrom.toLowerCase()][currencyTo.toLowerCase()];
    document.getElementById("result").innerHTML = formatCurrency(To, convertedValue)
}




































































