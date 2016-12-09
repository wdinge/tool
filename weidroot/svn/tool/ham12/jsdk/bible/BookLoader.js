

var BookLoader=function(BookObj){
	this.BBB=BookObj;//call by references	
	this.Book2StartFileIndex = {};
	this.Prefix="Niv_";
	this.LoadAll=false;
};
BookLoader.prototype.Set=function(dir){
	this.dir=dir;
}
BookLoader.prototype.DynamicLoadVerse=function(BookCapterVersID){
	if("all"===BookCapterVersID){
		if(!this.LoadAll){
			this.LoadFiles(0, this.Book2StartFileIndex.END);	
			this.LoadAll=true;		
		}		
		return "";
	}

	if( !! this.BBB[BookCapterVersID] ) {
		return this.BBB[BookCapterVersID];
		};
		
	var book=BookCapterVersID.substr(0,4);
	var StartFileIndx = this.Book2StartFileIndex[book];
	var books=Object.keys(this.Book2StartFileIndex);
	var indxBook = books.indexOf(book);
	var indxBookNext = indxBook+1;
	var bookNext = books[indxBookNext];
	var EndFileIndx = this.Book2StartFileIndex[bookNext];
	this.LoadFiles(StartFileIndx,EndFileIndx);
	
	if( ! this.BBB[BookCapterVersID] ) {
		alert("failed dynamically load bookChapterVers:"+BookCapterVersID);
		return "err:"+BookCapterVersID;
		};
	return this.BBB[BookCapterVersID];
};
BookLoader.prototype.LoadFiles=function(start, end){
		var sdir=this.dir;
		console.log("LoadFiles dir:"+sdir+":"+start+ ","+ end);
		for( var i=start; i<=end; i++) {
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
BookLoader.prototype.WriteJs_CUVs=function(){
	sdir = this.dir;
    var CUV_JsFiles=this.Book2StartFileIndex;
	for(key in CUV_JsFiles) {
        var jsfile = sdir + CUV_JsFiles[key] + ".unicode.js";
        var s="<";
        s = s+ "script "+" language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + "></";
        s = s + "script";
        s = s + ">";
        
        document.write(s);
		//$("head").append(s);
		//console.log(":"+key+","+s);
    }
	console.log("finished: inc_bibleChinese_write");
}	
    
    
    
    
    
    

//////////////////	
var CUV_JsFiles = new Object();
CUV_JsFiles.bbi_000_0=  "bbi_000.0";
CUV_JsFiles.bbi_000_1=  "bbi_000.1";
CUV_JsFiles.bbi_000_2=  "bbi_000.2";
CUV_JsFiles.bbi_000_3=  "bbi_000.3";
CUV_JsFiles.bbi_0004a=  "bbi_000.4a";
CUV_JsFiles.bbi_0004b=  "bbi_000.4b";
CUV_JsFiles.bbi_0005a=  "bbi_000.5a";
CUV_JsFiles.bbi_0005b=  "bbi_000.5b";
CUV_JsFiles.bbi_000_6=  "bbi_000.6";
CUV_JsFiles.bbi_001_1=  "bbi_001.1";
CUV_JsFiles.bbi_001_2=  "bbi_001.2";
CUV_JsFiles.bbi_001_3=  "bbi_001.3";
CUV_JsFiles.bbi_001_4=  "bbi_001.4";
CUV_JsFiles.bbi_001_5=  "bbi_001.5";
CUV_JsFiles.bbi_002_1=  "bbi_002.1";
CUV_JsFiles.bbi_002_2=  "bbi_002.2";
CUV_JsFiles.bbi_002_3=  "bbi_002.3";
CUV_JsFiles.bbi_003_1=  "bbi_003.1";
CUV_JsFiles.bbi_003_2=  "bbi_003.2";
CUV_JsFiles.bbi_003_3a= "bbi_003.3a";
CUV_JsFiles.bbi_003_3b= "bbi_003.3b";
CUV_JsFiles.bbi_003_4=  "bbi_003.4";
CUV_JsFiles.bbi_003_5=  "bbi_003.5";
CUV_JsFiles.bbi_004_0=  "bbi_004.0";
CUV_JsFiles.bbi_004_1=  "bbi_004.1";
CUV_JsFiles.bbi_004_2=  "bbi_004.2";
CUV_JsFiles.bbi_004_3=  "bbi_004.3";
CUV_JsFiles.bbi_004_4=  "bbi_004.4";
CUV_JsFiles.bbi_005_1=  "bbi_005.1";
CUV_JsFiles.bbi_005_2=  "bbi_005.2";
CUV_JsFiles.bbi_005_3=  "bbi_005.3";
CUV_JsFiles.bbi_006_1=  "bbi_006.1";
CUV_JsFiles.bbi_006_2=  "bbi_006.2";
CUV_JsFiles.bbi_006_3=  "bbi_006.3";
CUV_JsFiles.bbi_007__=  "bbi_007"  ;
CUV_JsFiles.bbi_008_1=  "bbi_008.1";
CUV_JsFiles.bbi_008_2=  "bbi_008.2";
CUV_JsFiles.bbi_008_3=  "bbi_008.3";
CUV_JsFiles.bbi_008_4=  "bbi_008.4";
CUV_JsFiles.bbi_009_1=  "bbi_009.1";
CUV_JsFiles.bbi_009_2=  "bbi_009.2";
CUV_JsFiles.bbi_009_3=  "bbi_009.3";
CUV_JsFiles.bbi_010_1=  "bbi_010.1";
CUV_JsFiles.bbi_010_2=  "bbi_010.2";
CUV_JsFiles.bbi_010_3=  "bbi_010.3";
CUV_JsFiles.bbi_010_4=  "bbi_010.4";
CUV_JsFiles.bbi_011_0=  "bbi_011.0";
CUV_JsFiles.bbi_011_1=  "bbi_011.1";
CUV_JsFiles.bbi_011_2=  "bbi_011.2";
CUV_JsFiles.bbi_011_3=  "bbi_011.3";
CUV_JsFiles.bbi_012_1=  "bbi_012.1";
CUV_JsFiles.bbi_012_2=  "bbi_012.2";
CUV_JsFiles.bbi_012_3=  "bbi_012.3";
CUV_JsFiles.bbi_012_4=  "bbi_012.4";
CUV_JsFiles.bbi_013_1=  "bbi_013.1";
CUV_JsFiles.bbi_013_2=  "bbi_013.2";
CUV_JsFiles.bbi_013_3=  "bbi_013.3";
CUV_JsFiles.bbi_013_4=  "bbi_013.4";
CUV_JsFiles.bbi_014__=  "bbi_014"  ;
CUV_JsFiles.bbi_015_1=  "bbi_015.1";
CUV_JsFiles.bbi_015_2=  "bbi_015.2";
CUV_JsFiles.bbi_016__=  "bbi_016"  ;
CUV_JsFiles.bbi_017_1=  "bbi_017.1";
CUV_JsFiles.bbi_017_2=  "bbi_017.2";
CUV_JsFiles.bbi_017_3=  "bbi_017.3";
CUV_JsFiles.bbi_017_4=  "bbi_017.4";
CUV_JsFiles.bbi_018_1=  "bbi_018.1";
CUV_JsFiles.bbi_018_2a= "bbi_018.2a";
CUV_JsFiles.bbi_018_2b= "bbi_018.2b";
CUV_JsFiles.bbi_018_3=  "bbi_018.3";
CUV_JsFiles.bbi_018_4=  "bbi_018.4";
CUV_JsFiles.bbi_018_5=  "bbi_018.5";
CUV_JsFiles.bbi_018_6=  "bbi_018.6";
CUV_JsFiles.bbi_018_7=  "bbi_018.7";
CUV_JsFiles.bbi_018_8=  "bbi_018.8";
CUV_JsFiles.bbi_019_1=  "bbi_019.1";
CUV_JsFiles.bbi_019_2=  "bbi_019.2";
CUV_JsFiles.bbi_019_3=  "bbi_019.3";
CUV_JsFiles.bbi_020__=  "bbi_020"  ;
CUV_JsFiles.bbi_021__=  "bbi_021"  ;
CUV_JsFiles.bbi_022_1=  "bbi_022.1";
CUV_JsFiles.bbi_022_2=  "bbi_022.2";
CUV_JsFiles.bbi_0223a=  "bbi_022.3a";
CUV_JsFiles.bbi_0223b=  "bbi_022.3b";
CUV_JsFiles.bbi_022_4=  "bbi_022.4";
CUV_JsFiles.bbi_022_5=  "bbi_022.5";
CUV_JsFiles.bbi_023_0=  "bbi_023.0";
CUV_JsFiles.bbi_023_1=  "bbi_023.1";
CUV_JsFiles.bbi_023_2a= "bbi_023.2a";
CUV_JsFiles.bbi_023_2b= "bbi_023.2b";
CUV_JsFiles.bbi_023_3=  "bbi_023.3";
CUV_JsFiles.bbi_023_4=  "bbi_023.4";
CUV_JsFiles.bbi_023_5=  "bbi_023.5";
CUV_JsFiles.bbi_023_6=  "bbi_023.6";
CUV_JsFiles.bbi_024__=  "bbi_024"  ;
CUV_JsFiles.bbi_025_1=  "bbi_025.1";
CUV_JsFiles.bbi_025_2=  "bbi_025.2";
CUV_JsFiles.bbi_025_3=  "bbi_025.3";
CUV_JsFiles.bbi_025_4a= "bbi_025.4a";
CUV_JsFiles.bbi_025_4b= "bbi_025.4b";
CUV_JsFiles.bbi_025_5=  "bbi_025.5";
CUV_JsFiles.bbi_026_1=  "bbi_026.1";
CUV_JsFiles.bbi_026_2=  "bbi_026.2";
CUV_JsFiles.bbi_027__=  "bbi_027"  ;
CUV_JsFiles.bbi_028__=  "bbi_028"  ;
CUV_JsFiles.bbi_029__=  "bbi_029"  ;
CUV_JsFiles.bbi_030__=  "bbi_030"  ;
CUV_JsFiles.bbi_031__=  "bbi_031"  ;
CUV_JsFiles.bbi_032__=  "bbi_032"  ;
CUV_JsFiles.bbi_033__=  "bbi_033"  ;
CUV_JsFiles.bbi_034__=  "bbi_034"  ;
CUV_JsFiles.bbi_035__=  "bbi_035"  ;
CUV_JsFiles.bbi_036__=  "bbi_036"  ;
CUV_JsFiles.bbi_037__=  "bbi_037"  ;
CUV_JsFiles.bbi_038__=  "bbi_038"  ;
CUV_JsFiles.bbi_039_1=  "bbi_039.1";
CUV_JsFiles.bbi_039_2=  "bbi_039.2";
CUV_JsFiles.bbi_039_3=  "bbi_039.3";
CUV_JsFiles.bbi_039_4=  "bbi_039.4";
CUV_JsFiles.bbi_039_5=  "bbi_039.5";
CUV_JsFiles.bbi_040_1=  "bbi_040.1";
CUV_JsFiles.bbi_040_2=  "bbi_040.2";
CUV_JsFiles.bbi_040_3=  "bbi_040.3";
CUV_JsFiles.bbi_041_1=  "bbi_041.1";
CUV_JsFiles.bbi_041_2=  "bbi_041.2";
CUV_JsFiles.bbi_041_3=  "bbi_041.3";
CUV_JsFiles.bbi_041_4=  "bbi_041.4";
CUV_JsFiles.bbi_041_5=  "bbi_041.5";
CUV_JsFiles.bbi_042_1=  "bbi_042.1";
CUV_JsFiles.bbi_042_2=  "bbi_042.2";
CUV_JsFiles.bbi_042_3=  "bbi_042.3";
CUV_JsFiles.bbi_043_1=  "bbi_043.1";
CUV_JsFiles.bbi_043_2=  "bbi_043.2";
CUV_JsFiles.bbi_043_3=  "bbi_043.3";
CUV_JsFiles.bbi_043_4=  "bbi_043.4";
CUV_JsFiles.bbi_044_1=  "bbi_044.1";
CUV_JsFiles.bbi_044_2=  "bbi_044.2";
CUV_JsFiles.bbi_045_1=  "bbi_045.1";
CUV_JsFiles.bbi_045_2=  "bbi_045.2";
CUV_JsFiles.bbi_046__=  "bbi_046"  ;
CUV_JsFiles.bbi_047__=  "bbi_047"  ;
CUV_JsFiles.bbi_048__=  "bbi_048"  ;
CUV_JsFiles.bbi_049__=  "bbi_049"  ;
CUV_JsFiles.bbi_050__=  "bbi_050"  ;
CUV_JsFiles.bbi_051__=  "bbi_051"  ;
CUV_JsFiles.bbi_052__=  "bbi_052"  ;
CUV_JsFiles.bbi_053__=  "bbi_053"  ;
CUV_JsFiles.bbi_054__=  "bbi_054"  ;
CUV_JsFiles.bbi_055__=  "bbi_055"  ;
CUV_JsFiles.bbi_056__=  "bbi_056"  ;
CUV_JsFiles.bbi_057__=  "bbi_057"  ;
CUV_JsFiles.bbi_058__=  "bbi_058"  ;
CUV_JsFiles.bbi_059__=  "bbi_059"  ;
CUV_JsFiles.bbi_060__=  "bbi_060"  ;
CUV_JsFiles.bbi_061__=  "bbi_061"  ;
CUV_JsFiles.bbi_062__=  "bbi_062"  ;
CUV_JsFiles.bbi_063__=  "bbi_063"  ;
CUV_JsFiles.bbi_064__=  "bbi_064"  ;
CUV_JsFiles.bbi_065_1=  "bbi_065.1";
CUV_JsFiles.bbi_065_2=  "bbi_065.2";
//CUV_JsFiles.bbi_065_2=  "bbi_065.2";    
    
var I={};  //CUVs
var CUVs=new BookLoader(I);  
CUVs.Book2StartFileIndex=CUV_JsFiles;  

    
    
    
    
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



