var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;

    
    console.log(Content);
    if(Content=="Take My Selfie"){
        console.log("taking selfie------");
    }
    speak();
}
function speak(){
    var synth=window.speechSynthesis;

    speak_data="Taking Your Selfie In 5 Seconds";

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        img_id = "selfie1"
        take_snapshot();
        speak_data="Taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save()
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function take_snapshot()
{
    console.log(img_id)
    Webcam.snap(function(data_uri) {
        if(img_id =="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id =="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id =="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
        }
        
    });
}
function save(){
    link=document.getElementById("link");
    link.href=image;
    link.click();
}