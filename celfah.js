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
alert(toCelsiusProgram(20))