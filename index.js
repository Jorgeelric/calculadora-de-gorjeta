function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value 
}

function formtSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    // No tipValue estamos colocando o valor da gorjeta 
    let tipValue = bill * (tipPercent / 100)
    // Qui é o total da conta 
    let billTotal = bill + tipValue
    // Aqui colocamos a quantidade de pessoas que irá pagar a gorjeta dividida
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %';
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formtSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}
