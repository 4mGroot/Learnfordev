function toCelsius(fahrenheit)
{
    let value = (fahrenheit-32)*5/9
    return value +" c"
}
function display(elementId,value){
    document.getElementById(elementId).innerHTML = value
}
function toFah(celsius)
{
    let value = (celsius*9)/5+32
    return value +" f"
}
function toCelsiusProgram(value){
    alert(toCelsius(value))
}
function toFahProgram(value){
    alert(toFah(value))
}

//เปลี่ยนแปลง text ด้วย innertext ไปที่ id name
let a = document.getElementById('namechang')//อ้างอิง
let x =10
let y =20
function displaytext(){
    a.innerText = "champoo เองจ้า"
    a.innerHTML = `แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`//แสดงผล ที่ใช้แบบนี้เพราะเลี่ยงการต่อ แบบ +
}
//ดูในkongrassiam ท้ายๆ มันจะช่วยได้เยอะ