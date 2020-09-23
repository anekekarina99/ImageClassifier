//variabel dibutuhlan
let classifier;
let video;
let resultsP;

function setup(){
    createCanvas(300,300);
    video = createCapture(VIDEO);
 //menginialisasi menggunakan mobile net dan video sblum disiapkan
    classifier = ml5.imageClassifier('MobileNet',video,modelReady);
    resultsP = createP('Menunggu model dan video ..');
}


//fungsi model Ready
function modelReady(){
    console.log('Model Siap!');
    classifyVideo();
}

// Membuat prediksi dengan vidoe
function classifyVideo(){
    classifier.classify(gotResult);
}

// mendaptakn hasil dari gotResult

function gotResult(err, results){
    //hasil berupa array dan keakuratan(confidence)
    resultsP.html('Hasil :' + ''+results[0].label + '</br> Confidence :' + nf(results[0].confidence, 0,2));
    classifyVideo();
}


//fungsi menentukan error dan hasil
/*function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        createDiv(`Nama Label:${results[0].label}`);
        createDiv(`Keakuratan: ${nf(results[0].confidence, 0, 2)}`);
    }
}*/