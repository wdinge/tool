

var BookCollections={
	OTNT:["all books of bible"],
	OT:["Old Testment"],
	NT:["New Testment"],

  Moses:        ["_Gen","_Exo","_Lev","_Num","_Deu"],
  History:      ["_Jos","_Jug","_Rut","_1Sa","_2Sa","_1Ki","_2Ki","_1Ch","_2Ch","_Ezr","_Neh","_Est"],
  Literature:   ["_Job","_Psm","_Pro","_Ecc","_Son"],
  Major_Prophets:["_Isa","_Jer","_Lam","_Eze","_Dan"],
  Minor_Prophets:["_Hos","_Joe","_Amo","_Oba","_Jon","_Mic","_Nah","_Hab","_Zep","_Hag","_Zec","_Mal"],

  Gospels:   	["_Mat","_Mak","_Luk","_Jhn"],
  Luke:      	["_Luk","_Act"],
  Pauls:     	["_Rom","_1Co","_2Co","_Gal","_Eph","_Phl","_Col","_1Ts","_2Ts","_1Ti","_2Ti","_Tit","_Phm"],
  Other_Epistles:["_Heb","_Jas","_1Pe","_2Pe","_1Jn","_2Jn","_3Jn","_Jud"],
  John:      	["_Jhn","_Rev"]
};




var BookLoader=function(BookObj){
	this.BBB=BookObj;//call by references	
	this.Book2StartFileIndex = {};
	this.Prefix="Niv_";
	this.LoadedFileIndxArr=[]; //prevent repeat load
	this.bLoadedAll=false;
};
BookLoader.prototype.Set=function(dir){
	this.dir=dir;
}

BookLoader.prototype.DynamicLoadVerse=function(BookCapterVersID){
	//
	this.LoadBooks(BookCapterVersID);

	if( ! this.BBB[BookCapterVersID] ) {
		alert("failed dynamically load bookChapterVers:"+BookCapterVersID);
		return "err:"+BookCapterVersID;
	};
	return this.BBB[BookCapterVersID];
};
BookLoader.prototype.LoadBooks=function(sname){
	var CollectsArr=BookCollections[sname];
	if(CollectsArr) {
		if("OTNT"===sname){
			this.LoadFiles(0, this.Book2StartFileIndex.END); 
			return;
		} else if("OT"===sname){
			this.LoadFiles(0, this.Book2StartFileIndex._Mat);
			return;
		} else if("NT"===sname){
			this.LoadFiles(this.Book2StartFileIndex._Mat, this.Book2StartFileIndex.END);
			return;
		}
		else{
			this.LoadBookCollection(CollectsArr);			
		}
		return;
	}

	var BookId=sname.substr(0,4);
	if( typeof this.Book2StartFileIndex[BookId] === 'undefined'){
		alert("failed to load Bible book for: "+sname);
		return;
	};
	this.LoadBookByBookId(BookId);
};
BookLoader.prototype.LoadBookCollection=function(KeyCollectionArr){
	var _pThis=this;
	$.each(KeyCollectionArr,function(i, key){
		_pThis.LoadBookByBookId(key);
	});
};
BookLoader.prototype.LoadBookByBookId=function(BookId){
	// _Gen1_1
	var StartFileIndx = this.Book2StartFileIndex[BookId];
	var books=Object.keys(this.Book2StartFileIndex);
	var indxBook = books.indexOf(BookId);
	var indxBookNext = indxBook+1;
	var bookNext = books[indxBookNext];
	var EndFileIndx = this.Book2StartFileIndex[bookNext];
	this.LoadFiles(StartFileIndx,EndFileIndx);
};
BookLoader.prototype.LoadAll=function(){
   if( !this.bLoadedAll ){
        this.LoadFiles(0, this.Book2StartFileIndex.END);        
        this.bLoadedAll=true;             
    }   
};
BookLoader.prototype.LoadFiles=function(start, end){
		var sdir=this.dir;
		console.log("LoadFiles dir:"+sdir+":"+start+ ","+ end);
		for( var i=start; i<=end; i++) {

			if(this.LoadedFileIndxArr.indexOf(i)>=0){
				continue;//already loaded.
			}
			this.LoadedFileIndxArr.push(i);

			sid = "00" + i;
			sid = sid.substr(sid.length-3,6);
			var jsfile = sdir + this.Prefix + sid + ".js";
			var s="<";
			s = s+ "script " + " language=\'javascript\' src=\'" + jsfile + "\'";
			s = s + ">";
			s = s + "</";
			s = s + "script";
			s = s + ">";
			
			//document.write(s); 
			$("head").append(s);		
			//if(i<2|| 22==i || i>180 ) alert(s);
			console.log("append:"+i+":"+s);
		}
		//alert("finished: inc_bibleNiv_run");
		console.log("finished: inc_bibleNiv_run");
}	
	
    

    
var I={};  //CUVs
var CUVs=new BookLoader(I);  
CUVs.Prefix="cuv_"; 
CUVs.Book2StartFileIndex={
_Gen:0   ,//0 
_Exo:9   ,//1 
_Lev:14  ,//2 
_Num:17  ,//3 
_Deu:23  ,//4 
_Jos:28  ,//5 
_Jug:31  ,//6 
_Rut:34  ,//7 
_1Sa:35  ,//8 
_2Sa:39  ,//9 
_1Ki:42  ,//10
_2Ki:46  ,//11
_1Ch:50  ,//12
_2Ch:54  ,//13
_Ezr:58  ,//14
_Neh:59  ,//15
_Est:61  ,//16
_Job:62  ,//17
_Psm:66  ,//18
_Pro:75  ,//19
_Ecc:78  ,//20
_Son:79  ,//21
_Isa:80  ,//22
_Jer:86  ,//23
_Lam:94  ,//24
_Eze:95  ,//25
_Dan:101 ,//26
_Hos:103 ,//27
_Joe:104 ,//28
_Amo:105 ,//29
_Oba:106 ,//30
_Jon:107 ,//31
_Mic:108 ,//32
_Nah:109 ,//33
_Hab:110 ,//34
_Zep:111 ,//35
_Hag:112 ,//36
_Zec:113 ,//37
_Mal:114 ,//38
_Mat:115 ,//39
_Mak:120 ,//40
_Luk:123 ,//41
_Jhn:128 ,//42
_Act:131 ,//43
_Rom:135 ,//44
_1Co:137 ,//45
_2Co:139 ,//46
_Gal:140 ,//47
_Eph:141 ,//48
_Phl:142 ,//49
_Col:143 ,//50
_1Ts:144 ,//51
_2Ts:145 ,//52
_1Ti:146 ,//53
_2Ti:147 ,//54
_Tit:148 ,//55
_Phm:149 ,//56
_Heb:150 ,//57
_Jas:151 ,//58
_1Pe:152 ,//59
_2Pe:153 ,//60
_1Jn:154 ,//61
_2Jn:155 ,//62
_3Jn:156 ,//63
_Jud:157 ,//64
_Rev:158 ,//65
END:159, //inclusive
};  

    
    
    
    
//////////////////	
var N={};  //NIV
var NIV=new BookLoader(N);
NIV.Prefix="Niv_";
NIV.Book2StartFileIndex = {
_Gen:0   ,//0 
_Exo:6   ,//1 
_Lev:12  ,//2 
_Num:16  ,//3 
_Deu:22  ,//4 
_Jos:27  ,//5 
_Jug:30  ,//6 
_Rut:33  ,//7 
_1Sa:33  ,//8 
_2Sa:38  ,//9 
_1Ki:41  ,//10
_2Ki:46  ,//11
_1Ch:50  ,//12
_2Ch:54  ,//13
_Ezr:58  ,//14
_Neh:60  ,//15
_Est:61  ,//16
_Job:62  ,//17
_Psm:66  ,//18
_Pro:74  ,//19
_Ecc:77  ,//20
_Son:78  ,//21
_Isa:78  ,//22
_Jer:85  ,//23
_Lam:93  ,//24
_Eze:93  ,//25
_Dan:100 ,//26
_Hos:102 ,//27
_Joe:103 ,//28
_Amo:103 ,//29
_Oba:104 ,//30
_Jon:104 ,//31
_Mic:105 ,//32
_Nah:105 ,//33
_Hab:105 ,//34
_Zep:106 ,//35
_Hag:106 ,//36
_Zec:106 ,//37
_Mal:107 ,//38
_Mat:107 ,//39
_Mak:112 ,//40
_Luk:115 ,//41
_Jhn:119 ,//42
_Act:123 ,//43
_Rom:128 ,//44
_1Co:130 ,//45
_2Co:131 ,//46
_Gal:133 ,//47
_Eph:133 ,//48
_Phl:134 ,//49
_Col:134 ,//50
_1Ts:135 ,//51
_2Ts:135 ,//52
_1Ti:135 ,//53
_2Ti:136 ,//54
_Tit:136 ,//55
_Phm:136 ,//56
_Heb:136 ,//57
_Jas:138 ,//58
_1Pe:138 ,//59
_2Pe:139 ,//60
_1Jn:139 ,//61
_2Jn:139 ,//62
_3Jn:139 ,//63
_Jud:140 ,//64
_Rev:140 ,//65
END:142 //inclusive
};	
	

    
var KJV_Book2StartFileIndex={
_Gen:0     ,//0 
_Exo:8     ,//1 
_Lev:16    ,//2 
_Num:21    ,//3 
_Deu:29    ,//4 
_Jos:35    ,//5 
_Jug:39    ,//6 
_Rut:44    ,//7 
_1Sa:44    ,//8 
_2Sa:50    ,//9 
_1Ki:54    ,//10
_2Ki:60    ,//11
_1Ch:65    ,//12
_2Ch:70    ,//13
_Ezr:76    ,//14
_Neh:78    ,//15
_Est:80    ,//16
_Job:82    ,//17
_Psm:86    ,//18
_Pro:96    ,//19
_Ecc:100   ,//20
_Son:101   ,//21
_Isa:102   ,//22
_Jer:110   ,//23
_Lam:120   ,//24
_Eze:121   ,//25
_Dan:129   ,//26
_Hos:132   ,//27
_Joe:133   ,//28
_Amo:134   ,//29
_Oba:135   ,//30
_Jon:135   ,//31
_Mic:135   ,//32
_Nah:136   ,//33
_Hab:136   ,//34
_Zep:136   ,//35
_Hag:137   ,//36
_Zec:137   ,//37
_Mal:139   ,//38
_Mat:139   ,//39
_Mak:144   ,//40
_Luk:148   ,//41
_Jhn:154   ,//42
_Act:158   ,//43
_Rom:164   ,//44
_1Co:166   ,//45
_2Co:168   ,//46
_Gal:170   ,//47
_Eph:171   ,//48
_Phl:171   ,//49
_Col:172   ,//50
_1Ts:172   ,//51
_2Ts:173   ,//52
_1Ti:173   ,//53
_2Ti:174   ,//54
_Tit:174   ,//55
_Phm:174   ,//56
_Heb:174   ,//57
_Jas:176   ,//58
_1Pe:176   ,//59
_2Pe:177   ,//60
_1Jn:177   ,//61
_2Jn:178   ,//62
_3Jn:178   ,//63
_Jud:178   ,//64
_Rev:178   ,//65
END:181 //inclusive
};

//////////////////
var K={};   //KJV
var KJV=new BookLoader(K);
KJV.Prefix="kjv_";
KJV.Book2StartFileIndex = KJV_Book2StartFileIndex;


//////////////////
var H={};   //Hebrew Greek
var HGR=new BookLoader(H);
HGR.Prefix="kjv_";
HGR.Book2StartFileIndex = KJV_Book2StartFileIndex;

//////////////////
var S={};   //Hebrew Greek
var STU=new BookLoader(S);
STU.Prefix="kjv_";
STU.Book2StartFileIndex = KJV_Book2StartFileIndex;


////////////////////////////
var B = new Object(); //BBE
var BBE=new BookLoader(B);
BBE.Prefix = "bbe_";
BBE.Book2StartFileIndex ={
_Gen:0    ,// 0 
_Exo:8    ,// 1 
_Lev:15   ,// 2 
_Num:20   ,// 3 
_Deu:27   ,// 4 
_Jos:34   ,// 5 
_Jug:38   ,// 6 
_Rut:42   ,// 7 
_1Sa:43   ,// 8 
_2Sa:48   ,// 9 
_1Ki:53   ,// 10
_2Ki:58   ,// 11
_1Ch:63   ,// 12
_2Ch:68   ,// 13
_Ezr:74   ,// 14
_Neh:76   ,// 15
_Est:78   ,// 16
_Job:80   ,// 17
_Psm:84   ,// 18
_Pro:95   ,// 19
_Ecc:99   ,// 20
_Son:100  ,// 21
_Isa:101  ,// 22
_Jer:110  ,// 23
_Lam:120  ,// 24
_Eze:120  ,// 25
_Dan:129  ,// 26
_Hos:132  ,// 27
_Joe:133  ,// 28
_Amo:134  ,// 29
_Oba:135  ,// 30
_Jon:135  ,// 31
_Mic:135  ,// 32
_Nah:136  ,// 33
_Hab:136  ,// 34
_Zep:136  ,// 35
_Hag:137  ,// 36
_Zec:137  ,// 37
_Mal:139  ,// 38
_Mat:139  ,// 39
_Mak:145  ,// 40
_Luk:148  ,// 41
_Jhn:154  ,// 42
_Act:159  ,// 43
_Rom:165  ,// 44
_1Co:167  ,// 45
_2Co:169  ,// 46
_Gal:171  ,// 47
_Eph:172  ,// 48
_Phl:172  ,// 49
_Col:173  ,// 50
_1Ts:173  ,// 51
_2Ts:174  ,// 52
_1Ti:174  ,// 53
_2Ti:175  ,// 54
_Tit:175  ,// 55
_Phm:175  ,// 56
_Heb:176  ,// 57
_Jas:177  ,// 58
_1Pe:178  ,// 59
_2Pe:178  ,// 60
_1Jn:179  ,// 61
_2Jn:179  ,// 62
_3Jn:180  ,// 63
_Jud:180  ,// 64
_Rev:180  ,// 65
END:183 //inclusive
};



////////////////////////////
var P = new Object();
var CUVpy=new BookLoader(P);
CUVpy.Prefix="PinyinBible_";
CUVpy.Book2StartFileIndex = {
_Gen:0    ,//  0 
_Exo:8    ,//  1 
_Lev:14   ,//  2 
_Num:19   ,//  3 
_Deu:26   ,//  4 
_Jos:32   ,//  5 
_Jug:36   ,//  6 
_Rut:40   ,//  7 
_1Sa:40   ,//  8 
_2Sa:45   ,//  9 
_1Ki:49   ,//  10
_2Ki:54   ,//  11
_1Ch:59   ,//  12
_2Ch:64   ,//  13
_Ezr:69   ,//  14
_Neh:71   ,//  15
_Est:73   ,//  16
_Job:74   ,//  17
_Psm:78   ,//  18
_Pro:89   ,//  19
_Ecc:92   ,//  20
_Son:94   ,//  21
_Isa:94   ,//  22
_Jer:102  ,//  23
_Lam:111  ,//  24
_Eze:112  ,//  25
_Dan:120  ,//  26
_Hos:123  ,//  27
_Joe:124  ,//  28
_Amo:124  ,//  29
_Oba:125  ,//  30
_Jon:125  ,//  31
_Mic:125  ,//  32
_Nah:126  ,//  33
_Hab:126  ,//  34
_Zep:127  ,//  35
_Hag:127  ,//  36
_Zec:127  ,//  37
_Mal:129  ,//  38
_Mat:129  ,//  39
_Mak:134  ,//  40
_Luk:138  ,//  41
_Jhn:143  ,//  42
_Act:148  ,//  43
_Rom:153  ,//  44
_1Co:156  ,//  45
_2Co:158  ,//  46
_Gal:160  ,//  47
_Eph:160  ,//  48
_Phl:161  ,//  49
_Col:162  ,//  50
_1Ts:162  ,//  51
_2Ts:163  ,//  52
_1Ti:163  ,//  53
_2Ti:164  ,//  54
_Tit:164  ,//  55
_Phm:164  ,//  56
_Heb:164  ,//  57
_Jas:166  ,//  58
_1Pe:167  ,//  59
_2Pe:167  ,//  60
_1Jn:168  ,//  61
_2Jn:168  ,//  62
_3Jn:168  ,//  63
_Jud:168  ,//  64
_Rev:169  ,//  65
END:171 //inclusive
};

var BibleBookLoader={
DynaGetBibleBookChapVerTxt:function( sBibleVersion, sky ){
	var pBibleObj=null;
	switch(sBibleVersion){
	case "NIV":
        this.ChapVerStr = NIV.LoadBooks(sky);//N[sky] ;
        pBibleObj=NIV.BBB;
        break;		
    case "KJV":		
        this.ChapVerStr = KJV.LoadBooks(sky);//K[sky] ;
        pBibleObj=KJV.BBB;
        break;
    case "STU":		
        this.ChapVerStr = STU.LoadBooks(sky);//K[sky] ;
        pBibleObj=STU.BBB;
        break;
    case "BBE":
        this.ChapVerStr = BBE.LoadBooks(sky);//B[sky] ;
        pBibleObj=BBE.BBB;
        break;
    case "CUVs"://  translate chinese into chinese.
        this.ChapVerStr = CUVs.LoadBooks(sky);//I[sky] ;
        pBibleObj= CUVs.BBB;
        break;
    case "CUVt"://translate chinese into jiaguwen.
        this.ChapVerStr =CUVs.LoadBooks(sky);
        BibleObj=CUVs.BBB;
        break;//
    case "CUVpy"://.
        this.ChapVerStr = CUVpy.LoadBooks(sky);//P[sky] ;
       	pBibleObj= CUVs.BBB;
        break;//
    case "TBI"://translate chinese into jiaguwen.
    	this.ChapVerStr= CUVs.LoadBooks(sky);
    	pBibleObj=CUVs.BBB;
        break; 

    case "HGR"://Hebrew or Greek.
        this.ChapVerStr = HGR.LoadBooks(sky);//K[sky] ;
        pBibleObj=NIV.BBB;
        break;
    case "HGS"://link
	default:
		alert("error bible version :"+sBibleVersion);
		return;
    };//switch
    var ret={pBibleObj:null, Txt:''}
    ret.pBibleObj=pBibleObj;

    if(null===pBibleObj){
    	alert("fatal err bible load.");
    	return ret;
    }
    ret.Txt=pBibleObj[sky]
    return ret;
},
};

//MasterBible
var MasterBibleBookLoader={
SetBibleVersion:function(BibleVersion){
	this.BibleVersion=BibleVersion;
	this.BibleObj=null;
	this.ChapVerStr="";
},
LoadBookChapVers:function( sky ){
	var ret = BibleBookLoader.DynaGetBibleBookChapVerTxt(this.BibleVersion, sky);
	this.BibleObj=ret.pBibleObj;
	this.ChapVerStr=ret.Txt;
	return ret.Txt;
},
};
