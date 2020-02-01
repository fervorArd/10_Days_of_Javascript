/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonant = [];
    for(let char of s){
        if(char=='a' || char=='e' || char=='i'|| char=='o' || char=='u') console.log(char);
        else consonant.push(char);
    }
    consonant.forEach(i => console.log(i));
    
}