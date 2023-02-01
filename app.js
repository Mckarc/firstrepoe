// console.log(typeof mydate.setFullYear(2023,1,3)/divisor);
// var divisor = 24*360*1000
// let time = myd
// console.log(time)
const h= document.querySelector(".hour")
const m= document.querySelector(".minute")
const s= document.querySelector(".second")
const delay = 1000
setInterval(()=>{
    const mydate = new Date()
    let hour = mydate.getHours()
    let minute = mydate.getMinutes()
    let second = mydate.getSeconds()
    h.innerHTML=hour
    m.innerHTML=minute
    s.innerHTML=second

},delay)

function genColor(){

    var watch = document.querySelector(".watch")
    var screen = document.querySelector(".display")
    var num1= Math.floor(Math.random()*225+1)
    var num2= Math.floor(Math.random()*225+1)
    var num3= Math.floor(Math.random()*225 +1)
    let rgb = `5px 5px 2px rgb(${num1},${num2},${num3}), -5px 3.8px 0.5px rgb(${num1},${num2},${num3})`
    screen.style.boxShadow = rgb;  
}

setInterval(genColor,1000)

// const timeout = setTimeout(()=>{
//     const mydate = new Date()
//     let hour = mydate.getHours()
//     let minute = mydate.getMinutes()
//     let second = mydate.getSeconds()
//     h.innerHTML=hour
//     m.innerHTML=minute
//     s.innerHTML=second

// })