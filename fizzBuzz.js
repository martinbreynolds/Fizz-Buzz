//Martin Reynolds - Fizz Buzz Pseudocode

/*
1. FOR LOOP:
   Set Initial Counter(number) to 1
   When Counter(number) reaches 100, stop loop 
   Increment counter(number) by 1 on each loop
   
       IF number Modulas(%) 3 && Modulas(%) 5 is equal to 0 
            PRINT 'fizzbuzz'
       3. ELSE IF number Modulas(%) 3 is equal to 0 
            PRINT 'fizz'
       4. ELSE IF number Modulas(%) 5 is equal to 0 
            PRINT 'buzz'
       5. ELSE 
            PRINT number
6. END LOOP          
*/

//Martin Reynolds - Fizz Buzz Code

for (var i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
