console.log("je")
var x = 20
console.log(x)
{
    var x = 100
}
console.log(x)
let Lotto = prompt("กรอกเลขที่ต้องการซื้อ")
document.getElementById("buy").innerHTML = Lotto
document.getElementById("result").innerHTML = Math.floor(Math.random()*10)