var gBookChapterVerse=new BookChapterVerse();


$(document).ready(function(){
 
});////////jquery

var _BOOKMARK_="(BookMark)";
function body_onload() {
	console.log( gStartDate.toString() +"  -----body_onload" );//
	iPhone5ScreenAdjust();
	
	
	
	//MyCookies.Init({selMainBible:"CUVs",sBKeyId:"_Gen1_1",fontsize:"40",BookMark:'',email:''});

	jQuery(window).bind('beforeunload', function(e) {
		var i=MyCookies.Save();
		alert("ss");//not work
		var message = confirm("Why are you leaving?");//not work
		e.returnValue = false;//false
		return ""+i+" of data saved. \n It's ready to exit.";
	});  	


	
	var fnt=MyCookies.Get("fontsize");
    $("#selHistory > option[value='FontSet']").text("*Font "+parseInt(fnt)+"px");
	
	var selMainBible=MyCookies.Get("selMainBible");  
    MasterBibleBookLoader.SetBibleVersion(selMainBible);
	//dynaLoadVersion(selMainBible);
    var bookID="bible_"+selMainBible;
    $("#selHistory > option[value='"+bookID+"']").text("Bible:"+selMainBible+"(loaded)");
	
	//load book marks.
	var bookmarks=MyCookies.Get("BookMark").split(/[\|]/);
	for(var i in bookmarks){
		var val=bookmarks[i];
		val = $.trim(val);
		AddIntoHistory(val,_BOOKMARK_);
	}    
    
    var sBKeyId=MyCookies.Get("sBKeyId");
    console.log("body_onload:"+sBKeyId);
    MasterBibleBookLoader.LoadBookChapVers(sBKeyId);
    
    var sbookid="_Gen";
    var bokname=BookJsONT[sbookid][1];
	
    if(LoadBookByFormat_BCV(sBKeyId, true)){
        sbookid=gBookChapterVerse.m_sBookId;
        bokname = BookJsONT[sbookid][1];
        $("#selBookId").attr("value",sbookid).text(bokname);
		ChapterVerseNumModel.Init(sbookid);

        console.log("LoadBookByFormat_BCV:"+sbookid);
		gStartDate = (new Date()) - gStartDate;
		console.log( gStartDate.toString() +"  ----- End body_onload : "+sbookid );//
		$("#timespan").append("<hr/>tims(ms):"+gStartDate.toString());
		
        return;
    }
	gStartDate = (new Date()) - gStartDate;
    
    console.log("load default:"+sbookid);
    //$("#vbibtxt").empty();

    $("#selBookId").attr("value",sbookid).text(bokname);
    $("#vbibtxt").append(GetBookFrCurBible( $("#selBookId").attr("value") )); 
	
	$("#vbibtxt").append("<hr/>");
	var tmspan = gStartDate.toString();
	alert("load time:"+tmspan);
	$("#timespan").append("<hr/>tims(ms):"+tmspan);
	$("#vbibtxt").append("time span:"+ tmspan);
	

	console.log( (new Date()).toString() +"  -----2 End body_onload : "+sbookid );//
    return;
}
function iPhone5ScreenAdjust() {
	//for iphone5 small screen adjustment.
	var winith=$(window).width();
	if( winith<$("#uictrl").width() ){
		$("#uictrl").width(winith);
		$("#BibleBookSelMenu").width(winith);
		$("#SmartNumberInputPad").width(winith);
	}
	
	var winheight=$(window).height();
	var h1=$("#uictrl").height();
	var h2=$("#BibleBookSelMenu").height();
	if( (h1+h2) > winheight ){
		var nh = winheight - h1;
		$("#BibleBookSelMenu").height(nh-20);
		
		//$("#SmartNumberInputPad").height(nh);
		//$(".num").height( nh/5 );
	}
	//////
}

function StartToGo( bForceReload){
    var sBookId = $("#selBookId").attr("value");
    var sSearch = $("#edit_area").val();
    var sBibleName = MyCookies.Get("selMainBible");//$("#selMainBible").val(); 

    if("ONT"==sBookId) sBookId="";
    
    if(sSearch.indexOf("~")>=0){
        sSearch="";
        $("#edit_area").val("");
    }
    
    //load bible whole
    if(0===sSearch.length){
        if(0===sBookId.length){
           if(confirm("Show Whole Bible?")===false) return;
        }
        $("#vbibtxt").html( GetBookFrCurBible( sBookId ) );
        $("#selHistory").val("");
        updateFontSize();
        minimizeMainMenuControl();
        return;
    }
    //load book by keyId format.
    //if( gBookChapterVerse.ParseAsFormat_BookidChapter_Ver( sSearch ) ){
    if( LoadBookByFormat_BCV(sSearch, bForceReload) ) {
        return ;
    }
    //load book by numbers for chapter and verses.
    if( LoadBookByFormat_CsV(sSearch,sBookId) ) {
        return;
    }

                          
    if( IsAlphabaticStrn(sSearch) && sBibleName==="CUVs"){
        $("#vbibtxt").html( SearchChineseBibleThrouPinyin( sSearch, sBookId ) ) ;
        //
        AddIntoHistory(sSearch);
        $("#selHistory").val("");
        updateFontSize();                                                          
        minimizeMainMenuControl();
        return;
    }
    
    //wild search in 
    sSearch = Traditional2Symplified_Strn(sSearch);
    $("#vbibtxt").html(GetSearch(sSearch, sBookId ) );
    AddIntoHistory(sSearch);

    $("#selHistory").val("");
    updateFontSize();
    //$("#uictrl").toggle();
    minimizeMainMenuControl();
  
}

function scrollIntoView2KeyId(skeyId){ 
    if(null===skeyId || null === document.getElementById(skeyId)){
      console.log(skeyId + " not exist yet -- unable to scrollIntoView.");
      return false;
    }
                                    
    document.getElementById(skeyId).scrollIntoView();
    return true;
}

function GetBibleVersionThruWinLoc() {
    strUrls = " " + window.location; //cast it as string.
    theleft  = strUrls.indexOf("=") + 1;
    //alert(theleft);
    theright = strUrls.lastIndexOf("&");
    //alert(theright);
    if (theright<0) theright = strUrls.length;
    str      = strUrls.substring(theleft, theright);
    window.m_MainLang = str;
    //alert(str);
    return(str);
}


var gsKeySerchVers='ff';
function LoadBookByFormat_BCV(sSearch, bForceReload){//BookId, ChapterNum, VerseNum.
    if( gBookChapterVerse.ParseAsFormat_BookidChapter_Ver( sSearch ) ){
            var sKeySerchVers = gBookChapterVerse.m_sKeyId;
            gsKeySerchVers=     sKeySerchVers;  
            //alert(gsKeySerchVers);
            AddIntoHistory(sKeySerchVers);
            if( !bForceReload ){
                if(true === scrollIntoView2KeyId(sKeySerchVers)){
                    return true;
                }
            }
            $("#vbibtxt").html( GetBookFrCurBible( gBookChapterVerse.m_sBookId ) ) ;
            updateFontSize();
           //AddIntoHistory(sKeySerchVers);
            $("#selHistory").val("");                                         
            minimizeMainMenuControl();
            scrollIntoView2KeyId(sKeySerchVers);//not work onload.
            //alert(gsKeySerchVers);
            setTimeout("scrollIntoView2KeyId('"+gsKeySerchVers+"')",100);
            return true;
    }
    return false;
}
function LoadBookByFormat_BCV__WhenSelBook(sSearch, bForceReload){//BookId, ChapterNum, VerseNum.
    if( gBookChapterVerse.ParseAsFormat_BookidChapter_Ver( sSearch ) ){
            var sKeySerchVers = gBookChapterVerse.m_sKeyId;
            gsKeySerchVers=     sKeySerchVers;  
            //alert(gsKeySerchVers);
            AddIntoHistory(sKeySerchVers);
            if( !bForceReload ){
                if(true === scrollIntoView2KeyId(sKeySerchVers)){
                    return true;
                }
            }
            $("#vbibtxt").html( GetBookFrCurBible( gBookChapterVerse.m_sBookId ) ) ;
            updateFontSize();
           //AddIntoHistory(sKeySerchVers);
            $("#selHistory").val("");                                         
            //minimizeMainMenuControl();
            scrollIntoView2KeyId(sKeySerchVers);//not work onload.
            //alert(gsKeySerchVers);
            setTimeout("scrollIntoView2KeyId('"+gsKeySerchVers+"')",100);
            return true;
    }
    return false;
}
function LoadBookByFormat_CsV(sSearch, sBookId){//ChapterNum space VersNum
    if( gBookChapterVerse.IsNumbersOfChaperVersus(sSearch) ){
                        if( false===gBookChapterVerse.isBookId(sBookId) ){
                            alert("Please select a specific book for chaper verses.");
                            return true;
                        }
                        var sKeySerchVers = gBookChapterVerse.NumbersOfChaperVersus2KeyId(sBookId);  
                        AddIntoHistory(sKeySerchVers);
                        if(true === scrollIntoView2KeyId(sKeySerchVers)){
                            return true;
                        }
                        //alert(sky);
                        $("#vbibtxt").html( GetBookFrCurBible( sBookId ) ) ;
                        updateFontSize();                         
                        $("#selHistory").val("");                                          
                        minimizeMainMenuControl();
                        scrollIntoView2KeyId(sKeySerchVers);
                        return true;
    }
    return false;
}
function dynaLoadVersion(BVersion){
	switch(BVersion){
		case "CUVs":
            CUVs.DynamicLoadVerse("all");
			return I;
		case "NIV":
			NIV.DynamicLoadVerse("all");
			return N;
		case "KJV":
			KJV.DynamicLoadVerse("all");
			return K;
        case "STU":
			STU.DynamicLoadVerse("all");
			return S;
        case "HGR":
			HGR.DynamicLoadVerse("all");
			return H;
		case "BBE":
			BBE.DynamicLoadVerse("all");
			return B;
		case "CUVpy":
			CUVpy.DynamicLoadVerse("all");
			return P;			
		case "CUVt":
		case "TBI":
			//CUVs.Load();
			//Z2G.Load(); 
			return null;
		default:
		break;
	}
    return I;
}
function findAbsolutePosition(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return ([curleft,curtop]);
//returns an array
}


function updateFontSize(){
    BookMarkKeys();
    var fontsize = MyCookies.Get("fontsize");
	fontsize=parseInt(fontsize)+"px";
    $(".versTxt").css("font-size",fontsize);
    $(".versKey").css("font-size",fontsize);
    $(".construed").css("font-size",fontsize);
}

function IsAlphabaticStrn(str){
    var b=str.match(/^[a-zA-Z\s]+$/);
    //alert(b);
    return b;
}

function IsNumeric(val) {
    if (isNaN(parseFloat(val))) {
        return (false);
    }
    return (true)
}

  
function minimizeMainMenuControl(){
    $("#uictrl").hide();//css({width:"110px",height:"100px"});
    $("#btnMin").text("[+]");
    //oMyCookie.Select_SaveOptions("selHistory");
}
function RemoveFromHistory(sTxt) {
    $( "#selHistory option" ).filter(function(){
        var val=$(this).attr("value");
        if(sTxt===val){
            return true;
        }
    }).remove();
    //if (  $("#selHistory option[value='"+sTxt+"']").length > 0 ) {//remove exisit ont.
    //    $( "#selHistory option" ).remove( ":contains('"+sTxt+"')" );//remove itm contain str.
    //}    
}
function AddIntoHistory(sTxt, BookMark) {
	if(sTxt.length==0) return;
	if(!BookMark) {
		BookMark="";
	}
	
	var sTxt_Mark =sTxt+" "+BookMark;
	
    //alert(sTxt.length);
	
	//keep old bookmard.
    var sOldMark="";
	$("#selHistory option[value='"+sTxt+"']").each(function(){
		sOldMark=$(this).text();
	});
	if( sOldMark.indexOf(_BOOKMARK_) >0 ){
		sTxt_Mark=sOldMark;
	}
	
	if("RemoveBookMark"===BookMark){
		sTxt_Mark=sTxt;
	}
	
	//
    if (  $("#selHistory option[value='"+sTxt+"']").length > 0 ) {//remove exisit ont.
        $( "#selHistory option" ).remove( ":contains('"+sTxt+"')" );//remove itm contain str.
    }
    
    //add most recent at front.
    var newOption = $("<option value='" + sTxt + "'>" + sTxt_Mark+"</option>");
    newOption.insertAfter("#selHistory option:first");
    newOption.insertAfter("#selHistory option:eq(2)");

    //oMyCookie.Select_SaveOptions("selHistory");
	console.log("BookMark:"+getBookMarksInHistory().toString());
	MyCookies.Set("BookMark",getBookMarksInHistory().toString().replace(/[,]/g,"|") );
}

function getBookMarksInHistory(iMax){
	if(!iMax) iMax=30;
	var vmarks=[];
	
	 $("#selHistory option:contains('(BookMark)')").each(function(){
		 var vmark=$(this).attr("value");
		 if(vmarks.length<iMax){//max last bookmarks
			vmarks.push(vmark);
		 }		 
	 });
	 return vmarks;
}
function BookMarkKeys(){
    //BookMarks
    var skeyidsArr=getBookMarksInHistory();
    for( var i=0; i<skeyidsArr.length; i++ ){
		var key=skeyidsArr[i];
        $("#"+key).addClass("BookMarked");
	}	
}
function getHistoryOfKeyIDs(iMax){
	if(!iMax) iMax=30;
	var vmarks=[];
	
	 $("#selHistory option").each(function(){
		 var vmark=$(this).attr("value");
		 if( vmark && vmark.length > 0 && vmark[0]==='_'){//max last bookmarks
            var txt=$(this).text();
			vmarks.push(vmark);
		 }		 
	 });
	 return vmarks;
}
function GetBookFrCurBible_HistoryMarkersTable( skeyid ){
	console.log("History Table for:"+skeyid);
	AddIntoHistory(skeyid);
	var stab="<table border='1'>";
	stab+="<caption>Book Markers History</caption>";
	
	var oBibleBookChapterVerse=new BibleBookChapterVerse();
	var skeyidsArr = getHistoryOfKeyIDs();
	//skeyidsArr.sort();
	var currBible=MasterBibleBookLoader.BibleObj;//GetCurBible();
	for( var i=0; i<skeyidsArr.length; i++ ){
		var key=skeyidsArr[i];
		var txt=currBible[key];
		console.log("History:"+key);

		var iIndicator = oBibleBookChapterVerse.FilterKey(key);
		stab += GetTR1(1, oBibleBookChapterVerse.isKeySaying,key, txt);		
	}	
	stab+="</table>";
	
	//$("#vbibtxt").find( "#HistoryTable" ).remove();
	$("#vbibtxt").html( stab );
    
    //BookMarkKeys();
    
	updateFontSize();
	scrollIntoView2KeyId( skeyid );
	minimizeMainMenuControl();
	return stab;
}












function GetTR1(i, isSayings, key, contxt) {
   gBookChapterVerse.ParseAsFormat_BookidChapter_Ver(key);
    
   var iCharpter = gBookChapterVerse.m_iChapter;//parseInt(chapter,10);
   var mod= iCharpter % 2;
   var tr_class="class='raw0'"
   if(1==mod) tr_class="class='raw1'"
   
   var conTxt_class="versTxt";
   if(isSayings>=0){
     conTxt_class+= " versHisSaying";
   }
   
   var strKeyLabel=gBookChapterVerse.getKeyLabel({hasBookAbr:i}); 

    var s0="<tr "+ tr_class + "> <td>" ;
    var s5= "</td></tr>";

    var akey = "<a class='versKey' id='" + key + "' onclick='vkey(this)'>" + strKeyLabel  + "</a> ";
    var atxt = "<a class='"+conTxt_class+"' id='" + gBookChapterVerse.m_sConTxtId + "'>" + contxt + "</a>";
	var acontrast = "<a class='"+conTxt_class+"' id='" + gBookChapterVerse.m_sContrastId + "'>"  + " </a>";
    var construed="<div id='" + gBookChapterVerse.m_sConstruedKeyId +"'  class='construed'/>";
    
    var s=s0+ construed + akey + atxt + acontrast + s5;
    return (s);        
}
//prepare for construed language.
function vkey(elm) {//   

    var sky = $(elm).attr("id");//BCV, _BbbCcc_Vvv
    var csid  = BookChapterVerseUti.construedId(sky);
    gBookChapterVerse.ParseAsFormat_BookidChapter_Ver(sky);
    //alert(sky);
    
    MyCookies.Set("sBKeyId",sky);
    console.log("set sBKeyId="+sky);
    AddIntoHistory(sky);
    
    
    
    var bConstrued= ""+$(elm).attr("bConstrued");//elm.style.backgroundColor;
    //alert(bConstrued);
    if("true"===bConstrued){
        $("#"+csid).slideToggle('3000');
        $(elm).attr("bConstrued","false").css("backgroundColor","#cfcfed"); //closed color
        return;
    }else if ("false"===bConstrued){
        $("#"+csid).slideToggle('3000');
		//$("#"+csid).find(".construeItem").each(function(){
		//	$(this).show();
		//});
		
        $(elm).attr("bConstrued","true").css("backgroundColor","#1799dd");//opened color
        return;
    }
	
	//VerseMyNotesRead( {_BCV:sky, bLoginNow:false} );
    
    $(elm).attr("bConstrued",true).css("backgroundColor","#1777ff"); //initial color 

    //var bCloned=$(elm).attr("bCloned");
    //if("true"===bCloned){
    //  $("#"+csid).show();
    //  return;
    //}
    //$(elm).attr("bCloned", true);
    
    
    var dupConstrued = $("#construedCtrl").clone( true );//deep clone
    //  $(dupConstrued).find("select").attr("verskey",sky).bind("change",function(){
    //      var sky = $(this).attr("verskey");
    //      var cod = $(this).val();        
    //      construe_txt(sky,cod);
    //  }); 
    //  $(dupConstrued).find("select option:first").html(gBookChapterVerse.getBookKeyLabel());
    
    $(dupConstrued).find(".construeItem").attr("verskey",sky).bind("click",construeItem_OnClick);  
	
	

	$(dupConstrued).find("*[value='MyNotes']").each(function(){
        //var size=getMyNotesSize(sky);
        //var sMyNotes="MyNotes("+size+")";
		//$(this).text(sMyNotes);
	});
	
	var tt=gBookChapterVerse.getBookKeyLabel();
	tt=tt.replace(" ","_");
    $(dupConstrued).find(".construe0").html(tt);
	
	//$(dupConstrued).find("#VerseMyNoteWriteArea").attr("_BCVid",sky);
    
    
    $(dupConstrued).children().attr("verskey",sky);//.construedLangSel
    $(dupConstrued).css({visibility:"visible"});//.show();
    $("#"+csid).empty().append(dupConstrued).hide().slideDown('3000');  
    //$( "#"+csid).find("select").focus();
    //$(dupConstrued).find("select").focus();
    //$( "#"+txtid).find("select").focus();
    //$(elm).parent().find("select").focus();
}
function getMyNotesSize(sky){
	load_MyNotes_SizeInfo();
	if( "undefined" === typeof MyNotes_SizeInfo){
		return dbgmsg("MyNotes_SizeInfo is not defined.");
	}
	else{
		size=MyNotes_SizeInfo[sky];
	}
	if(size<1000) {
		size = ""+size+"B";
	}else if(size <1000*1000 ){
		size=Math.floor(size/1000);
		size = "" + size + "K";
	}
	else if(size <1000*1000*1000 ){
		size=Math.floor(size/1000/1000);
		size = "" + size + "M";
	}else if(size <1000*1000*1000*1000 ){
		size=Math.floor(size/1000/1000/1000);
		size = "" + size + "G";
	}
	
	return size;
}
function load_MyNotes_SizeInfo(){
	if( "undefined" != typeof MyNotes_SizeInfo ){
		return;
	}	
	var email = MyCookies.Get("email");
	if( email.length===0 ){
		email="wdingsoft@gmail.com";
		alert("use default email="+email);
		//return 0;
	}
	
	var src="src='../usrdata/BoP/"+email+"/vnotes_SizeInfo.js'";
	var js="<script language='javascript' "+src+"></script>";
	
	$("head").append(js);
}

function pickZi( _this ){
    var word=$(_this).text();
    var v=$("#edit_area").val();
    $("#edit_area").val( v+word );
    //insertTextAtCursor(word);
}
function Strn2Pickabl( txt, typeBible ){    
    if( typeBible==="CUVs" || typeBible==="CUVt" ){
        delimiter = "";        
        var oNamesFinder = new NamesFinder();
        oNamesFinder.setNamesMark({txt:txt, person:true, place:true});
        
        var arrTxt = txt.split( delimiter );
        txt="";
        for(var i=0;i<arrTxt.length; i++){
            var corett=" class='singleword' onclick='pickZi(this)'>"+arrTxt[i]+delimiter;
            if(oNamesFinder.isInRange(i)){
                txt+="<u"+corett+"</u>";
            }
            else{
                txt+="<a"+corett+"</a>";
            }       
        }
        return txt;
    }else if(typeBible==="TBI" ){
        return txt;
    }
    if(!txt){
        return;
    }
    var delimiter=" ";
    
    var arrTxt=txt.split(delimiter);
    txt="";
    for(var i=0;i<arrTxt.length; i++){
        txt+="<a class='singleword' onclick='pickZi(this)'>"+arrTxt[i]+delimiter+"</a>";     
    }
    return txt;
}

function construeItem_OnClick() {//on td 0 clicked, change the translation. 
    var sky = $(this).attr("verskey");
    var vbible = $(this).attr("value");  

	var csid       = BookChapterVerseUti.construedId(sky);
	var contrastId = BookChapterVerseUti.contrastId(sky);
	var construteLableID=sky+"_lableID"; //????
	var constrastVersionPackID="constrastVersionPackID_"+vbible+sky;
	
	var editID=sky+"_edit";
	
	var labelattr="class='constrastLabel' _BCV='"+sky +"' conslabel='"+vbible+"' id='"+construteLableID+"' onclick='constrastLabel_OnClick(this);' ";
	labelattr+=" editID='"+editID+"'";

	var alabel="<a " +  labelattr + " >"+vbible+": </a>";
	
	
    //alert(sky)
    var construedstr = "";
	var atxt = "";
    var scolor=$(this).css("background-color");
	
    switch ( vbible ) {
    case "LoadBook":
		if(!confirm("Reload?!")) return;
        if( gBookChapterVerse.ParseAsFormat_BookidChapter_Ver( sky ) ){
            if(sky != gBookChapterVerse.m_sKeyId){
                return alert("vital err");
            };   
            $("#vbibtxt").html( GetBookFrCurBible( gBookChapterVerse.m_sBookId ) ) ;
            updateFontSize();
            AddIntoHistory(sky);
            $("#selHistory").val("");                                         
            //minimizeMainMenuControl();
            scrollIntoView2KeyId(sky);
            return ;
        }
        else alert("fatal error.");
        return;		
    case "PrevVerse":
		next_verse(csid,sky,-1);
		return;
    case "NextVerse":
		next_verse(csid,sky,1);
		return;		
		
    case "UnderlineNames":
        $("#"+csid).hide();//parentsUntil("#selConstrued").attr("id");//hide();
		$("#"+sky).attr("bConstrued","false").css("backgroundColor","#cfcfed");//close color
        console.log("csid="+csid);
        
        //make it selectable for input. tranparent ovelap
        var txtid = BookChapterVerseUti.contextId(sky);
        var txt=$("#"+txtid).text();    
        var bible=MyCookies.Get("selMainBible");
        $("#"+txtid).html(Strn2Pickabl(txt, bible));
		
		var sbookmark="RemoveBookMark";
		if(confirm("\n BookMark: "+sky+"\n") ){
			sbookmark=_BOOKMARK_;
            $("#"+sky).addClass("BookMarked");
		}		
        else{
            $("#"+sky).removeClass("BookMarked");
        }
		AddIntoHistory(sky,sbookmark);
		MyCookies.Save();
        return;	
		
    case "MyNotes"://
        var surl="./MyNotes.htm?fname="+sky;
		var src="src='"+surl+"'";
		atxt="<div class='mynote_edit'>";
		atxt+="<iframe "+src+" width='100%' height='100%'><p>Your browser does not support iframes.</p></iframe>";
		atxt+="</div>";
		window.open(surl,"_blank")
        return;



    case "NIV":
        construedstr = NIV.DynamicLoadVerse(sky);//N[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;		
    case "KJV":		
        construedstr = KJV.DynamicLoadVerse(sky);//K[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;
    case "STU":		
        construedstr = STU.DynamicLoadVerse(sky);//K[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;
    case "BBE":
        construedstr = BBE.DynamicLoadVerse(sky);//B[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;
    case "CUVs"://  translate chinese into chinese.
        construedstr = CUVs.DynamicLoadVerse(sky);//I[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;
    case "CUVt"://translate chinese into jiaguwen.
        var ss=CUVs.DynamicLoadVerse(sky);
        construedstr = z2g_convert2opposite(ss) ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";

        break;//
    case "CUVpy"://.
        construedstr = CUVpy.DynamicLoadVerse(sky);//P[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        //scolor="#555444";
        //em.style.backgroundColor="#ff11aa";
        break;//
    case "TBI"://translate chinese into jiaguwen.
        construedstr = z2g_translate2jiaguwen(I[sky])  ;
		atxt="<a>"+construedstr+"</a>";
        //scolor="#333333";//TBI EDB10C;
        //em.style.backgroundColor="#aaff11";
        break; 

    case "HGR"://Hebrew or Greek.
        construedstr = HGR.DynamicLoadVerse(sky);//K[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        break;
    case "HGS"://translate chinese into jiaguwen.
        //construedstr = HGR.DynamicLoadVerse(sky);//K[sky] ;
		//var txt = Strn2Pickabl(construedstr,vbible);
		//atxt="<a>"+txt+"</a>";
        var mat=sky.match(/([_][\w]{3})([\d]+)[_]([\d]+)/);
        var bkidx=BookID2IdxCode[ mat[1] ];
        var chap=mat[2];
        while (chap.length<3) chap="0"+chap;
        var file=bkidx[0] + mat[1] + "_" + chap + ".htm#"+mat[3];
        
        
        var url="../../../___expand/rel/hgsbible/hgb/"+file;
        window.open(url,"_blank")
        console.log(sky, construedstr, vbible)
        return;

	default:
		alert("error version type:"+vbible);
		return;
    }   
    

	
	var adiv="<div style='background-color:"+scolor+";display:none;' id='"+constrastVersionPackID+"' class='contrast'>" + alabel + atxt + "</div>";
	$("#"+contrastId).remove("#"+constrastVersionPackID);
	$("#"+contrastId).append($(adiv));
	
	
	//$("#"+csid).fadeOut('3000');

	$("#"+csid).slideToggle('3000');//hide menu.
	
	var _This=$(this);
	setTimeout(function(){
		//$(_This).fadeOut('3000');
		//$("#"+csid).slideToggle('3000');
		//$("#"+contrastId).fadeIn('3000');
		$("#"+constrastVersionPackID).slideDown('3000');//show pickupVersion
		//$("#"+contrastId).slideToggle('3000');
		//$("#"+contrastId).slideToggle('3000');
		//$(_This).animate({width:'hide'},3000);
		//$(_This).hide("slide", { direction: "right" }, 1200);//bad
		//$(_This).animate({width: '0px',opacity: '0',});
		//$(_This).width(100);
		
		//VerseMyNotesRead({ _BCV:sky, bLoginNow:true});
		}, 700);
	//$(this).fadeOut('5000');
	//VerseMyNotesRead2(contrastId);
	return;
}
function next_verse(csid, sky, iNext){
		var nextID = gBookChapterVerse.GetSiblineBCV(iNext);
		var obj=$("#"+nextID );
		if( obj.length>0 ) {
			$("#"+csid).slideToggle('3000');//hide menu.
			scrollIntoView2KeyId(nextID);				
		}else{
			var oBible=MasterBibleBookLoader.BibleObj;//GetCurBible();
			if( !oBible[nextID] ){
				alert("Not exist");
				return;
			}
			var txt=oBible[nextID];
			
			var tr=GetTR1(1,-1,nextID,txt);
			//$("#"+contrastId).empty();
			var trObj = $("#"+sky).parentsUntil("tr");
			//var trObj2=trObj.parent().clone(true);
			//trObj2.find("#"+sky).attr("id", nextID);
			if(iNext>0) {
				$(tr).insertAfter( trObj.parent() );
			}
			else if(iNext<0) {
				$(tr).insertBefore( trObj.parent() );
			}
			else{
				alert("can't be 0.");
			}
			
			$("#"+csid).slideToggle('3000');//hide menu.
		}
		updateFontSize();		
}

function constrastLabel_OnClick(me){

	var conslabel=$(me).attr("conslabel");

	var constrastVersionPackID=$(me).parent().attr("id");
	$(me).parent().slideUp("3000");//slideToggle();
	$(me).parent().parent().remove("#"+constrastVersionPackID);
}

function CatchInvalidLoginDlg(ret,bLoginNow){
    if( typeof ret != "string") return false;
    if( ret.indexOf("Invalid")>=0 || "parsererror"===ret ){
        if(bLoginNow && confirm("Sorry, it only works after you login.\n\n\nLogin now?!")){
            window.open("../login/?mode=CloseOnSuccessLogin","_blank");
        }
        return true;
    }
    return false;
}


function GetCurBible() {
    return MasterBibleBookLoader.BibleObj;
    var BibleVersion = MyCookies.Get("selMainBible"); // NIV
	return dynaLoadVersion(BibleVersion);
}

function GetBookFrCurBible(BookAbrv) { // _Gen
    MasterBibleBookLoader.LoadBookChapVers(BookAbrv+"1_1");
    var oBible=MasterBibleBookLoader.BibleObj;//GetCurBible(); 
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(BookAbrv);
    
    var s="";
    var sMaxKey="", sMaxTxt="" ;
    var sMinKey="", sMinTxt="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
    var sMinArr=[];
    var iShowBookId = oBibleBookChapterVerse.m_iShowBookAbr;//BookAbrv.length ? 0:1;//0:wholeBible
    var i=0;
    console.log("GetBookFrCurBible:"+BookAbrv);
    for (var key in oBible) {
        //if ( key.indexOf(BookAbrv) < 0 ) continue;
        var iIndicator = oBibleBookChapterVerse.FilterKey(key);
        if(0===iIndicator) continue;
        if(2===iIndicator) break;
        
        i++;
        var VersText=oBible[key];
        
        var ilen=VersText.length;
        if(ilen>sMaxTxt.length){
            sMaxTxt=VersText;
            sMaxKey = key;
        }
        if(0===ilen){
            sMinArr.append(key);
        }
        if(ilen<sMinTxt.length){
            sMinTxt=VersText;
            sMinKey = key;
        }
        
        s += GetTR1(iShowBookId,oBibleBookChapterVerse.isKeySaying, key,VersText);//sel key: _Gen1_1
    }
    
    //prepare caps.
    var sBookname = gBookChapterVerse.getBookFullName(BookAbrv);//"wholistic bible ";
    sBookname = "Version " + MyCookies.Get("selMainBible") + " : " + sBookname;
    var cap="<p>"+sBookname+"</p><p>total verses:"+i+"</p>";
    if( sMinArr.length > 0 ){
        cap += "Min vers:"+sMinArr;
    }else{
        cap += "Min vers:["+sMinKey+"]"+sMinTxt;    
    }
    cap+=".<br>Max vers:["+sMaxKey+"]"+sMaxTxt;
    
    var s0="<table border='1'><capital>"+sBookname+"</capital>";
    
    s+="</table><br>"+cap;
    //document.getElementById("vbibtxt").innerHTML = s;
    //ShowIntoView(skey);
    return (s0+s);
}
// B_UTI.TextTag();
// document.getElementById('youridhere').scrollIntoView(); 






function GetSearch(str, BookAbrv) {
    if ( str.length==0) return ("");
    var BIBVER=MasterBibleBookLoader.BibleObj;//GetCurBible(); 
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(BookAbrv);
    
    
    var s="";
    var i=0;
    var str2 = "<font color='red'>" + str + "</font>";
    var reg = new RegExp(str, "g")  //"/" + str + "/g";
    for ( key in BIBVER) {
        var iIndicator = oBibleBookChapterVerse.FilterKey(key);
        if(0===iIndicator) continue;
        if(2===iIndicator) break;
        
        var chinesebible = BIBVER[key];
        if (chinesebible.search(str)>=0) {
            chinesebible = chinesebible.replace(reg, str2);
            i+=1;
            s += GetTR1(1,oBibleBookChapterVerse.isKeySaying, key, chinesebible);//search wild
        }

    }
    var sbook=gBookChapterVerse.getBookFullName(BookAbrv);
    var scap="<p>" + MyCookies.Get("selMainBible")+" : " + sbook + "</p>";
    var captical="<capital>"+scap+"<p>search : "+str+"</p><p>total verses found: "+i+"</p></capital>";
    s = "<table border=1>"+captical+s+"</table>";
    
    return (s);
}

function GetSearch_old(str, BookAbrv) {
    if ( str.length==0) return ("");
    var BIBVER=MasterBibleBookLoader.BibleObj;//GetCurBible(); 
    
    var s="";
    var i=0;
    var str2 = "<font color='red'>" + str + "</font>";
    var reg = new RegExp(str, "g")  //"/" + str + "/g";
    for ( key in BIBVER) {
        if( key.indexOf(BookAbrv)>=0) {
            var chinesebible = BIBVER[key];
            if (chinesebible.search(str)>=0) {
                chinesebible = chinesebible.replace(reg, str2);
                i+=1;
                s += GetTR1(1,oBibleBookChapterVerse.isKeySaying, key, chinesebible);//search wild
            }
        }
    }
    var sbook=gBookChapterVerse.getBookFullName(BookAbrv);
    var scap="<p>" + MyCookies.Get("selMainBible")+" : " + sbook + "</p>";
    var captical="<capital>"+scap+"<p>search : "+str+"</p><p>found total : "+i+"</p></capital>";
    s = "<table border=1>"+captical+s+"</table>";
    
    return (s);
}






function indexOf_Arr(srcArr, needleArr, startPos){
    var iIndx = srcArr.indexOf(needleArr[0],startPos);
    if(iIndx<0) return -1;
    var i=iIndx+1, j=1;
    while(j< needleArr.length){
        if(i>=srcArr.length ) {
            return -1;
        }else {
            if(srcArr[i] != needleArr[j]) {//restart next search..
               iIndx = srcArr.indexOf(needleArr[0],1+iIndx);
               if(iIndx<0) return -1;
               i=iIndx+1, j=1;
               continue;
            }
        }               
        i+=1; j+=1;
    }
    return iIndx;
}
function SearchChineseBibleThrouPinyin(strPinyin, BookAbrv){
    if ( strPinyin.length==0) return ("");
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(BookAbrv); 

    var arrSearch = strPinyin.split(" ");
    strPinyin = arrSearch.join(" ");
    var searchLen = arrSearch.length;
    var pinyinMatches= new Object();
	dynaLoadVersion("CUVpy");
	dynaLoadVersion("Z2G");
    for ( key in P) {
        var iIndicator = oBibleBookChapterVerse.FilterKey(key);
        if(0===iIndicator) continue;
        if(2===iIndicator) break;
        //if( key.indexOf(BookAbrv)>=0) {
            var FoundWordsArr=[];
            var chinesebible = P[key];
            var pyArr = chinesebible.split(" ");
            var iPos=indexOf_Arr(pyArr,arrSearch,0);
            while(iPos>=0){
                var sWord = I[key].substr(iPos, searchLen);
                if( FoundWordsArr.indexOf(sWord) < 0 ){
                    FoundWordsArr.push(sWord);
                }
                iPos=indexOf_Arr(pyArr,arrSearch,1+iPos);
            }
            if (FoundWordsArr.length > 0) {
                pinyinMatches[key]=FoundWordsArr;               
            }
        //}
    }
    
    var s="";
    var i=0;    
    var sUniqueWordsArr=[];
    for ( key in pinyinMatches) {
        i++;
        var bFound=0;
        var chinesebible = I[key];
        var sWordArr=pinyinMatches[key];
        for( var j=0;j<sWordArr.length; j++){
            var str = sWordArr[j];
            if(sUniqueWordsArr.indexOf(str)<0){
                sUniqueWordsArr.push(str);
            }
            var str2 = "<font color='red'>" + str + "</font>";
            var reg = new RegExp(str, "g")  //"/" + str + "/g";
            chinesebible = chinesebible.replace(reg, str2);
        }

        var iIndicator = oBibleBookChapterVerse.FilterKey(key);
        s += GetTR1(1, oBibleBookChapterVerse.isKeySaying,key, chinesebible);//search by pinyin
    }
    
    
    var sbookname = gBookChapterVerse.getBookFullName(BookAbrv);
    var scap="<p>" + MyCookies.Get("selMainBible") +" : " +sbookname + "</p>";
    
    var uniqFundWordsList="";
    for(var j in sUniqueWordsArr){
        uniqFundWordsList+="<a class='versTxt' onclick='foundPy2Zh(this)'>"+sUniqueWordsArr[j]+"</a>,";
    }
    var captical="<capital>"+scap+"<p>search : "+strPinyin+"<br>"+uniqFundWordsList+"</p><p>total verses found: "+i+"</p></capital>";
    s = "<table border=1>"+captical+s+"</table>";
    
    return (s);
}
function foundPy2Zh(_this){    
    var sss = $(_this).text();
    $("#edit_area").val(sss);
}

function HelpDlg(){
      var ss = "Bible Pad Statistic Info\n";
	  ss+=" * NIV: 31100 verses (3John has 14).\n";
      ss+=" * KJV: 31102 verses (3John has 14).\n";
      ss+=" * BBE: 31102 verses (3John has 14).\n";
      ss+=" * CUV: 31101 verses (3John has 15; no Num 25:19, Eze 28:26)\n";
      
      ss+="\n";
      ss+="For more statistic, click OK,then select history.\n";
      ss+="\n";
      ss+="\n";
      ss+="2015-03-07b\n";
      
      
      $("#edit_area").val("");
      
      var sampleOfChapterVerse="2 (~!@#$%^&*_+-=<>,.:;) 1";
      if(confirm(ss)){      
      
        gMyFunctionsNames.add2History();
        //samples
        AddIntoHistory(sampleOfChapterVerse);
        AddIntoHistory("ye su");
        AddIntoHistory("???");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");

        
      }
      else{
        //remove added.        
        $( "#selHistory option" ).remove( ":contains('@')" );//remove itm contain str.
        
        RemoveFromHistory(sampleOfChapterVerse);
        RemoveFromHistory("??");
        RemoveFromHistory("ye su");
        
      }
};


function dbgmsg(txt){
	$("#dbginfo").prepend(txt+"<hr/>").slideDown('30000');//.slideUp('30000');
	setTimeout(function(){
		$("#dbginfo").slideUp('30000');
	},5000);
}