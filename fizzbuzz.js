var rules = [{'factor': 3,
              'text': 'Fizz'},
             {'factor': 5,
              'text': 'Buzz'}];

// This is our main function
function fizzbuzz() {
    console.log("Starting...");
    
    const start = 1;
    const end = 100;

    for (let i = start; i <= end; i++) {
        var outputText = '';
        for (let rule of rules) {
            if (i%rule.factor == 0) {
                outputText = outputText + rule.text;
            }
        }
        if (outputText.length == 0) {
            outputText = i.toString();
        }
        console.log(outputText)
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

