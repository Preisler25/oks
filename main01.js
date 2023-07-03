/*

//fel0: def 2 number
let a = 4;
let b = 6;

//fel1: a, b változók --> type(num) --> c változó = a + b

let c = a + b;
console.log(c);

//fel2: a, b változók --> type(num) --> c változó = a - bú

c = a - b;
console.log(c);

//fel3: a, b változók --> type(num) --> c változó = a * b

c = a * b;
console.log(c);

//fel4: a, b változók --> type(num) --> c változó = a / b

c = a / b;
console.log(c);

//fel5: a emeld a b-edik hatványra

c = a ** b;
console.log(c);

//fel6: c legyen a/b maradéka

c = a % b
console.log(c);

//fel7: c legyen egyel nagyobb

c++;

//fel8: c legyen egyel kisebb

c--;

//-----
c += 4; // c = c + 4;
c -= 4; // c = c - 4;
c *= 4; // c = c * 4;
c /= 4; // c = c / 4;
c %= 4; // c = c % 4;
c **= 4; // c = c ** 4;
 
//.......

*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  







//fel9: kérj be egy számot, és írd ki, hogy páros-e vagy páratlan
readline.question('Írj egy számot!\n', szam => {
    if(szam % 2 == 0){
       console.log("páros") 
    }
    else {
        console.log("páratlan")
    }
    
    //páros-e vagy páratlan

    readline.close();
}
);