    
var AudioNumbersSpeaker=function(objPar){

    var audioID="audioID";
    $("body").append("<audio id='"+audioID+"'><source type='audio/mpeg'/></audio>")

    this.gvObj = document.getElementById(audioID); 
    this.gvObj.m_funct_start_read_numbers=function(text){
        this.m_audioDir=objPar.audioDir;
        this.m_text=""+text;
        this.m_indx=-1;
        this.m_funct_read_next();
    };
    this.gvObj.m_funct_read_next=function(){
        this.m_indx++;
        if(this.m_indx>=this.m_text.length){
            if(this.m_audio2){
                this.m_audio2.play();
            }
            return;
        }
            
        var num=this.m_text.charAt(this.m_indx);
        this.src=this.m_audioDir+num+".mp3";
        // this.currentTime=startTime[parseInt(num)];
        this.playbackRate=1.50;
        this.play();
    };
    
    this.gvObj.addEventListener('ended',function(){
        this.m_funct_read_next();
    });
    this.gvObj.addEventListener('canplaythrough',function(){
        var timelen=this.duration;
        this.m_indx;
        console.log(this.src, timelen, this.playbackRate);
     });  

     
};
AudioNumbersSpeaker.prototype.speak_digits_before=function(text, playAudio){
        this.gvObj.m_funct_start_read_numbers(text);
        this.gvObj.m_audio2=playAudio;
}
       