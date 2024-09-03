// let arr = [];
// function addArray() {
//   let number = document.getElementById("number").value;

//   if (number !== "") {
//     arr.push(Number(number));
//   }
//   jumlah();
// }

// function jumlah() {
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
//   document.getElementById("total").textContent = total;
// }

function jumlaharray(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}

console.log(jumlaharray([1,2,3,4,5]));
