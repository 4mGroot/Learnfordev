console.log("je")
var x = 20
console.log(x)
{
    var x = 100
}
console.log(x)
//ลองเล่นคำสั่งที่ให้ผู้ใช้พิมลงมา
let Lotto = prompt("กรอกเลขที่ต้องการซื้อ")
//ทำให้แสดงลงหน้าเว็บ
document.getElementById("buy").innerHTML = Lotto
document.getElementById("result").innerHTML = Math.floor(Math.random()*10)
//boolean
console.log( 1 == 1)
console.log("4" == 4)
//"4" ไม่เท่ากับ 4 ใช่มั้ย
console.log("4" != 4)
console.log(10+10 <= 20)

//lab 2
let age = prompt("lab2 กรุณากรอกอายุ")
if(age > 18){
    document.getElementById("content18+").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bbImKsdEvMM?si=Btgm3BlVF9lblzyl\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
}
