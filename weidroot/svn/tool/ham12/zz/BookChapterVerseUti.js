
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



ONT:            1189,
OT:             929,
Moses:          187,
History:        249,
Literature:     243,
Major_Prophets: 183,
Minor_Prophets: 67,
NT:             260,
Gospels:        89,
HisSayings:     0,
Pauls:          87, 
Other_Epistles: 34, 

};

var BookJsFlavor={
ONT:             ['#510000','wholistic Bible', '圣经全书'],
OT:              ['#001040','O.T.',            '旧约全书'],
Moses:           ['#002E63','Moses',           '摩西五经'],
History:         ['#002E63','History',         '历史'],
Literature:      ['#002E63','Literature',      '文学'],
Major_Prophets:  ['#002E63','Major_Prophets',  '大先知'],
Minor_Prophets:  ['#002E63','Minor_Prophets',  '小先知'],
NT:              ['#4053A9','N.T.',            '新约全书'],
Gospels:         ['#003399','Gospels',         '四福音书'],
HisSayings:      ['#003399','HisSayings',      '耶稣话语'],
Pauls:           ['#003399','Pauls',           '保罗书信'],
Other_Epistles:  ['#003399','OtherEpistles',   '其他书信'],
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
_1Ti:['#002E63','1_Timothy',          '提摩太前书'],
_2Ti:['#002E63','2_Timothy',          '提摩太后书'],
_Tit:['#002E63','Titus',              '提多书'],
_Phm:['#002E63','Philemon',           '腓利门书'],
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
    if(sBookId.length==0) return "wholistic bible"; 
    return sBookId;
    alert("wwwee");
};


BookChapterVerse.prototype.GetFullBookName=function () {
    //var txt=$("#selBookId optgroup option[value='"+ this.m_sBookId + "']").text();
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
BookChapterVerse.prototype.GetSiblineBCV=function (iNext) {
	var nextVerse=this.m_iVerse + iNext;
	var Chapter=this.m_iChapter;
	if(nextVerse<1) {
		Chapter-=1;
		if(Chapter<1) return "LessThanBeginning";
		nextVerse=BookChapterVerseMax[this.m_sBookId][Chapter-1];
	}else{
		var iMaxVerse=BookChapterVerseMax[this.m_sBookId][Chapter-1];
		if( nextVerse > iMaxVerse ){
			nextVerse=1;
			Chapter+=1;
		}
		var maxChapter = TotChapterOfBook[this.m_sBookId];
		if(Chapter>maxChapter){
			return "MoreThanEnd";
		}
	}
    return this.m_sBookId + Chapter +"_" + nextVerse;
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
		case "History":
            this.sKeyIdFlagStart="_Jos1_1";
            this.sKeyIdFlagStop="_Job1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
		case "Literature":
            this.sKeyIdFlagStart="_Job1_1";
            this.sKeyIdFlagStop="_Isa1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
		case "Major_Prophets":
            this.sKeyIdFlagStart="_Isa1_1";
            this.sKeyIdFlagStop="_Hos1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
		case "Minor_Prophets":
            this.sKeyIdFlagStart="_Hos1_1";
            this.sKeyIdFlagStop="";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "NT":
            this.sKeyIdFlagStart="_Mat1_1";
            this.sKeyIdFlagStop="";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
        case "Gospels":
            this.sKeyIdFlagStart="_Mat1_1";
            this.sKeyIdFlagStop="_Act1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
		case "Pauls":
            this.sKeyIdFlagStart="_Rom1_1";
            this.sKeyIdFlagStop="_Heb1_1";
            this.iBookSwitchId=1;
            this.m_iShowBookAbr=1;
        break;
		case "Other_Epistles":
            this.sKeyIdFlagStart="_Heb1_1";
            this.sKeyIdFlagStop="_Rev1_1";
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
        case 1://gospel, NT, OT, Moses, etc.
            if(this.sKeyIdFlagStart===key){
                this.iBooksRangeReadingInstructor=1;
            }
            else if(this.sKeyIdFlagStop===key){
                this.iBooksRangeReadingInstructor=2;//for exit loop.
            }
            return this.iBooksRangeReadingInstructor;
        break;
        case 0://single book
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


