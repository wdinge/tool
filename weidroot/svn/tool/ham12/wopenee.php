﻿<!DOCTYPE html>
<HTML>
<HEAD>
    <TITLE>wopenee</TITLE>
    <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<META name="viewport" content="width=device-witdh, initial-scale=1, maximum-scale=1, user-scale=0"> 


    <script>    
    var gStartDate = new Date();
    console.log(  gStartDate.toString() +" ------ start load");//
    </script>   

    <link rel="stylesheet" type="text/css" href="./css/Default_pad.css">

    <script language="javascript" src="./jq/jquery.js"></script>
    
    <script language="javascript" src="./jq/MyCookies.js"></script>
    

    


     <script  language="javascript" src="./jsdk/bible/BookLoader.js"></script> 
     <script>
     
     
     NIV.Set('./jsdb/bible/niv/js/','');
     KJV.Set('./jsdb/bible/kjv/','');
     BBE.Set('./jsdb/bible/bbe/','');
     CUVpy.Set('./jsdb/bible/pinyin/CUV_chars/splitter/2015/','');
     CUVs.Set('./jsdb/bible/bbc/','');
     //CUVs.WriteJs_CUVs();
     
    </script>




  



    <script  language="javascript" src="./jsdb/bible/bbcSayings/SayingsIdArr.js" >
    </script>
    
    <script  language="javascript" src="./jsdk/bible/_inc_bible_NamesOfPersons.js">
    </script>
    
    <script  language="javascript" src="./jsdk/bible/_inc_bible_NamesOfPlaces.js">
    </script>

    
    
        
    <script language="javascript" src="./jsdb/cc/z2g/jianfan/Traditional2Simplified.js">
    </script>


    <script language="javascript" src="./jsdk/cc/z2g/_inc_z2g.js" _onload="Z2G.Set('./jsdb/', 'async')">
    </script>
    <script>inc_z2g_write('./jsdb/');
    //alert("6. last end inc_z2g_write.")
    </script>


    
    <script language="javascript" src="BookChapterVerseMax.js"  type="text/javascript"></script>
	<script language="javascript" src="BookChapterVerseUti.js"  type="text/javascript"></script>
    <script language="javascript" src="BiblePad-2015-meta.js"  type="text/javascript"></script>
    <script language="javascript" src="BiblePadUtils-2015.js"  type="text/javascript">
    </script>
    
    <script>    
    console.log(  (new Date()).toString() );//
    </script>
<style>
body {
    background-color: black;
    color: white;
    width:100%;
	font-size: 100%;
	
    padding:0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;	
}





input{

    height:92px;
}

select{

    height:100px;
}

span{

}

#uictrl {
   position:fixed;
   bottom: 5px;
   right: 0px;
   width: 400px;
   
   overflow: hidden;

 
    
   background-color:#b0e0e6;
   layer-background-color:#00ff00;
   border:0px;
   margin:0px 0px 0px 0px;
   padding:0px 0px 0px 0px;

  

   opacity : 1;
}
#selBookId, #selChapterNum, #selVerseNum{
 
   height:40px;
   margin:0px 1px 0px 0px;
   padding:15px 0px 0px 0px;


   color:#000000;
   word-wrap:no;
   text-overflow: clip;
   text-align: left;
   overflow:hidden;
   white-space: nowrap; 
   background-color:#cccccc;
   float:left;
   border:2px solid #666666;
   
 
   text-align: center;
   font-size:25px;
}
#selBookId{
   width:46%;
}
#selChapterNum{
   width:29%;
}
#selVerseNum{
    width:19%;
    position:relative;
}


#edit_area{
   width:89%;
   height:40px;
   
   padding: 0px 0px 0px 0px;
   margin:  0px 0px 0px 0px;
   position:relative;
   top:-10px;

   font-size:30px;

}
#btnSearch{
    position:relative;

    top:1px;
	left:0px;

    width:10%;
    height:40px;
   
   padding: 0px 0px 0px 0px;
   margin:  0px 0px 0px 0px;
}


#selHistory{
   width:96%;
   height:40px;
}
#btnMin{
   position:fixed;
   bottom: 0px;
   right: 0px;

   width:60px;
   height:60px;
    padding:0 0 0 0px;
    margin:0 0 0 0px;    
   overflow: hidden;

    
   background-color:#777777;
   layer-background-color:#00ff00;
   border:3px solid #111100;
   visibility: visible;
   
   
   z-index: 50;

   opacity : 1;
   
   margin-left:0cm;
   margin-right:0cm;
   font-size:20px;
}

div.mainmenulayer, div.mainmenulayer2{
   padding: 0px 0px 0px 0px;
   margin:  0px 0px 0px 0px;
   height:50px;
   width:100%;
}







div.construed{
   position:static;
   background-color:#bbbbbb;
   color:#ffffff;   

   padding: 0px 0px 0px 0px;
   margin:  0px 0px 0px 0px;
   width:100%;
}

#construedCtrl {
   position:static;
   top: 5px;

   width: 100%;
   
   overflow: hidden;

   border:1px solid #cccccc;
   font-size:30px;
   
   visibility: hidden;
   
   padding: 0px 0px 0px 0px;
   margin:  0px 0px 0px 0px;

}


#VerseMyNotesDiv{
   width: 99%;
   display: none;/*block*/
   padding: 0 0 0 0px;

}

.construeItem{

	padding: 0px 0px 0px 0px;
    margin:  0px 20px 0px 0px;
}
.versn, .constrastLabel{
    border: 1px solid #cccccc;
    border-radius: 10px;
 
    padding: 0px 0px 0px 0px;
	margin: 0px 0px 0px 0px;
}
.construe0zzzzzzzzzzzzzzzzzzzzz{
  background-color:#cccccc;//title
  text-align: center;
  border:1px solid #222222;
}

.construe0{// bookmark//
	-moz-box-shadow: 3px 4px 0px 0px #1564ad;
	-webkit-box-shadow: 3px 4px 0px 0px #1564ad;
	box-shadow: 3px 4px 0px 0px #1564ad;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5));
	background:-moz-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-webkit-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-o-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-ms-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);
	background-color:#79bbff;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:1px solid #337bc4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:30px;
	font-weight:bold;
	padding:0px 0px 0px 0px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
	margin:0px 0px 5px 0px;
}
.construe1{
  background-color:#FA6E75;//reload;
  color:#ffffff;
}
.construe2{
  background-color:#516385;//NIV;
  color:#eeeeee;
}
.construeK{
  background-color:#123456;//KJV;
  color:#eeeeee;
}
.construe3{
  background-color:#13A1A1;//BBE;
  color:#eeeeee;
}
.construe4{
  background-color:#555444;//CUVs;
  color:#eeeeee;
}
.construe5{
  background-color:#A8A53E;/*CUVt*/
  color:#eeeeee;
}
.construe6{
  background-color:#555444;//CUVpy;
  color:#eeeeee;
}
.construe7{
  background-color:#759106;//TBI EDB10C;
  color:#eeeeee;
}
.construe8{ 
 background-color:#00730D;//note;
}


a.versKey{
  background-color:#777777;
  
  color: #000000;
  border-radius: 5px;
}
a.BookMarked{
    border: 3px solid #3010ef;
}

.versTxt{
 

}
.versHisSaying{
  background-color:#510000;
}

.construeItem[value='PrevVerse'] {
background-color:#000051;
}
.construeItem[value='NextVerse'] {
background-color:#005100;
}

table{
    width:100%;
    table-layout:fixed ;
    margin-right:0.0cm;
    margin-left:0.0cm;
}


#HistoryTable tr{
	background-color:#001020;
}
 

tr.raw0zzz {
   background-color:#ffffbb;
}
tr.raw1zzz {
   background-color:#bbffff;
}
tr.raw0 {
   background-color:#003300;
}
tr.raw1 {
   background-color:#000000;
}




</style>    
    
    <script language="javascript">
    if (navigator.cookieEnabled){
       console.log("document.cookie:"+document.cookie);
    }else{
       alert("cookieEnabled OFF");
    }
$(document).ready(function(){
//body_onload();
    //$("#verse_note_editor_save").hide();
    //$("#uictrl").toggle();
    
    $("body").click(function(){
        console.log("body");
        var sstr = $("#edit_area").val();
        if(sstr.indexOf("~")===0){
            $("#edit_area").val("");
        }
    });
    
    gBookChapterVerse.Init();
    minimizeMainMenuControl();
    

        $("#selBookId").click(function(e){
            e.stopPropagation();
            $("#BibleBookSelMenu").slideToggle();
            console.log("toggle BibleBookSelMenu");
        });
             
        //$("[id^=selBookId]").click(function(e){
        $(":not(#selBookId)").click(function(e){
            e.stopPropagation();
            var clsname=$(e.target).attr("class");
            if(!!clsname && clsname.indexOf("bookSelMenuBtn") <0 ){
                console.log("selBookIdHide");
                $("#BibleBookSelMenu").hide();
             }
        });//.css("background-color","red");
              
        
        $("#selChapterNum").click(function(e){
            e.stopPropagation();
            var bkid = $("#selBookId").attr("value"); 
            console.log("selChapterNum "+bkid);
            ChapterVerseNumModel.ClickChapterBtn();
        });
		$(":not(#selChapterNum)").click(function(e){
            e.stopPropagation();
            var clsname=$(e.target).attr("class");
			var indx_num=-1, indx_booknameBtn=-1;
			if(!!clsname) {
			  indx_num = clsname.indexOf("num");
			  indx_booknameBtn = clsname.indexOf("booknameBtn");
			}
			var id=$(e.target).attr("id");
			
			if(id != "selVerseNum"){
				if(indx_num<0 && indx_booknameBtn<0){
					//dbgmsg("not selChapterNum");
					$("#SmartNumberInputPad").hide();
				}
			 }
        });//.css("background-color","red");
		
        
        $("#selVerseNum").click(function(e){
            e.stopPropagation();
            console.log("clck");
            ChapterVerseNumModel.ClickVerseBtn();
        });  


                 
        $("#selHistory").change(function(){
            var serchVal = $(this).val();
            $("#selHistory").val("");
			selHistoryRun(serchVal);
        });

        $("#btnSearch").click(function(){//Start GO...
            StartToGo(false);
        });

                
                

  
  $("#btnMin").click(function(){
        var stat=$(this).text();
        $("#uictrl").slideToggle();

        if(stat.indexOf("-")>0){
            //minimizeMainMenuControl();
            $(this).text("[+]");
			//$("#uictrl").fadeOut('5000');
        }
        else{
            //$("#uictrl").css({width:"990px", height:""});
            $(this).text("[-]");//.css({width:"110px",height:"100px"});
			//$("#uictrl").fadeIn('5000');
        }    
  });


});
function selHistoryRun(serchVal){
    switch(serchVal){
    case "HELP":
        HelpDlg();
        return;
    
    case "REFERENCES":
        window.open("./iesus.bible.cuv/index.htm");
        return;
    
    case "FontSet":
        SetFontSize();
        return;
    case "bible_NIV":
    case "bible_KJV":
    case "bible_CUVs":
    case "bible_BBE":
	case "bible_CUVpy":
        selectBibleVersion(serchVal);
        return;
    }//switch
    
    //serchVal is like @xxx. It will popup new window.
    if( gMyFunctionsNames.RunMyFunc(serchVal) ){
        return;
    }       
    
    if("_"===serchVal[0]){//history id.		
		GetBookFrCurBible_HistoryMarkersTable( serchVal );
		return;
    }
    
	$("#edit_area").val(serchVal);

    console.log("{selHistory change}"+serchVal);
}


function selectBibleVersion(selval){
    var bibleVerson= selval.substr(6);
	var txt= $("#selHistory > option[value='"+selval+"']").text();
	var ipos=txt.indexOf("loaded");
	if(ipos<0){
		if(!confirm(selval+ " needs long time to load. \n\nContinue?")) return;
	}
	
	var startDate = new Date();
    dynaLoadVersion(bibleVerson);
	var ms = (new Date()) - startDate;

    $("#selHistory > option[value='"+selval+"']").text(selval+"(loaded)");
	if(!confirm(selval+" is loaded in "+ms.toString()+"ms.\n\nSet it as default book?")){
		return;
	}
    MyCookies.Set("selMainBible",bibleVerson);

    StartToGo(true); //
}

function SetFontSize(){
    var fnt=MyCookies.Get("fontsize");
    fnt=prompt("*Font "+parseInt(fnt)+"px", "");
    if(!fnt) return;
    fnt=parseInt(fnt)
    if(fnt<7 || fnt>220){
        return alert("out of range(7,220)");
    }

	fnt+="px";
    $("#selHistory > option[value='FontSet']").text("*Font "+fnt);
	
    console.log(fnt);
    MyCookies.Set("fontsize",fnt);
	
    updateFontSize();

    var serchVal = $("#edit_area").val();
	scrollIntoView2KeyId(serchVal);

    minimizeMainMenuControl();
}

    </script>

</HEAD>
    <BODY xxxonload="body_onload();">

    <p id="timespan"></p>

    <div id="uictrl">
        <div class="mainmenulayer">
        
        <div id="selBookId" value="_Gen"  tabindex='1' class="selBookIdHide" title="bible book name" >Genesis</div>
        
        <div  id="selChapterNum"   tabindex='2' class="selBookIdHide" title="bible chapter number">
        Chapter
        </div>
        
        <div  id="selVerseNum"  tabindex='3' class="selBookIdHide" title="bible verses number">
        Verses
          </div>
        </div>

        
        <div class="mainmenulayer2 " >
        <img id="btnSearch"  class="selBookIdHide" src='img/Go.png'></img><input id="edit_area" value="" title="chapter number and verse number must be delimited by :-, or space etc."></input> 
        </div>
        <hr/>
        <div id="divPinyinInput" class="selBookIdHide" >
        <select id="selHistory" class="selBookIdHide" title="History for search strings">
            <option> </option>
            <option> </option>

            <option value="HELP">- Help -</option> 

            <option value="REFERENCES">- References -</option>
            
            <option value="bible_NIV">Bible: NIV </option> 
            <option value="bible_KJV">Bible: KJV </option> 
            <option value="bible_BBE">Bible: BBE </option>
            <option value="bible_CUVs">Bible: CUVs </option> 
            <option value="bible_CUVpy">Bible: CUVpy</option> 
            
            
            <option value="FontSet">* Font</option>
            
        </select> 
        </div>

       
    </div>

    <button align="right" id="btnMin" class="selBookIdHide">[-]</button>

    
    
    
<style>
.mynote_edit{
  background-color:#007700;
  height:500px;
}

</style>
    
    <table id="construedCtrl" border='1'>


		<tr><td>			
			<a class='construeItem construe2 versn' value="NIV">NIV</a>
            <a class='construeItem construeK versn' value="KJV">KJV</a>
            <a class='construeItem construe3 versn' value="BBE">BBE</a>          
            <a class='construeItem construe4 versn' value="CUVs">CUVs</a>             
            <a class='construeItem construe5 versn' value="CUVt" >CUVt</a>          
            <a class='construeItem construe6 versn' value="CUVpy" >CUVpy</a>              
            <a class='construeItem construe7 versn' value="TBI" >TBI</a>
		</td></tr><tr><td>	                              
            <a class='construeItem construe0' value="UnderlineNames" title='book chapter verse'>UnderlineNames</a>
			<a class='construeItem construe8 notes' value="MyNotes" >iNote</a>
            <a class='construeItem construe1 reload' value="LoadBook">reLoad</a>
			<a class='construeItem' value="PrevVerse">Prev</a>
			<a class='construeItem' value="NextVerse">Next</a>

		</td></tr>
			 
</table>			
        
    </div>

	
<script>
$(document).ready(function(){
  
});



</script>


    
    
    
    
    
    
    
    
    
    
        
    
    
    
<style> 
#BibleBookSelMenu{
 position:fixed;
 right:0px;
 bottom:160px;
 
 width:  420px;
 height:500px;


 background-color:#777778;
 //font-size:0px;
 padding:0 0 0 0px;
 margin:0 0 0 0px;
    
 font-size: 20px;

 overflow:noscroll;
opacity: 1;
}

.booksTableHolder{
 position:absolute;
 top:0px;
 float:left;
 width:  100%;
 
 height: 90%;
 background-color:#777778;
 //font-size:0px;
 overflow-y:scroll;
 overflow-x:noscroll;
 opacity: 1;
}


#bookSelMenuBtnsHolder{
	position:absolute;
	bottom:0px;
	right:0px;
	width:100%;
}

.booksListTable {
 width:100%;
 white-space: nowrap; 
}
td.booknameBtn{
 position:static;
 width: 40%;
 text-align: center;
 margin: 0 0 1px 0; 
 right:0px;

}
td.tidx {
   width:7%;
   height:30px;
}
td.tdat {
   width:10%;
   font-size:10px;
}

#TabOT{
    margin-left:0px;
}


.bookSelMenuBtn{
 width:30%;
 height:40px;
 background-color:#777778;
 float:left;
 color:#000000;

 margin:0px 2px 0px 0px;
 padding:0px 0px 0px 0px;
 //border: 2px solid #ff000;
 border: 1px solid #cccccc;
 
 

  text-align: center;
}
</style> 
<div id="BibleBookSelMenu" tabindex="1">
<div>
<div id='flavorHolder' class='booksTableHolder'>
</div>
<div id='ntHolder' class='booksTableHolder'>
</div>
<div id='otHolder' class='booksTableHolder'>
</div>
</div>
<span id='bookSelMenuBtnsHolder'>
<div id='TabOT' class='bookSelMenuBtn'> O.T.旧约 </div> <div id='TabNT' class='bookSelMenuBtn'> N.T.新约 </div> <div id='TabFlavor' class='bookSelMenuBtn'> Classified</div></span>
</div>
<script language="javascript">

$(document).ready(function(){
  genBooksTable(BookJsFlavor,'#flavorHolder'); 
  genBooksTable(BookJsNT,'#ntHolder'); 
  genBooksTable(BookJsOT,'#otHolder'); 
  

    //  $.each(['show', 'hide', 'blur'], function (i, ev) {
    //    var el = $.fn[ev];
    //    $.fn[ev] = function () {
    //      this.trigger(ev);
    //      return el.apply(this, arguments);
    //    };
    //  });
      
  // $("#BibleBookSelMenu").on('blur', function(){
  //           var SelfBtnToggle=$("#BibleBookSelMenu").attr("SelfBtnToggle");
  //           var is_hidden  =$("#BibleBookSelMenu").is(":hidden");
  //           console.log("~~~ BibleBookSelMenu: blur: SelfBtnToggle="+SelfBtnToggle+",is_hidden="+is_hidden);
  //           $(this).hide();
  // }).on('show',function(){
  //           var SelfBtnToggle=$("#BibleBookSelMenu").attr("SelfBtnToggle");
  //           var is_hidden  =$("#BibleBookSelMenu").is(":hidden");
  //           console.log("~~~ BibleBookSelMenu: show: SelfBtnToggle="+SelfBtnToggle+",is_hidden="+is_hidden);
  // });
  $("#BibleBookSelMenu").hide();
  


  
   $('.booksTableHolder, #BibleBookSelMenu, #vbibtxt').on( 'scroll',  function(e){
	e.stopPropagation();
    console.log('Event Fired!!!' );
	return false;
  });
  
  $("#TabOT").css('background-color','#cccccd');
  
  //$("#BibleBookSelMenu").height( $(window).height()-339);
  //$(".booksTableHolder").each(function(){
  //  $(this).height( $("#BibleBookSelMenu").height()-$("#bookSelMenuBtnsHolder").height());
  //});
  
  
  
  $(".bookSelMenuBtn").click(function(){
    $(".bookSelMenuBtn").css('background-color','');
    $(this).css('background-color','#cccccd');
    btnId=$(this).attr("id");
    //alert(btnId);
    
    $(".booksTableHolder").hide();
    var btn2tab={"TabOT":"otHolder","TabNT":"ntHolder","TabFlavor":"flavorHolder",};
    var tabId=btn2tab[btnId];
    //alert(tabId);
    $("#"+tabId).toggle();
  });
  
  
 
  

  

});
 

function genBooksTable(jsn,eleID){
     
     //$(eleID).empty();
     //for(var i=1;i<=39;i++){
     var i=1, isumchp=0;
     var stab="<table class='booksListTable'  border='1'>";
	 stab+="<tr><td class='tidx'></td><td colspan='2' align='center'>Books Names </td><td class='tidx'></td></tr>";
     $.each(jsn,function(k,v){
        var clr=v[0];
        var eng=v[1];
        var chz=v[2];
        var tdx="<td class='tidx'> "+i+" </td>";
        var btd="<td class='booknameBtn' onclick='ClickBook(this)' value='"+k+"'>";
        var btnEn =btd+eng+"</td>";
        var btnCh =btd+chz+"</td>";
        var totchp="<td class='tdat'>" +TotChapterOfBook[k]+ " </td>";
        
        stab+="<tr bgcolor='"+clr+"'>"+tdx+btnEn+btnCh+totchp+"</tr>";
        i+=1;
        isumchp+=parseInt(TotChapterOfBook[k]);
     });
     stab+="<tr><td class='tidx' colspan='3'></td><td class='tdat'>"+ isumchp +" </td></tr>";
     stab+="</table>";
     $(eleID).append(stab);
     //$("#BibleBookSelMenu").show().focus();
};   

function ClickBook(me){
    //console.log("");
    $("#BibleBookSelMenu").hide();

    var bkid=$(me).attr("value");
    
    ////fill in number of chapters.
    ChapterVerseNumModel.Init(bkid);
    ChapterVerseNumModel.ClickChapterBtn();
    //$("#selChapterNum").text("Chapter");
    //var NumChaper=TotChapterOfBook[bkid];

    $(".booksListTable td").css("border","");
    $(me).css("border","2px solid #ffff00");

    var bkt=$(me).text();
    $("#selBookId").attr("value",bkid).text(bkt);
    //setCookie("selBookId",bkid,90);
    var sBKeyId=bkid+"1_1";
    if(LoadBookByFormat_BCV__WhenSelBook(sBKeyId, true)){
    }
    return;
};   
</script>




























































<style> 
#SmartNumberInputPad{
 position:fixed;
 bottom:160px;
 right:0px;

 width: 210px;

 background-color:#E7907D; /* #B774D6 (voilet)    E7907D(chocalate) */
 //font-size:0px;
}

.num {
    width:100%;
    height:40px;
    color:black;
     background-color:#E7907D; /* #B774D6 (voilet)    E7907D(chocalate) */
    text-align: center;
    
    font-size: 20px;
}

.num[disabled='disabled'] {
    color:#ffffff;
    background-color:#eeeeee; 
}
#SmartNumberInputMode{
font-size: 20px;
}
</style> 
<div id="SmartNumberInputPad"  xxxxxxxxxxxtabindex="1">
<table id='Number3x3' border='1'><caption><div id='SmartNumberInputMode'></div></caption>
<tr><td><button class='num' id='num1'>1</button></td><td><button class='num' id='num2'>2</button></td><td><button class='num' id='num3'>3</button></td></tr>
<tr><td><button class='num' id='num4'>4</button></td><td><button class='num' id='num5'>5</button></td><td><button class='num' id='num6'>6</button></td></tr>
<tr><td><button class='num' id='num7'>7</button></td><td><button class='num' id='num8'>8</button></td><td><button class='num' id='num9'>9</button></td></tr>
<tr>
<td><button class='num'>Clear</button></td>
<td><button id='num0'  class='num' disabled='disabled'>0</button></td>
<td><button class='num'>last</button></td>
</tr>
</table>
</div>
<script language="javascript">

$(document).ready(function(){
  $("#SmartNumberInputPad").blur(function(){
    console.log("SmartNumberInputPad blur hide");
    $(this).hide();
  });

  $(".num").bind('click',function(){
    var tx=$(this).text();
    console.log("===========>"+tx);
    ChapterVerseNumModel.ClickNum(tx);

  });
  $("#SmartNumberInputPad").hide();
});

var ChapterVerseNumModel={
    bookid:'',
    
    chapterNum:'',
    chapterLastClickNum:'',
    chapterMax:'',
    
    verseNum:'',
    verseMax:'',
    
    mode:"",
    Init:function(bookid){
		this.bookid='';
		if( bookid in BookJsFlavor ){
			$("#selChapterNum").text('-');
			$("#selVerseNum").text('-');
			return;
		}
		else{
			$("#selChapterNum").text('Chapter');
			$("#selVerseNum").text('Verse');
		}        
		
		this.bookid=bookid;//$("#selBookId").attr("value");   
		
        this.mode='chapter';
		
        this.chapterMax=TotChapterOfBook[this.bookid];
        this.chapterNum='';
        this.chapterLastClickNum='';
		
        this.verseNum='';
		this.verseMax='';
		
		

    },
    ClickChapterBtn:function(){
		if(''===this.bookid){
			return
		};
		this.chapterNum='';
		
        $(".num").css("background-color","#E7907D").removeAttr("disabled");
        $("#num0").attr("disabled","disabled");
        this.initNumButtonsState(this.chapterMax);
		
		if(this.mode==='chapter'){
			$("#SmartNumberInputPad").slideToggle();
		}
		else{
			this.mode='chapter';
			$("#SmartNumberInputPad").show();
		}
		
		$("#SmartNumberInputMode").text(" Max "+this.mode+":"+this.chapterMax);
    },
    ClickVerseBtn:function(){
		if(''===this.bookid){
			return
		};
		
		this.verseNum='';
		if(''===this.verseMax){
			alert('The Chapter number is not set yet');
			return;
		}

        $(".num").css("background-color","#B774D6").removeAttr("disabled");
        $("#num0").attr("disabled","disabled");        
        //verse of sChapNum and bookid
        this.initNumButtonsState(this.verseMax); 
		if( this.mode==='chapter'){
			this.mode='verse';
			$("#SmartNumberInputPad").show();
		}
		else{
			$("#SmartNumberInputPad").slideToggle();
		}
		$("#SmartNumberInputMode").text(" Max "+this.mode+":"+this.verseMax);
    },
    SetVerse:function(){
        var nNum = parseInt(this.chapterLastClickNum) - 1;//0-based.
        this.verseMax=BookChapterVerseMax[this.bookid][nNum];//'5';//////////////////todo // TotChapterOfBook[bookid];//last    
    },
    ClickNum:function(num){
        if(this.mode==='chapter'){
            this.gotoChapter(num);
			this.SetVerse();
        }
        else if(this.mode==='verse'){
            this.gotoVerse(num);
        }
        else{
            alert("not yet setting num");
        }
    },
    resetNumButtonsState:function(iMaxNum, iNum){
			iNum=parseInt(iNum);
            if( iNum*10 >  iMaxNum){                
				return iNum;
            }
            else{
                var iDlta= iMaxNum - iNum*10 ;
                if( iDlta < 10 ){
                    for(var i=iDlta+1; i<=9; i++) {
                        var id="#num"+i;
                        $(id).attr("disabled",'disabled');
                    }                   
                }
            }   
            if( iNum > iMaxNum ){
                alert("impossible");
            }
			return 0;
    },
    initNumButtonsState:function(iMaxNum){
		iMaxNum=parseInt(iMaxNum);
        if( iMaxNum < 10 ){             
            for(var i=1+iMaxNum; i<=9; i++) {
                var id="#num"+i;
                $(id).attr("disabled",'disabled');
            }                   
        }   
        else{
            for(var i=1; i<=9; i++) {
                var id="#num"+i;
                $(id).removeAttr("disabled");
            }   
        }
        $("#num0").attr("disabled","disabled");
    },
    	
    getChapterNum:function(sChapNum){
        
        var iMaxNum=this.chapterMax;//TotChapterOfBook[bookid];
        
        if("Clear"===sChapNum){
            this.chapterNum="";
            sChapNum="1";
            
            this.initNumButtonsState(iMaxNum);
            $("#num0").attr("disabled","disabled");//for first
			//$("#SmartNumberInputPad").slideUp("3000");//hide();
        }
        else if("last"===sChapNum){
            this.chapterNum="";
            sChapNum=''+iMaxNum;
            $("#num0").attr("disabled","disabled");
            $("#SmartNumberInputPad").slideUp("3000");//hide();
        }
        else{
            this.chapterNum +=sChapNum;
            sChapNum=this.chapterNum;
            $("#num0").removeAttr("disabled");
            
            var iNum= parseInt(sChapNum);
            var ret = this.resetNumButtonsState(iMaxNum,sChapNum); 
			if( ''+ret == sChapNum){//no more choice.
				$("#SmartNumberInputPad").hide();
				this.chapterLastClickNum=''+sChapNum;
				this.SetVerse();
				this.ClickVerseBtn();//auto popup verse.
			}

        }
        
        if(''===this.chapterNum){
        }
        
        this.chapterLastClickNum=sChapNum;
		
        return sChapNum;
    },

    getVerseNum:function( versNum ){
    
        var iMaxNum=this.verseMax;

        if("Clear"===versNum){
            this.verseNum="";
            versNum="1";
            this.initNumButtonsState(iMaxNum);
            $("#num0").attr("disabled","disabled");
			//$("#SmartNumberInputPad").slideUp("3000");//hide();
        }
        else if("last"===versNum){
            this.verseNum="";
            versNum=''+iMaxNum ;
            $("#num0").attr("disabled","disabled");
			$("#SmartNumberInputPad").slideUp("3000");//hide();
        }
        else{
            this.verseNum +=versNum;
            versNum=this.verseNum;
            $("#num0").removeAttr("disabled");
            

            var ret=this.resetNumButtonsState(iMaxNum,versNum);
			if( ''+ret == versNum){//no more choice.
				$("#SmartNumberInputPad").slideUp("3000");//hide();
			}
        }
        return versNum;
    },
    gotoChapter:function (sChapNum){
        var bookid=this.bookid;

        sChapNum=this.getChapterNum(sChapNum);
        
        var sBCVid=bookid+sChapNum+"_1";
        console.log(sBCVid);
		$("#selChapterNum").text(''+sChapNum);
		$("#selVerseNum").text('Verse');
        $("#edit_area").val(sChapNum);
        
        //MyCookies.set("sBKeyId",sBCVid,77);
        
        LoadBookByFormat_CsV(sChapNum,bookid);
    },
    gotoVerse:function (versNum){
        var bookid=this.bookid;

        var sChapNum=this.chapterLastClickNum;
        
        versNum=this.getVerseNum( versNum );
        
        
        var sBCVid=bookid+sChapNum+"_"+versNum;
        console.log(sBCVid);
		
		$("#selVerseNum").text(''+versNum);
        $("#edit_area").val(sChapNum + ":" + versNum);
        
        MyCookies.Set("sBKeyId",sBCVid);
        
        //LoadBookByFormat_CsV(sBCVid,bookid);
        StartToGo(false);
    },
}
</script>


















    

    
    
    
    
<style>
#dbginfo{
 position:fixed;
 
 
 background-color:#ffff00;
 color:black;
 top:0px;
 right:0px;
 width:50%;
 height: 200px;
  overflow-y:scroll;
 overflow-x:noscroll;
 
 
}
</style>    
    
    
    
    
    

    <div id="vbibtxt">
    <?php
    print_r($_REQUEST);
    //echo $_REQUEST['FormData'];
    ?>
    </div>
    <br><br>
    <hr/><p>Bible Pad</p> <p>copyright&copy;2015</p><hr/>
    <a id="dbginfo"></a>
    
    <form id="FormTestID" target="_blank" action="wopenee.php" method="POST">
    <textarea id="FormData"  name="FormData" value='test'> </textarea>
    <button>submit</button>
    </form>

    </BODY>
<script language="javascript">
$(document).ready(function(){
   //body_onload();
   $("#dbginfo").hide();
});
</script>

</HTML>
