let arr = []
function addArray() {
    let number = document.getElementById('number').value;

    if (number !== '') {
        arr.push(Number(number));
    }
    jumlah()
}

function jumlah() {
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
    document.getElementById('total').textContent = total;
}