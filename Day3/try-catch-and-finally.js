/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {
    try{
        if(s.split()) return console.log(s.split("").reverse().join(''));
        throw new Error('s.split is not a function.\n');
    }catch(e){
        console.log(e.message);
        console.log(s);
    }
}
