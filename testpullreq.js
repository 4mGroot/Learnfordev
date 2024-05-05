console.log("je")
var x = 20
console.log(x)
{
    var x = 100
}
console.log(x)
//ลองเล่นคำสั่งที่ให้ผู้ใช้พิมลงมา
let Lotto = prompt("กรอกเลขที่ต้องการซื้อ")
let randomN = Math.floor(Math.random()*3)
//ทำให้แสดงลงหน้าเว็บ
document.getElementById("buy").innerHTML = Lotto
document.getElementById("resultnumber").innerHTML = randomN
if(Lotto == randomN){
    document.getElementById("resulttext").innerHTML = "ถูกหวย"
}
else{
    document.getElementById("resulttext").innerHTML = "คุณไม่ถูกนะ"
}
//boolean
console.log( 1 == 1)
console.log("4" == 4)
//"4" ไม่เท่ากับ 4 ใช่มั้ย
console.log("4" != 4)
console.log(10+10 <= 20)

//lab 2
let age = prompt("lab2 กรุณากรอกอายุ")
if(age > 18){
    //ตรง 18 สามารถเอาคลิบมาใส่ได้โดยกด แชร์คลิบ แล้วกด ฝัง
    document.getElementById("content18+").innerHTML = "18"
}
//lab 3 Grade
let score = prompt("คะแนนของคุณ")
if(score >=80){
    document.getElementById("resultGrade").innerHTML = "A"
}else if(score >=70){
    document.getElementById("resultGrade").innerHTML = "b"
}
else if(score >=60){
    document.getElementById("resultGrade").innerHTML = "c"
}
else if(score >=50){
    document.getElementById("resultGrade").innerHTML = "d"
}
else{
    document.getElementById("resultGrade").innerHTML = "f"
}

//for loop
for(var counter =0; counter <5; counter++){
    console.log("hello")
}

//โปรแกรมคำนนวณค่าอาหาร
let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i=1; i<=qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่"+i)
    //parseInt = แปลงข้อมูลใน () เป็นจำนวนเต็ม
    sum = sum + parseInt(item_price)
    //+= หมายถึงเพิ่มข้อมูลบรรทัดลงไปเรื่อยๆ
    document.getElementById("price-list").innerHTML += "รายการที่ "+i+":"+item_price+"บาท"+"<br>"//"<br>" = ใสแท็ก html เพือเว้นบบรทัด
    
}
document.getElementById("resultTotal").innerHTML = "ราคารวม "+sum+"บาท"

//โปรแกรมทายหัวก้อย
let round = prompt("ทายกี่รอบดี")
var score1 =0
for(var i = 1; i<=round; i++){
    var answer =prompt("head or koy")
    var random_answer =""
    if(Math.floor(Math.random()*10) <= 5){
        random_answer = "head"
    }else{
        random_answer = "koy"
    }
    if(answer == random_answer){
        alert("ถูก")
        score1 =score1 +1
    }else{
        alert("ผิด")
    }
    if(answer == random_answer){
        document.getElementById("game-list").innerHTML += "ครั้งที่ "+i+"คุณตอบ "+answer+" : ออก "+random_answer+"คุณถูก"+"<br>"
    }else{
        document.getElementById("game-list").innerHTML += "ครั้งที่ "+i+"คุณตอบ "+answer+" : ออก "+random_answer+"คุณผิด"+"<br>"
    }
    console.log(random_answer+ ":" +answer)
}
document.getElementById("round").innerHTML = "คุณเล่น "+round+" รอบ"
document.getElementById("scoreTrue").innerHTML = "คุณถูก "+score1+" รอบ"
//โปรแกรมคำนวนองศา
function toCelsius()
{
    let fahrenheit = prompt("fahrenheit")
    let value = (fahrenheit-32)*5/9
    return value +" c"
}
function display(elementId,value){
    document.getElementById(elementId).innerHTML = value
}
function toFah()
{
    let celsius = prompt("Celsius")
    let value = (celsius*9)/5+32
    document.getElementById("answer-tofahrenhi").innerHTML =value+" f"
}
toFah()
display("answer-tocel",toCelsius(120))

//return
function sayHello(username,userlastname){
    return "hello" + username + userlastname
}
let userInput = prompt("eanter name")
let userlastname = prompt("eanter lastname")
alert(sayHello(userInput,userlastname))

//Event
function eventSayhello(){
    alert("กดอีกสิ้")
}
