let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Clear user text
    document.getElementById("userInput").value = "";

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test"; // Once the user initiates the test by clicking the button, it dynamically switches to display the End Test
    button.onclick = endTest; // Simultaneously, this action invokes the execution of the endTest() function, seamlessly enabling the transition between initiating and concluding the test through a single button click.
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the tezt using regex to couont words correctly
    //      split(/\s+/): splits the input text using a regular expression to consider words separated by spaces, tabs, or newlines
    //      filter: Recall that the filter() method in JS is used to create a new array containing only the elements that pass a specific test.
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wmp = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" + 
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test"
    button.onclick = startTest;
}