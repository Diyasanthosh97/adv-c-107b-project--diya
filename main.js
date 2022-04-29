function soundClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JZzGSVdOk/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}