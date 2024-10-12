let prediction_1 = "";  // Ensure prediction_2 is also defined if needed

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log("ml5 version", ml5.version);

const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QHbESmae-/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    const synth = window.speechSynthesis;
    const speak_data_1 = "The prediction is " + prediction_1;
    const utterThis = new SpeechSynthesisUtterance(speak_data_1);  // Removed speak_data_2
    synth.speak(utterThis);
}

function predict() {
    const img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
    }
}

// Navigation functions
function diagnose() {
    window.location.href = "index.html";
}

function support() {
    window.location.href = "support.html";
}

function back() {
    window.location.href = "main.html";
}
function q(){
    window.location.href = "q.html";
}

