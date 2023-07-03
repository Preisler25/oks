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

//fel9: kérj be egy számot, és írd ki, hogy páros-e vagy páratlan

//(param, param) ==> func ==> { code } ==> callback
//[list element, list element, list element] ==> array
//{key: value} ==> object


readline.question('Írj egy számot!\n', szam => {
    if(parseInt(szam) % 2 == 0){
       console.log("páros") 
    }
    else {
        console.log("páratlan")
    }
    
    //páros-e vagy páratlan

    readline.close();
});

readline.question('Írj egy számot!\n', szam => {

    szam = parseInt(szam);
    
    if (szam < 0) {
        console.log("Negatív")
    }
    if (szam >= 0) {
        console.log("Pozitív")
    }

    readline.close();
});

//fel10: kérj be egy számot, és írd ki, hogy pozitív-e vagy negatív ||  <0 || >=0  \\\\ sting[0] "alam" --> "a", sting[1] "l", sting[2] "a", sting[3] "m"

readline.question('Adj meg egy számot!', szam =>{

    //szam (sting) --> előjel
    let elojel = szam.slice(0,1);

    //szam (int)
    szam = parseInt(szam);

    //szam értékét vizsgáljuk hogy szam-e
    if (typeof szam == "number") {

        if (elojel == "-"){
            console.log("Negatív");
        }
    
        else {
            console.log("Pozitív");
        }
    }

    else {
        console.log ("KÖCSOG VAGY TE BUZI! Ui.: Számot írj pls")
    }
    
    readline.close();
});


*/
