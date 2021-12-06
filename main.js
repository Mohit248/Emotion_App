prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="catptured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2mBS8MeMg/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is" + prediction_1;
    speak_2 = "The second prediction is" + prediction_2;
    var utter_This = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utter_This);
}