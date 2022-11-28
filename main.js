var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var y=document.getElementById("textarea");

function bt(){
    y.innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var c=event.results[0][0].transcript;
    y.innerHTML=c;
    console.log(c);
    speak();
}
function speak(){
    Webcam.attach( '#camera');
    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        synth=window.speechSynthesis
        speak_data="taking your selfie in 1 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },1000);
    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        synth=window.speechSynthesis
        speak_data="taking your selfie in 2 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },2000);
    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        synth=window.speechSynthesis
        speak_data="taking your selfie in 3 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },3000);
}

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="ig1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="ig2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="ig3" src="'+data_uri+'"/>';
        }
    });
}