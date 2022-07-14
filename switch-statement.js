/*
allows you to if a param has a particular *case*. Don't forget to break after case. suggested in an instance 
of 'if statements`` getting too involved.
*/

let fruit = `grapes`
fruit = `pineapple`

switch(fruit){
    case `pear`:
        console.log(`oh what what a lovely pear`)
        break;
    case `pineapple`:
        console.log(`very nice pineapple!`)
        break;

        default:
            console.log(`out of`, fruit)
}



let cost = 6.48

switch(cost){
    case cost < 7.50:
        console.log(`I can afford it`)
        break;

    default:
        console.log(`${cost}! thats a little rich for my blood!`)
}

/*



*/ 