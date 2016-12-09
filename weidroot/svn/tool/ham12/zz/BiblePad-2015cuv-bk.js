var AjxUrl={
MyNotesSave        :"../svc/BoP/MyVerseNotes/MyVerseNotes.Write.svc.php",   
MyNotesRead        :"../svc/BoP/MyVerseNotes/MyVerseNotes.Read.svc.php",
HistorySave        :"../svc/BoP/HistoryKeyFreq_save.svc.php",
HistoryRead        :"../svc/BoP/HistoryKeyFreq_load.svc.php",
HistoryClear       :"../svc/BoP/HistoryKeyFreq_clear.svc.php",
BookChapterVerse   :"../svc/BoP/BCVLoader/BVCLoader.php",

LoginInfo          :"../svc/login/loginInfo.svc.php",

};



var TotChapterOfBook={
_Gen:50  ,
_Exo:40  ,
_Lev:27  ,
_Num:36  ,
_Deu:34  ,
_Jos:24  ,
_Jug:21  ,
_Rut:4   ,
_1Sa:31  ,
_2Sa:24  ,
_1Ki:22  ,
_2Ki:25  ,
_1Ch:29  ,
_2Ch:36  ,
_Ezr:10  ,
_Neh:13  ,
_Est:10  ,
_Job:42  ,
_Psm:150 ,
_Pro:31  ,
_Ecc:12  ,
_Son:8   ,
_Isa:66  ,
_Jer:52  ,
_Lam:5   ,
_Eze:48  ,
_Dan:12  ,
_Hos:14  ,
_Joe:3   ,
_Amo:9   ,
_Oba:1   ,
_Jon:4   ,
_Mic:7   ,
_Nah:3   ,
_Hab:3   ,
_Zep:3   ,
_Hag:2   ,
_Zec:14  ,
_Mal:4   ,

_Mat:28  ,    
_Mak:16  ,    
_Luk:24  ,    
_Jhn:21  ,    
_Act:28  ,    
_Rom:16  ,    
_1Co:16  ,    
_2Co:13  ,    
_Gal:6   ,    
_Eph:6   ,    
_Phl:4   ,    
_Col:4   ,    
_1Ts:5   ,    
_2Ts:3   ,    
_1Ti:6   ,    
_2Ti:4   ,    
_Tit:3   ,    
_Phm:1   ,    
_Heb:13  ,    
_Jas:5   ,    
_1Pe:5   ,    
_2Pe:3   ,    
_1Jn:5   ,    
_2Jn:1   ,    
_3Jn:1   ,    
_Jud:1   ,    
_Rev:22  , 
};
var BookJsFlavor={
ONT:       ['#051020','wholistic Bible','圣经全书'],
OT:        ['#051020','O.T.',           '旧约全书'],
Moses:     ['#051020','Moses',          '摩西五经'],
NT:        ['#051020','N.T.',           '新约全书'],
Gospels:   ['#051020','Gospels',        '四福音书'],
HisSayings:['#051020','HisSayings',     '耶稣话语'],
};

var BookJsOT={
_Gen:['#7F7700','Genesis',             '创世纪'],
_Exo:['#7F7700','Exodus',              '出埃及记'],
_Lev:['#7F7700','Leviticus',           '利未记'],
_Num:['#7F7700','Numbers',             '民数记'],
_Deu:['#7F7700','Deuteronomy',         '申命记'],
_Jos:['#2F4F4F','Joshua',              '约书亚记'],
_Jug:['#2F4F4F','Judges',              '士师记'],
_Rut:['#2F4F4F','Ruth',                '路得记'],
_1Sa:['#2F4F4F','1_Samuel',            '撒母耳记上'],
_2Sa:['#2F4F4F','2_Samuel',            '撒母耳记下'],
_1Ki:['#2F4F4F','1_Kings',             '列王记上'],
_2Ki:['#2F4F4F','2_Kings',             '列王记下'],
_1Ch:['#2F4F4F','1_Chronicles',        '历代志上'],
_2Ch:['#2F4F4F','2_Chronicles',        '历代志下'],
_Ezr:['#2F4F4F','Ezra',                '以斯拉记'],
_Neh:['#2F4F4F','Nehemiah',            '尼希米记'],
_Est:['#2F4F4F','Esther',              '以斯帖记'],
_Job:['#102131','Job',                 '约伯记'],
_Psm:['#102131','Psalm',               '诗篇'],
_Pro:['#102131','Proverbs',            '箴言'],
_Ecc:['#102131','Ecclesiastes',        '传道书'],
_Son:['#102131','Song of Solomon',     '雅歌'],
_Isa:['#654321','Isaiah',              '以赛亚书'],
_Jer:['#654321','Jeremiah',            '耶利米书'],
_Lam:['#654321','Lamentations',        '耶利米哀歌'],
_Eze:['#654321','Ezekiel',             '以西结书'],
_Dan:['#654321','Daniel',              '但以理书'],
_Hos:['#88654E','Hosea',               '何西阿书'],
_Joe:['#88654E','Joel',                '约珥书'],
_Amo:['#88654E','Amos',                '阿摩司书'],
_Oba:['#88654E','Obadiah',             '俄巴底亚书'],
_Jon:['#88654E','Jonah',               '约拿书'],
_Mic:['#88654E','Micah',               '弥迦书'],
_Nah:['#88654E','Nahum',               '那鸿书'],
_Hab:['#88654E','Habakkuk',            '哈巴谷书'],
_Zep:['#88654E','Zephaniah',           '西番雅书'],
_Hag:['#88654E','Haggai',              '哈该书'],
_Zec:['#88654E','Zechariah',           '撒迦利亚'],
_Mal:['#88654E','Malachi',             '玛拉基书'],
};

var BookJsNT={
_Mat:['#510000','Matthew',            '马太福音'],
_Mak:['#510000','Mark',               '马可福音'],
_Luk:['#510000','Luke',               '路加福音'],
_Jhn:['#510000','John',               '约翰福音'],
_Act:['#523030','Acts',               '使徒行传'],
_Rom:['#002E63','Romans',             '罗马书'],
_1Co:['#002E63','1_Corinthians',      '哥林多前书'],
_2Co:['#002E63','2_Corinthians',      '哥林多后书'],
_Gal:['#002E63','Galatians',          '加拉太书'],
_Eph:['#002E63','Ephesians',          '以弗所书'],
_Phl:['#002E63','Philippians',        '腓立比书'],
_Col:['#002E63','Colossians',         '歌罗西书'],
_1Ts:['#002E63','1_Thessalonians',    '帖撒罗尼迦前书'],
_2Ts:['#002E63','2_Thessalonians',    '帖撒罗尼迦后书'],
_1Ti:['#003399','1_Timothy',          '提摩太前书'],
_2Ti:['#003399','2_Timothy',          '提摩太后书'],
_Tit:['#003399','Titus',              '提多书'],
_Phm:['#003399','Philemon',           '腓利门书'],
_Heb:['#003399','Hebrews',            '希伯来书'],
_Jas:['#003399','James',              '雅各书'],
_1Pe:['#003399','1_Peter',            '彼得前书'],
_2Pe:['#003399','2_Peter',            '彼得后书'],
_1Jn:['#003399','1_John',             '约翰一书'],
_2Jn:['#003399','2_John',             '约翰二书'],
_3Jn:['#003399','3_John',             '约翰三书'],
_Jud:['#003399','Jude',               '犹大书'],
_Rev:['#8B0000','Revelation',         '启示录'],
};
var BookJsONT = {};
//BookJsONT=$.extend(BookJsONT, BookJsNT);
$.each(BookJsOT,function(key,arr){
    BookJsONT[key]=arr;
});
$.each(BookJsNT,function(key,arr){
    BookJsONT[key]=arr;
});


var NOT_LOG_IN=" (require login) ";
var INVALID_USER="﻿﻿Invalid/unlogined";

var BookChapterVerseUti={
	construedId:function(key){
		//key: _Abc12_13
		return "_"+key;
	},
	contextId:function(key){
		//key: _Abc12_13
		return key+"_";
	},
	contrastId:function(key){
		//key: _Abc12_13
		return key+"_c";
	},
};

//Bibles books chapters verses
var BookChapterVerse=function(){
    this.m_BookAbrNames=new Object();
    
    this.m_sKeyId="";//format: _Abr12_13
    this.m_sBookAbr=""; //Abr
    this.m_sBookID=""; //_Abr
    this.m_iChapter=1;
    this.m_iVerse=1;
};
BookChapterVerse.prototype.Init=function(){
    //var oBookKeyNames=new Object();
    //$("#selbook optgroup option").each(function(){
    //    var skey=$(this).val();
    //    var sNam=$(this).text();
    //    sNam=$.trim(sNam);
    //    oBookKeyNames[skey]=sNam;
    //});
    //
    //var s="";
    //var i=0;
    //for(var key in oBookKeyNames){
    //    s+="\r\n"+i+":"+key+"="+oBookKeyNames[key]+",";
    //    i++;
    //}
    var oBookKeyNames=new Object();
    $.each(BookJsONT,function(key,arr){
        var skey=key;
        var sNam=arr[1];
        sNam=$.trim(sNam);
        oBookKeyNames[skey]=sNam;
    });
    
    
    this.m_BookAbrNames=oBookKeyNames;
    //alert(s);
    return oBookKeyNames;
};
BookChapterVerse.prototype.getBookFullName=function(sBookId){
    if( sBookId in this.m_BookAbrNames ){
        return this.m_BookAbrNames[sBookId];
    }
    if(key.length==0) return "wholistic bible"; 
    return sBookId;
    alert("wwwee");
};


BookChapterVerse.prototype.GetFullBookName=function () {
    //var txt=$("#selbook optgroup option[value='"+ this.m_sBookId + "']").text();
    var arr=BookJsONT[ this.m_sBookId ];
    var txt=arr[2]+arr[1];
    return txt;
}
BookChapterVerse.prototype.ParseAsFormat_BookidChapter_Ver=function (key) {
    //key format: _1bc12_13
    var bmat = key.match(/[\_][a-zA-Z0-9]{3}[0-9]+[\_][0-9]+/g);
    if(null===bmat) return false;
    
    this.m_sKeyId = key;
    this.m_sConstruedKeyId = BookChapterVerseUti.construedId(key);//"_" + key;
    this.m_sConTxtId       = BookChapterVerseUti.contextId(key);//key+"_";
	this.m_sContrastId     = BookChapterVerseUti.contrastId(key);//key+"_c";
    
    this.m_sBookAbr = key.substr(1,3);
    this.m_sBookId  = key.substr(0,4);
    
    
    var sChpVer = key.substr(4,99);
    var arr = sChpVer.split(/[_]/);
    this.m_iChapter= parseInt(arr[0], 10);
    this.m_iVerse  = parseInt(arr[1], 10);   
    return true;
}
BookChapterVerse.prototype.IsNumbersOfChaperVersus=function (search){
    //search, sBookId,sBibleId
    console.log(search);
    var search = search.replace(/^\s+|\s+$/g, '') ; //trim space of first and last
    //sTxt = sTxt.replace(/[-:.\s]/g, '-') ;//replace space with '-'                                     

    var i2sval = ""+parseInt(search,10);
    if(i2sval === search ){
        search+= ":1";
        console.log("goto first verse: " + search);
    }
    
    
    //check chapter verses numbers.
    var sKeysArr = search.split(/[:|\s|,|\,|\;|\.|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+|\<|\>|\?|\~|\'|\"|\_|\/|=|\\]+/);//reg split by collon or space or ....
    //alert(sKeysArr);
    //var sKeysArr = sTxt.split(/[\D]+/);//reg split by any non-number.
    
    if( sKeysArr.length==2 )
    {
        if( IsNumeric(sKeysArr[0]) && IsNumeric(sKeysArr[1]) ) {
            this.m_iChapter= parseInt( sKeysArr[0], 10 );
            this.m_iVerse  = parseInt( sKeysArr[1], 10);   
            console.log("goto chapter:"+sKeysArr[0]+",verse:"+ sKeysArr[1]);
            return true;
        }
    }         
    return false;
}
BookChapterVerse.prototype.NumbersOfChaperVersus2KeyId=function (sBookId){
    var skeyid = sBookId + this.m_iChapter+"_"+this.m_iVerse;
    console.log(skeyid);
    return skeyid;
}

BookChapterVerse.prototype.getKeyLabel=function (jsonParms) {
    var chapvers = this.m_iChapter + ":"+this.m_iVerse;
    if(jsonParms.hasBookAbr>0){
        var ss = this.m_sBookAbr + " " + chapvers;
        return ss;
    }
    return chapvers;   
}
BookChapterVerse.prototype.getBookKeyLabel=function (jsonParms) {
    var chapvers = this.m_iChapter + ":"+this.m_iVerse;
    var book=this.GetFullBookName();
    var ss = book + " " + chapvers;
    return ss;   
}
BookChapterVerse.prototype.isBookId=function (sbookid) {
    if(0===sbookid.length) return false;
    var bmat = sbookid.match(/[\_][0-9A-Za-z]{3}/g);
    if(null===bmat) return false;   
    return true;
}

//////not used.
BookChapterVerse.prototype.parseKeyIdBySearchStrn=function (jsonParms){
    //search, sBookId,sBibleId
    var search = jsonParms.search.replace(/^\s+|\s+$/g, '') ; //trim space of first and last
    //sTxt = sTxt.replace(/[-:.\s]/g, '-') ;//replace space with '-'
                                      
    //check key format
    var b = this.ParseAsFormat_BookidChapter_Ver(search);
    if(b){//is key format                              
        if( this.isBookId(jsonParms.sBookId) && this.m_sBookId != jsonParms.sBookId ){
            alert(" unable to search \n"+this.getKeyLabel({hasBookAbr:1}) + " in "+this.getBookFullName(jsonParms.sBookId));

            return 2;//exit
        }
        return 1; //ok
    }

    //check chapter verses numbers.
    var sKeysArr = search.split(/[:|\s|,|\,|\;|\.|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+|\<|\>|\?|\~|\'|\"|\_|\/|=|\\]+/);//reg split by collon or space or ....
    //alert(sKeysArr);
    //var sKeysArr = sTxt.split(/[\D]+/);//reg split by any non-number.
    
    if( sKeysArr.length==2 )
    {
        if( IsNumeric(sKeysArr[0]) && IsNumeric(sKeysArr[1]) ) {
             if(false===this.isBookId(jsonParms.sBookId)){//whole bible.
                   var sa="Chapter "+sKeysArr[0]+ " Verses " + sKeysArr[1] + "\n\nWhich Book ?";
                   alert(sa);
                   return 2;//exit
             }
             this.m_sKeyId = jsonParms.sBookId + sKeysArr[0] + "_" + sKeysArr[1];
             return 1;
        }
    }         
    return 0;
}





//////////////////////////////////////////
var BibleBookChapterVerse=function(){
    this.sKeyIdFlagStart="";
    this.sKeyIdFlagStop="";
    this.sBookId="";
    this.iBookSwitchId=0;
    this.iBooksRangeReadingInstructor=0;
    this.iBooKId="";
    
    this.m_iShowBookAbr=0;
    
    this.isKeySaying=-1;
}
BibleBookChapterVerse.prototype.SetBookId=function (sbookid) {
    this.sBookId=sbookid;
    switch (sbookid){
        case ""://whole book
            this.iBookSwitchId=0;
            this.m_iShowBookAbr=1;
            break;
        case "Gospels":
            this.sKeyIdFlagStart="_Mat1_1";
            this.sKeyIdFlagStop="_Act1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "OT":
            this.sKeyIdFlagStart="_Gen1_1";
            this.sKeyIdFlagStop="_Mat1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "Moses":
            this.sKeyIdFlagStart="_Gen1_1";
            this.sKeyIdFlagStop="_Jos1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "NT":
            this.sKeyIdFlagStart="_Mat1_1";
            this.sKeyIdFlagStop="";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "HisSayings":
            this.iBookSwitchId=2;
            this.m_iShowBookAbr=1;
        break;
        default:
            //single book
            this.iBookSwitchId=0;
            this.m_iShowBookAbr=0;
        break;
    }
}
BibleBookChapterVerse.prototype.Interpret=function (key) {
    //for hisSayings.   
    var sbookid = key.substr(0,4);
    switch(sbookid){
        case "_Mat":
            this.isKeySaying = SayingsIdArr[0].indexOf(key);
            break;
        case "_Mak":
            this.isKeySaying = SayingsIdArr[1].indexOf(key);
            break;
        case "_Luk":
            this.isKeySaying = SayingsIdArr[2].indexOf(key);
            break;
        case "_Jhn":
            this.isKeySaying = SayingsIdArr[3].indexOf(key);
            break;
        case "_Act":
            this.isKeySaying = SayingsIdArr[4].indexOf(key);
            //console.log(sbookid+":"+this.isKeySaying);
            break;
        default:
            this.isKeySaying=-1;
            //console.log(sbookid+"==-1");
        break;
    }
    
    //for books.
    switch(this.iBookSwitchId){
        case 2://HisSayings
            if(this.isKeySaying>=0){
                return 1;
            }
            return 0;
        break;
        case 1://gospel, NT, OT, Moses
            if(this.sKeyIdFlagStart===key){
                this.iBooksRangeReadingInstructor=1;
            }
            else if(this.sKeyIdFlagStop===key){
                this.iBooksRangeReadingInstructor=2;//for exit loop.
            }
            return this.iBooksRangeReadingInstructor;
        break;
        case 0:
            var i= key.indexOf(this.sBookId);
            if( i<0) return 0;
            return 1;
        break;
        default:
            alert("what is iBookSwitchId");
        break;
    }
    return false;
}



var gBookChapterVerse=new BookChapterVerse();





$(document).ready(function(){
     ajxGetLoginInfo();
});////////jquery


function StartToGo( bForceReload){
    var sBookId = $("#selbook").attr("value");
    var sSearch = $("#edit_area").val();
    var sBibleName = $("#selMainBible").val(); 

    if("ONT"==sBookId) sBookId="";
    
    if(sSearch.indexOf("~")>=0){
        sSearch="";
        $("#edit_area").val("");
    }
    
    //$("title").text(gBookChapterVerse.getBookFullName(sBookId));
    
    if("[References]"===sSearch){
        window.open("./iesus.bible.cuv/index.htm");
        return;
    }
                             
    if( gMyFunctionsNames.RunMyFunc(sSearch) ){
        return;
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
    //if( gBookChapterVerse.IsNumbersOfChaperVersus(sSearch) ){
    //    if( false===gBookChapterVerse.isBookId(sBookId) ){
    //        return alert("Please select a specific book for chaper verses.");
    //    }
    //    var sKeySerchVers = gBookChapterVerse.NumbersOfChaperVersus2KeyId(sBookId);  
    //  AddIntoHistory(sKeySerchVers);
    //  if(true === scrollIntoView2KeyId(sKeySerchVers)){
    //      return;
    //  }
    //    //alert(sky);
    //    $("#vbibtxt").html( GetBookFrCurBible( sBookId ) ) ;
    //    updateFontSize();                         
    //    $("#selHistory").val("");                                          
    //    minimizeMainMenuControl();
    //    scrollIntoView2KeyId(sKeySerchVers);
    //    return ;
    //}
    
                                          
    //to search based on input string analysis result.
    //if( 1 === LoadBook(sSearch, sBookId)){
    //  return;
    //};

                          
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
			//CUVs.Load();
			return;
		case "NIV":
			//NIV.Load();
			return;
		case "KJV":
			//KJV.Load();
			return;
		case "BBE":
			//BBE.Load();
			return;
		case "CUVpy":
			//CUVpy.Load();
			return;
			
		case "CUVt":
		case "TBI":
			//CUVs.Load();
			//Z2G.Load(); 
			return;
		default:
		break;
	}

}
function body_onload() {
    //$("#vbibtxt").empty();
	var fontsize = MyCookies.get("fontsize","90px");
	$("#selFontsize").val(fontsize);
	
	var selMainBible=MyCookies.get("selMainBible","KJV");
	$("#selMainBible").val(selMainBible);    
	dynaLoadVersion(selMainBible);
	
    var sBKeyId=MyCookies.get("sBKeyId","");
    console.log("body_onload:"+sBKeyId);
    
    var sbookid="_Gen";
    var bokname=BookJsONT[sbookid][1];
	
    if(LoadBookByFormat_BCV(sBKeyId, true)){
        sbookid=gBookChapterVerse.m_sBookId;
        bokname = BookJsONT[sbookid][1];
        $("#selbook").attr("value",sbookid).text(bokname);
        console.log("LoadBookByFormat_BCV:"+sbookid);
        return;
    }
    
    console.log("load default:"+sbookid);
    //$("#vbibtxt").empty();

    $("#selbook").attr("value",sbookid).text(bokname);
    $("#vbibtxt").append(GetBookFrCurBible( $("#selbook").attr("value") )); 
	

    return;
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
    var fontsize = $("#selFontsize").val();
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
    $("#uictrl").css({width:"110px",height:"100px"});
    $("#btnMin").text("[+]");
    //oMyCookie.Select_SaveOptions("selHistory");
}

function AddIntoHistory(sTxt) {
    //alert(sTxt.length);
    //alert(sTxt);
    if (  $("#selHistory option[value='"+sTxt+"']").length > 0 ) {//remove exisit ont.
        //$("#selHistory").append("<option value='"+sTxt+"' >"+sTxt+"</option>");        
        $( "#selHistory option" ).remove( ":contains('"+sTxt+"')" );//remove itm contain str.
    }
    
    //add most recent at front.
    var newOption = $("<option value='" + sTxt + "'>" + sTxt + "</option>");
    newOption.insertAfter("#selHistory option:first");
    newOption.insertAfter("#selHistory option:eq(2)");

    //oMyCookie.Select_SaveOptions("selHistory");
}
function AppendNumbers2History() {
    for(var i=1;i<=150;i++){
        $( "#selHistory option[value='"+i+"']" ).remove( );//remove exact str..
    }
    var book=$("#selbook").attr("value");
    if( 'undefined' === TotChapterOfBook[book] || !TotChapterOfBook[book]){
        console.log(book+" has no number for chapter.");
        return;
    }
    // var iMax=TotChapterOfBook[book];
    // for(var i=1;i<=iMax;i++){
    //     var newOption = ("<option value='" + i + "'>" + i + "</option>");
    //     $("#selHistory").append(newOption);
    //     console.log(""+newOption);
    // }
    
}
function GetHistoryData() {
    var data={};//object;
    console.log("GetHistoryData");
    var i=0, bNext=1;
    $("#selHistory").find("option").each(function(i,obj){
        var val=$(this).attr("value");
        if("[Help]"===val) bNext=0;
        if( !!val && bNext ){           
            console.log(val);
            data["_"+i]=val;
            i++;
        }
    });
    return data;
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
    
    var s=s0+ akey + atxt + acontrast + construed + s5;
    return (s);        
}
//prepare for construed language.
function vkey(elm) {//   
    ajxGetLoginInfo(); 

    var sky = $(elm).attr("id");//BCV, _BbbCcc_Vvv
    var csid  = BookChapterVerseUti.construedId(sky);
    gBookChapterVerse.ParseAsFormat_BookidChapter_Ver(sky);
    //alert(sky);
    
    MyCookies.set("sBKeyId",sky,77);
    console.log("set sBKeyId="+sky);
    AddIntoHistory(sky);
    
    
    ////make it selectable for input.
    //var txtid = gBookChapterVerse.contxtId(sky);
    //var txt=$("#"+txtid).text();    
    //var bible=$("#selMainBible").val();
    //$("#"+txtid).html(Strn2Pickabl(txt, bible));//problem:  table size will be expanded. fixed with css table-layout:fixed 
    
    //To keep notes value before closeout.
    // var currNote=$("#"+csid).find("#VerseMyNoteWriteArea").text();
    // if(!!currNote){
    //     console.log("csid="+csid+",currNote="+currNote);
    //     $("#"+csid).attr("readata",currNote);
    //     var readata_orig=$("#"+csid).attr("readata_orig",currNote);
    //     if(readata_orig != currNote){
    //         var ss="Do you want to save?";
    //     }
    // }
    
    
    
    
    
    var bConstrued= ""+$(elm).attr("bConstrued");//elm.style.backgroundColor;
    //alert(bConstrued);
    if("true"===bConstrued){
        $("#"+csid).hide();
        $(elm).attr("bConstrued","false").css("backgroundColor","#cfcfed"); //closed color
        return;
    }else if ("false"===bConstrued){
        $("#"+csid).show();
        $(elm).attr("bConstrued","true").css("backgroundColor","#1799dd");//opened color
        return;
    }
	
	VerseMyNotesRead( {_BCV:sky, bLoginNow:false} );
    
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
    $(dupConstrued).find(".construeItem:first").html(gBookChapterVerse.getBookKeyLabel());
	
	//$(dupConstrued).find("#VerseMyNoteWriteArea").attr("_BCVid",sky);
    
    
    $(dupConstrued).children().attr("verskey",sky);//.construedLangSel
    $(dupConstrued).css({position:"static",visibility:"visible"}).show();
    $("#"+csid).empty().append(dupConstrued);  
    //$( "#"+csid).find("select").focus();
    //$(dupConstrued).find("select").focus();
    //$( "#"+txtid).find("select").focus();
    //$(elm).parent().find("select").focus();
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
	dynaLoadVersion(vbible);
	 
	var contrastId = BookChapterVerseUti.contrastId(sky);
	var construteLableID=sky+"_lableID";
	
    //alert(sky)
    var construedstr = "";
	var atxt = "";
    var scolor="#000077";
	
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
		
    case "MyNotes"://
		var txt=$("#"+sky).attr("nodetxt");//
		txt=txt.trim();
		if( txt.indexOf("Invalid") >=0 ){
			VerseMyNotesRead({ _BCV:sky, bLoginNow:true});
			return;
		}
		var editID=sky+"_edit";
		atxt="<div class='note_edit' contenteditable=true construteLableID='"+construteLableID+"' id='"+editID+"' bcv='"+sky+"' onclick='note_edit_onclick(this);'>"+txt+"</div>";
		//http://24.96.232.130:7780/lamp/wroot/tool/_edit/explore/Work_htm.htm?fname=../../usrdata/BoP/wdingsoft@gmail.com/vnotes/_Gen1_2
		ajxGetLoginInfo();
		//var loginuser=gLoginUserEmail;//"wdingsoft@gmail.com";
		if(gLoginUserEmail.length>0){			
			var notefile=gLoginUserEmail+"/vnotes/"+sky;
			atxt+="<a target='blank' href='../../tool/_edit/explore/Work_htm.htm?fname=../../usrdata/BoP/"+notefile+"'>";
			atxt+="<font size='2px'>DesktopHtmEdit</font></a>";
		}
		
        //var csid  = BookChapterVerseUti.construedId(sky);
        //VerseMyNotes_OnClick(this)  ;
        scolor="#5A5A01";//
        //em.style.backgroundColor="#aaff11";
        //return;
        break;
    case "NIV":
        construedstr = NIV.DynamicLoadVerse(sky);//N[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        //em.style.backgroundColor="#aaeeaa";
        scolor="#223456";//NIV
        break;		
    case "KJV":		
        construedstr = KJV.DynamicLoadVerse(sky);//K[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        //em.style.backgroundColor="#aaeeaa";
        scolor="#123456";//KJV
        break;
    case "BBE":
        construedstr = BBE.DynamicLoadVerse(sky);//B[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        scolor="#000080";//BBE
        //em.style.backgroundColor="#aaeeff";
        break;
    case "CUVs"://  translate chinese into chinese.
        construedstr = I[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        delimiter=" ";
        scolor="#555444";
        //em.style.backgroundColor="#ff00bb";
        break;
    case "CUVt"://translate chinese into jiaguwen.
		//dynaLoadVersion("CUVs");
        construedstr = z2g_convert2opposite(I[sky]) ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        delimiter=" ";
        scolor="#555444";
        //em.style.backgroundColor="#ff11aa";
        break;//
    case "CUVpy"://.
        construedstr = CUVpy.DynamicLoadVerse(sky);//P[sky] ;
		var txt = Strn2Pickabl(construedstr,vbible);
		atxt="<a>"+txt+"</a>";
        scolor="#555444";
        //em.style.backgroundColor="#ff11aa";
        break;//
    case "TBI"://translate chinese into jiaguwen.
        construedstr = z2g_translate2jiaguwen(I[sky])  ;
		atxt="<a>"+construedstr+"</a>";
        scolor="#333333";//TBI EDB10C;
        //em.style.backgroundColor="#aaff11";
        break; 
    default:
        var csid  = BookChapterVerseUti.construedId(sky);
        $("#"+csid).hide();//parentsUntil("#selConstrued").attr("id");//hide();
		$("#"+sky).attr("bConstrued","false").css("backgroundColor","#cfcfed");//close color
        console.log("csid="+csid);
        
        //make it selectable for input. tranparent ovelap
        var txtid = BookChapterVerseUti.contextId(sky);
        var txt=$("#"+txtid).text();    
        var bible=$("#selMainBible").val();
        $("#"+txtid).html(Strn2Pickabl(txt, bible));
    
        return;
        break;
    }   
    
	var avsn="<a class='constrastLabel' _BCV='"+sky +"' conslabel='"+vbible+"' id='"+construteLableID+"' onclick='constrastLabel_OnClick(this)'>"+vbible+": </a>";

	var adiv="<div style='background-color:"+scolor+";' class='contrast'>" + avsn + atxt + "</div>";
	$("#"+contrastId).append($(adiv));
	
	//VerseMyNotesRead2(contrastId);
	return;
    
    var item=$(this).next().text();
	if(item[0]==="."){
		$(this).next().html("  "+txt);
	}
	else{
		$(this).next().html(".....");
	}
    //$(addnew).insertAfter($(this));
    return;

    //
    var csid = BookChapterVerseUti.construedId(sky);
    var fntsize = $("#selFontsize").val();
    $("#"+csid).html( txt )
    .find("img").css({width:fntsize,height:fntsize});//For TBI img
    $("#"+csid).css({"backgroundColor":scolor});
    
    updateFontSize();
    scrollIntoView2KeyId(sky);
}
function note_edit_onclick(me){
	 var bcv=$(me).attr("bcv");
	 var editID=$(me).attr("id");
	 var construteLableID=$(me).attr("construteLableID");
	 //alert(construteLableID);
	 $("#verse_note_editor_save").attr("construteLableID",construteLableID).attr("bcv",bcv).attr("editID",editID).show();
	 //.text("save: \n"+bcv);
}

function constrastLabel_OnClick(me){
	$("#verse_note_editor_save").hide();
	var conslabel=$(me).attr("conslabel");
	if(conslabel==="MyNotes"){
		var bcv=$(me).attr("_BCV");
		var newtxt=$(me).next().html();
		constrastLabel_OnClick_save2file(me);
		return;
	}
	$(me).parent().empty();
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
//  function VerseMyNotes_OnClick(me){
//  	var stat=$(me).next().text();
//  	var sky=$(me).next().attr("_BCV");
//  	if(NOT_LOG_IN===stat){
//  		VerseMyNotesRead({ _BCV:sky, bDlg:true});
//  		return;
//  	}
//  	var disp = $(me).next().next().css("display");
//  	if("none"===disp){
//  		$(me).next().next().show();
//  	}else{
//  		$(me).next().next().hide();
//  	}
//  }
function VerseMyNotesRead(jsn){ //csid,sky   
	sky  =jsn._BCV;
	csid =BookChapterVerseUti.construedId(sky);
	bLoginNow =jsn.bLoginNow;
	
    console.log("VerseMyNotes:"+sky);

    csid="#"+csid;
	

    console.log("ajax:_BCVid="+sky);
    $.ajax({
      url: AjxUrl.MyNotesRead, 
      data: "BCVid="+sky,
      type: 'post',
      success: function(ret) {
        console.log(ret);
		$("#"+sky).attr("nodetxt",ret);
        if(CatchInvalidLoginDlg(ret, bLoginNow)){
			$(csid).find("#nodeinfo").attr("_BCV",sky).text(NOT_LOG_IN);
            return;
        }else{
            //$(csid).empty().append(cloned).show();
			
            //$(csid).find("#VerseMyNoteWriteArea").text(ret);
			$(csid).find("#nodeinfo").text(" ("+ret.length+"B)");
            //$(csid).attr("readata",ret);
            //$(csid).attr("readata_orig",ret);
            //scrollIntoView2KeyId("VerseMyNoteWriteArea");
            scrollIntoView2KeyId(sky);
        }
      },
      complete:function(ret,err){
        console.log("complete VerseMyNotes:"+err);
        $("#edit_area").val("~ VerseMyNotes:"+err);
      }
    });
    return; 
}

function VerseMyNotesReadzzzzzzzzzzzzzzzzzzzzzzzzzz(csid,sky){    
    console.log("VerseMyNotes:"+sky);
    //$("#"+csid).parent().find("#VerseMyNotesDiv").attr({display:"block",csid:csid}).show();
    
    csid="#"+csid;

    var cloned=$("#VerseMyNotesDiv").clone(true);
    $(cloned).attr({display:"block",BCVid:sky}).show();
    //$(csid).empty().append(cloned).show();

    var readata=$(csid).attr("readata");
    //if( !!readata ){
    //  console.log("reuse csid="+csid+",readata:"+readata);
    //  $(csid).empty().append(cloned).show();
    //  $(cloned).find("#VerseMyNoteWriteArea").text(readata);
    //  scrollIntoView2KeyId(sky);
    //  return;
    //}
    console.log("ajax:");
    $.ajax({
      url: AjxUrl.MyNotesRead, 
      data: "BCVid="+sky,
      type: 'post',
      success: function(ret) {
        console.log(ret);
        if(CatchInvalidLoginDlg(ret,false)){
            return;
        }else{
            $(csid).empty().append(cloned).show();
            $(csid).find("#VerseMyNoteWriteArea").css({contenteditable:"true"}).text(ret);
            $(csid).attr("readata",ret);
            $(csid).attr("readata_orig",ret);
            //scrollIntoView2KeyId("VerseMyNoteWriteArea");
            scrollIntoView2KeyId(sky);
        }
      },
      complete:function(ret,err){
        console.log("complete VerseMyNotes:"+err);
        $("#edit_area").val("~ VerseMyNotes:"+err);
      }
    });
    return; 
}
function getIndexOfDifferences(str1,str2){
	var arr1=str1.split("");
	var arr2=str2.split("");
	for(var i=0;i<arr1.length && i<arr2.length; i++){
		var c1=arr1[i];
		var c2=arr2[i];
		if(  c1 != c2 ){
			return i;
		}
	}
	return -1;
}
function constrastLabel_OnClick_save2file(me){
	var BCVid=$(me).attr("_BCV");
	var mode=$(me).next().attr("mode");
	var txt=$(me).next().html();	
	if(mode==="code"){
		txt=$(me).next().text();
	}
	txt=txt.trim();
	var txt2=encodeURIComponent(txt);
	
	console.log(txt);
	
	var oldtxt=""+$("#"+BCVid).attr("nodetxt");
	oldtxt=oldtxt.trim();
	if(oldtxt === txt){
		if(!confirm("force to save?")){
			$(me).parent().empty();
			return;
		}
	}
	var difIndx=getIndexOfDifferences(oldtxt,txt);
	var ss="["+BCVid+ "]: " + txt.substr(difIndx,15)+" ..."+txt.length+"/"+txt2.length+"(B)";
    if (!confirm(ss+"\n\nSave changes? \n(otherwise close and lose changes)")) {
		$(me).parent().empty();
		return;
	}
    var dat="BCVid="+BCVid+"&txt="+txt2+"&size="+txt.length;
    console.log("VerseMyNotes:"+BCVid);
    $.ajax({
      url: AjxUrl.MyNotesSave, 
      data: {BCVid:BCVid,txt:txt,size: txt.length},
	  dataType: "json",
	  method: 'post',
      type: 'post',
      success: function(ret) {
         console.log("save ok");
		 //var jobj = jQuery.parseJSON( ret );
         alert("Successfully saved(B):"+ret.size);
		 $("#"+BCVid).attr("nodetxt",txt);//update old txt.
      },
      complete:function(ret,err){
        console.log("complete VerseMyNotesWrite:"+err);
        $("#edit_area").val("~ NotesWrite:"+err);
        if("success"!=err){
            alert(ret+",failed to save:"+err);
        }
      }
    });
    return; 
}
function VerseMyNotesWrite(BCVid,txt,bClose){
	var ss=BCVid+":"+txt.substr(0,10)+"...";
    if (!confirm(ss+"\n\nSave?")) return;
	txt=encodeURIComponent(txt);
    var dat="BCVid="+BCVid+"&txt="+txt;
    console.log("VerseMyNotes:"+BCVid);
    $.ajax({
      url: AjxUrl.MyNotesSave, 
      data: dat,
      type: 'post',
      success: function(ret) {
        console.log(ret);
           if(!confirm("Successfully saved(B):"+ret+"\n\n\n-Continue?!")){
               if(bClose){
                   var csid  = BookChapterVerseUti.construedId(BCVid);
                   $("#"+csid).hide();//parentsUntil("#selConstrued").attr("id");//hide();
                   $("#"+BCVid).attr("bConstrued","").css("backgroundColor","#cfcfed"); 
               }
           };
      },
      complete:function(ret,err){
        console.log("complete VerseMyNotesWrite:"+err);
        $("#edit_area").val("~ NotesWrite:"+err);
        if("success"!=err){
            alert("failed to save:"+err);
        }
      }
    });
    return; 
}



function GetCurBible() {
    var BibleVersion = $("#selMainBible").val(); //GetBibleVersionThruWinLoc();
	dynaLoadVersion(BibleVersion);
    //alert(window.m_MainLang);
    if ("CUVs"==BibleVersion) {
        return (I);
    }
    else if ("NIV"==BibleVersion) {
        return (N);
    }
	else if ("KJV"==BibleVersion) {
        return (K);
    }
    else if ("BBE"==BibleVersion) {
        return (B);
    }
    else if ("CUVpy"==BibleVersion) {
        return (P);
    }
	else{
		alert("fatal err");
	}
    //alert("BibleVersion not found (Default is Chinese):"+BibleVersion);
    return (I);
}

function GetBookFrCurBible(BookAbrv) {
    var oBible=GetCurBible(); 
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
        var iIndicator = oBibleBookChapterVerse.Interpret(key);
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
    sBookname = "Version " + $("#selMainBible").val() + " : " + sBookname;
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
    var BIBVER=GetCurBible(); 
    var oBible=GetCurBible(); 
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(BookAbrv);
    
    
    var s="";
    var i=0;
    var str2 = "<font color='red'>" + str + "</font>";
    var reg = new RegExp(str, "g")  //"/" + str + "/g";
    for ( key in BIBVER) {
        var iIndicator = oBibleBookChapterVerse.Interpret(key);
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
    var scap="<p>" + $("#selMainBible").val()+" : " + sbook + "</p>";
    var captical="<capital>"+scap+"<p>search : "+str+"</p><p>total verses found: "+i+"</p></capital>";
    s = "<table border=1>"+captical+s+"</table>";
    
    return (s);
}

function GetSearch_old(str, BookAbrv) {
    if ( str.length==0) return ("");
    var BIBVER=GetCurBible(); 
    
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
    var scap="<p>" + $("#selMainBible").val()+" : " + sbook + "</p>";
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
        var iIndicator = oBibleBookChapterVerse.Interpret(key);
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

        var iIndicator = oBibleBookChapterVerse.Interpret(key);
        s += GetTR1(1, oBibleBookChapterVerse.isKeySaying,key, chinesebible);//search by pinyin
    }
    
    
    var sbookname = gBookChapterVerse.getBookFullName(BookAbrv);
    var scap="<p>" + $("#selMainBible").val()+" : " +sbookname + "</p>";
    
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
var gLoginUserEmail='';
function ajxGetLoginInfo(){ //csid,sky   
	if(gLoginUserEmail.length>0){
		return;
	}
    console.log("ajax:GetLoginInfo");	
    $.ajax({
      url: AjxUrl.LoginInfo, 
      data: "t=1",
      type: 'post',
      success: function(ret) {
		  ret=ret.trim();
          console.log(ret);
		  gLoginUserEmail="";
		  var idxpos = ret.indexOf("Invalid") ;
		  if( idxpos < 0 ){
			 gLoginUserEmail=ret;
		  }
		
      },
      complete:function(ret,err){
        console.log("complete VerseMyNotes:"+err);        
      }
    });
    return; 
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
      if(confirm(ss)){      
      
        gMyFunctionsNames.add2History();
        //samples
        AddIntoHistory("2 (~!@#$%^&*_+-=<>,.:;) 1");
        AddIntoHistory("ye su");
        AddIntoHistory("???");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");
        AddIntoHistory("??");

        
      }
      else{
        
      }
};
