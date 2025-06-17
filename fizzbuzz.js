var rules = [{'test': (x) => x%3 === 0,
              'result': (s) => s+'Fizz'}, //append 'Fizz'
             {'test': (x) => x%5 === 0,
              'result': (s) => s+'Buzz'}, //append 'Buzz'
             {'test': (x) => x%7 === 0,
              'result': (s) => s+'Bang'}, //append 'Bang'
             {'test': (x) => x%11 === 0,
              'result': (s) => 'Bong'}, //replace the text so far with 'Bong'
             {'test': (x) => x%13 === 0,
              'result': (s) => {var i = s.indexOf('B'); //insert 'Fezz' before the first occurrence of 'B'
                                if (i < 0) {i = s.length;}
                                return s.slice(0,i)+'Fezz'+s.slice(i,s.length)}}];

                                //replace output string with array of strings for easy reversal of order

// This is our main function
function fizzbuzz() {
    console.log("Starting...");
    
    const start = 1;
    const end = 100;

    for (let i = start; i <= end; i++) {
        var outputText = '';
        for (let rule of rules) {
            if (rule.test(i)) {
                outputText = rule.result(outputText);
            }
        }
        if (outputText.length === 0) {
            outputText = i.toString();
        }
        console.log(i.toString() + ': ' + outputText)
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

