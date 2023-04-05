// Esercizio 1
{
    let x = 2;
    let y = 4;
    if (x > y) {
        console.log(x)
    }
    else {
        console.log(y)
    }
}

// Esercizio 2
{
    let x = 4;
    if (x != 5) {
        console.log('not equal')
    }
    else {
        console.log('equal to 5')
    }
}

// Esercizio 3
{
    let x = 25;
    if (x % 5 == 0) {
        console.log('divisibile per 5')
    }
    else {
        console.log('non divisibile per 5')
    }
}

// Esercizio 4
{

    let x = 8;
    let y = 3;

    if (x == 8) {
        console.log('verificato')
    }
    else if (y == 8) {
        console.log('verificato')
    }
    else if (x + y == 8) {
        console.log('verificato')
    }
    else if (x - y == 8) {
        console.log('verificato')
    }
    else {
        console.log('non verificato')
    }
}

// Esercizio 5
{
    let totalShoppingCart = 70;
    let spedizione = 10;
    let totale = totalShoppingCart + spedizione;
    if (totalShoppingCart > 50) {
        totale = totalShoppingCart
        console.log("il totale e' " + totale)
    }
    else {
        console.log("il totale e' " + totale)
    }
}

// Esercizio 6
{
    let totalShoppingCart = 30;
    let spedizione = 10;
    let blackFridayPrice = totalShoppingCart - (totalShoppingCart * .2);
    let totale = blackFridayPrice + spedizione;
    if (totale > 50) {
        totale = blackFridayPrice
        console.log("il totale e' " + totale)
    }
    else {
        console.log("il totale e' " + totale)
    }
}

// Esercizio 7
{
    let x = 3;
    let y = 4;
    let z = 5;

    myArray = [z, x, y];
    myArray.sort()

    console.log(myArray)
}

// Esercizio 8
{

    let x = '34';
    console.log(typeof x);

}

// Esercizio 9
{
    let x = 9;

    if (x % 2 == 0) {
        console.log("e' pari")
    }
    else {
        console.log("e' dispari")
    }
}

// Esercizio 10
{

    let val = 7;
    if (val < 5) {
        console.log("Meno di 5");
    } else if (val < 10) {
        console.log("Meno di 10");
    } else {
        console.log("Uguale a 10 o maggiore");
    }
}

// Esercizio 11
{
    const me = {
        name: 'John',
        lastName: 'Doe',
        skills: ['javascript', 'html', 'css'],
    }

    me.city = 'Toronto';
    console.log(me)
}

// Esercizio 12
{
    const me = {
        name: 'John',
        lastName: 'Doe',
        skills: ['javascript', 'html', 'css'],
    }
    delete me.lastName;
    console.log(me)
}
// Esercizio 13

{
    const me = {
        name: 'John',
        lastName: 'Doe',
        skills: ['javascript', 'html', 'css'],
    }

    delete me.skills[2]
    console.log(me)
}
// Esercizio 14

{
    const myArray = [];

    myArray.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '10')
    console.log(myArray)
}

// Esercizio 15

{
    const myArray = [];

    myArray.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '10')
    myArray.splice(9, 1, '100')
    console.log(myArray)
}