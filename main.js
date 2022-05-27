Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
};

console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/u6NyF979s/model.json', modelLoaded);

function modelLoaded() {
    console.log("Modal Loaded!");
}

function check() {
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label,
        document.getElementById("result_object_acuracy").innerHTML = results[0],confidence.toFixed(3);

        
    }
}
