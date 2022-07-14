/*

ternary v if statement to greet students depending on time of time. If time is earlier the 12:00 it will say 
morning and it will say evening if after.

*/

const date = new Date()
let hour = date.getHours()

let message = `good ${hour < 12 ? `morning` : `evening`}`
console.log(message)




if (hour < 12){
    greeting = `morning`
}else{
    greeting = `evening`
}
let message2 = `Good ${greeting}`
console.log(message2)


// Ternary example

let priceOfFruit = 5.00

console.log(priceOfFruit < 6.00 ? `ok i'll buy it` : `maybe next time.`)