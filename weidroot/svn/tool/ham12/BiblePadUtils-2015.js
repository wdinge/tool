
var MyFunctionsNames=function(){
    this.FunctionNameArr=new Object();
}

MyFunctionsNames.prototype.add=function(name, func){
    this.FunctionNameArr[name]=func;
}
MyFunctionsNames.prototype.add2History=function(){
    //alert();
    for(var funcname in this.FunctionNameArr){
        AddIntoHistory("@"+funcname);
    };
}
MyFunctionsNames.prototype.RunMyFunc=function(sSearch){
    for(var funcname in this.FunctionNameArr){
        var pos=sSearch.indexOf(funcname,1);
        if(pos>=0){
            if(confirm( sSearch + ":\n do you want to run?\n")){
                this.FunctionNameArr[funcname]();
                updateFontSize();
                minimizeMainMenuControl();
                return true;
            }
        }
    };
    return false;
}


var gMyFunctionsNames = new MyFunctionsNames();

$(document).ready(function(){
    
});

function WinOpenDocWrite(htmDat){
    if(confirm("popup in  window?")){
        $("#FormData").val(htmDat);
        $("#FormTestID").submit();                 
    }else{
        $("#vbibtxt").html( htmDat ) ;
    }

    return;
    
    window.open("wopenee.htm?t="+htmDat,"_blank");
    return;
    
	var w = window.innerWidth;
	var h = window.innerHeight;
	console.log("WinOpenDocWrite w="+w);
	var pars="width="+w+", height="+h;
	var myWindow = window.open("", "MsgWindow", pars);
	var css="<style>body {background-color: black;color: white;width:100%;}</style>";
	myWindow.document.write(css+htmDat);
}
//@CUVs Words 
gMyFunctionsNames.add("next_zi_freq",function (){

    var TargetZi=$("#edit_area").val();
    if(TargetZi.length===0){
        return alert("No input zi");
    }
    var oFreqCalc = new FreqCalc();
    oFreqCalc.SetLanguage("zh");

    var sBookId = $("#selBookId").attr("value");
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(sBookId); 
    
    var iCount=0;
    for ( var key in I) {
        var iIndicator = oBibleBookChapterVerse.FilterKey(key);
        if(0===iIndicator) continue;
        if(2===iIndicator) break;
            
        var sTxt=I[key];
        var idx=sTxt.indexOf(TargetZi);
        var iNext=idx+1;

        var zi=sTxt[iNext];
        if(idx>=0 && iNext<sTxt.length){
            oFreqCalc.calc_zh(zi);
            iCount++;            
        }
    }
    oFreqCalc.sort_freq(); 
    oFreqCalc.toTable();
        
    var sss=sBookId+":"+TargetZi+" next neighbor freq:<hr/>";
    sss+=oFreqCalc.sout+"<br>tot="+iCount;
    
    //$("#vbibtxt").html( sss );
	WinOpenDocWrite(sss);
});
//@CUVs Words 
gMyFunctionsNames.add("GenNamesMarks_Data",function (){
    var sss="GenNamesMarks_Data: locate the position in CUVs test for names of persons or places.<hr/>";
    var iCount=0;
    for ( var key in I) {
        var sTxt=I[key];
        var oNamesFinder=new NamesFinder();
        oNamesFinder.setNamesMark({txt:sTxt, person:true, place:true});
        if(oNamesFinder.PosRangeArr.length>0){
            sss+=oNamesFinder.makeline(key);
            iCount++;
            
        }
    }
    sss+="<br>tot="+iCount;
    //$("#vbibtxt").html( sss );
	WinOpenDocWrite(sss);
});
//@CUVs  
gMyFunctionsNames.add("Statistics_PersonOrPlaceNamesUsagesRate",function (){
    var oNameUsages=new NameUsages();
    oNameUsages.GenNamesUsagesOf(NamesOfPersons);
    var sss="NamesOfPersons<br>"+oNameUsages.GenNameUsagesTable();
    
    oNameUsages=new NameUsages();
    oNameUsages.GenNamesUsagesOf(NamesOfPlaces);
    sss+="NamesOfPlaces<br>"+oNameUsages.GenNameUsagesTable();
    //$("#vbibtxt").html( sss );
	WinOpenDocWrite(sss);
});




var NameUsages=function(){
    this.Freq_Name_Arr=[];
}
NameUsages.prototype.GetUsageOfName=function (name){
    var iCount=0;
    for ( var key in I) {
        if(I[key].indexOf(name,0)>=0) {
            iCount++;
        }
    }
    return iCount;
}
NameUsages.prototype.GenNamesUsagesOf=function (NamesArr){
    var personFreqArr=[];
    for ( var key in NamesArr) {
        var name=NamesArr[key];
        var usge=""+this.GetUsageOfName(name);
        while(usge.length<5) {usge="0"+usge;}
        this.Freq_Name_Arr.push(usge+"_"+name);
    }
}
NameUsages.prototype.GenNameUsagesTable=function (){    
    this.Freq_Name_Arr.sort().reverse();
    var sss="<table border='1'><tr><td>#</td><td>name</td><td>frq</td></tr>";
    for ( var key in this.Freq_Name_Arr) {
        var str=this.Freq_Name_Arr[key];
        var arr=str.split("_");
        sss+="<tr><td>"+key+"</td><td>"+arr[1]+"</td><td>"+parseInt(arr[0],10)+"</td></tr>";
    }
    sss+="</table>";
    return sss;
}











//@CUVs Words 
gMyFunctionsNames.add("Statistics_BookSize",function(){
	if(!confirm("Statistics_BookSize?")) return;
    var sBible  = MyCookies.Get("selMainBible");
	
	var BookSize={};
	
	var Bible = GetCurBible();
    for ( key in Bible) {
		var bookid=key.replace(/[0-9]+[_][0-9]+$/g, '');//match(/(^_[a-zA-Z0-9]{3}_)_[0-9]{1,}/);
		console.log(bookid);
		if( bookid in BookSize ){
			BookSize[bookid] += Bible[key].length;
		}
		else{
			BookSize[bookid]=Bible[key].length;
		}
    }
	
    
    var ss=sBible+" size list<br/>";
    var css="<style>.barSize{background-color:red;height: 16px;}</style>\r";
	var s=css+"<table border='1'><tr><td>#</td><td>Book</td><td>StrLen</td></tr>\r";
	var i=0;
	for ( bookid in BookSize) {
		i++;
		var size=BookSize[bookid];
        var barlen=Math.floor(size/300);
		var bar="<div class='barSize' style='width:"+barlen+"px;'>"+size+"</div>";
		s+="<tr><td>"+i+"</td><td>"+bookid+"</td><td>"+bar+"</td></tr>\r";
	}
    s+="</table>";


	var txt = ss + s ;
    //$("#vbibtxt").html( txt ) ;
	WinOpenDocWrite( txt );
});
//@CUVs Words 
gMyFunctionsNames.add("Statistics_ChapterVerses",function(){
	alert("Statistics_ChapterVerses");
    var sBible  = MyCookies.Get("selMainBible");
    var sBookId = $("#selBookId").attr("value");
    var oFreqCalc = new FreqCalc();
   
    oFreqCalc.SetLanguage("eng");
	var Bible = GetCurBible();
    for ( key in Bible) {
		var chaptr=key.replace(/[_][0-9]+$/g, '');//match(/(^_[a-zA-Z0-9]{3}_)_[0-9]{1,}/);
		console.log(chaptr);
        oFreqCalc.calc_count(chaptr); 
    }
    
    //oFreqCalc.sort_freq();
	
    
    var ss=sBible+","+oFreqCalc.calc_count_show();
    ss+="<br>Tot Words="+oFreqCalc.TotWords;
    ss+="<br>Tot verses="+oFreqCalc.NumOfCalc;

	var txt = ss+oFreqCalc.sout ;
//	+ Statistics_WordsFreq_NamesOfPersonsPlaces_zh()+List_NamesOfPersonsPlaces_zh() 
    //$("#vbibtxt").html( txt ) ;
	WinOpenDocWrite( txt );
	
});
//@CUVs Words 
gMyFunctionsNames.add("Statistics_BibleWordsFreq",function(){
    var sBible  = MyCookies.Get("selMainBible");
    var sBookId = $("#selBookId").attr("value");
    var oFreqCalc = new FreqCalc();
    var oFreqCalc2 = new FreqCalc();
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(sBookId); 
    
    console.log("sBible="+sBible+","+"sBookId="+sBookId);
    
    //alert(sBible);
    if("CUVs"===sBible){
        oFreqCalc.SetLanguage("zh");
        oFreqCalc2.SetLanguage("zh");
        for ( key in I) {
            var iIndicator = oBibleBookChapterVerse.FilterKey(key);
            if(0===iIndicator) continue;
            if(2===iIndicator) break;
            //if( key.indexOf(sBookId)>=0) {
            var Txt=I[key];
            oFreqCalc.calc_zh(Txt);
            
            var Txt2=Txt;
            for(var i=0;i<NamesOfPersons.length;i++){
                Txt2 = Txt2.replace(NamesOfPersons[i],"");
            }
            for(var i=0;i<NamesOfPlaces.length;i++){
                Txt2 = Txt2.replace(NamesOfPlaces[i],"");
            }
            oFreqCalc2.calc_zh(Txt2);
            //}
        }
        
        
        oFreqCalc.sort_freq();
        oFreqCalc2.sort_freq();
        
        oFreqCalc2.toTable();//for data withoutTbi
        oFreqCalc.toTableJoin(oFreqCalc2.sortedStrnArr);
        
        var ss=sBible+","+gBookChapterVerse.getBookFullName(sBookId);
        ss+="<br>Tot Words="+oFreqCalc.TotWords;
        ss+="<br>Tot verses="+oFreqCalc.NumOfCalc;
        ss+="<br>Tot2 Words(Exclude Place/Persopn Names)="+oFreqCalc2.TotWords;
        ss+="<br>Tot2 verses="+oFreqCalc2.NumOfCalc;
        var txt = ss+oFreqCalc.sout + oFreqCalc2.ZhiWithoutTbi_show();;
    //	+ Statistics_WordsFreq_NamesOfPersonsPlaces_zh()+List_NamesOfPersonsPlaces_zh() 
        //$("#vbibtxt").html( ) ;
        WinOpenDocWrite( txt );        
        
    }
    else{
        console.log("sBible="+sBible);
        oFreqCalc.SetLanguage("eng");
        var Bible = GetCurBible();
        for ( key in Bible) {
            var iIndicator = oBibleBookChapterVerse.FilterKey(key);
            if(0===iIndicator) continue;
            if(2===iIndicator) break;
            //if( key.indexOf(sBookId)>=0) {
            oFreqCalc.calc_English(Bible[key]);
            //}
        }
        oFreqCalc.sort_freq();
        
        var ss=sBible+","+gBookChapterVerse.getBookFullName(sBookId);
        ss+="<br>Tot Words="+oFreqCalc.TotWords;
        ss+="<br>Tot verses="+oFreqCalc.NumOfCalc;
        oFreqCalc.toTable();
        var txt = ss+oFreqCalc.sout ;
        txt += "<hr/>"+oFreqCalc.calc_English_CapitalFirstWords_table();
        

        WinOpenDocWrite( txt );        
    }

	
});


//@CUVs Words 
gMyFunctionsNames.add("Statistics_UnsedZhi",function(){
    var sBible  = MyCookies.Get("selMainBible");
    var sBookId = $("#selBookId").attr("value");
    var oFreqCalc = new FreqCalc();
    var oFreqCalc2 = new FreqCalc();
    var oBibleBookChapterVerse=new BibleBookChapterVerse();
    oBibleBookChapterVerse.SetBookId(sBookId);
    if( !confirm(sBookId+" ?")){ return; }
    
	
	var BooksUsedFrq={};

    //alert(sBible);
    if("CUVs"===sBible){
        oFreqCalc.SetLanguage("zh");
        oFreqCalc2.SetLanguage("zh");
        for ( key in I) {
            var Txt=I[key];
            oFreqCalc.calc_zh(Txt);
            var iIndicator = oBibleBookChapterVerse.FilterKey(key);
            if(0===iIndicator) continue;
            if(2===iIndicator) continue;
            //if( key.indexOf(sBookId)>=0) {
            
            var Txt2=Txt;
            for(var i=0;i<NamesOfPersons.length;i++){
                Txt2 = Txt2.replace(NamesOfPersons[i],"");
            }
            for(var i=0;i<NamesOfPlaces.length;i++){
                Txt2 = Txt2.replace(NamesOfPlaces[i],"");
            }
            oFreqCalc2.calc_zh(Txt2);
			
			
			
			/////////////////
			//for each individual book.
			var bookid = key.substr(0,4);
			
			if( bookid in BooksUsedFrq ){
			}
			else{
				BooksUsedFrq[bookid] = new FreqCalc();
			}
			
			BooksUsedFrq[bookid].calc_zh( Txt2 );
        }
    }
    else{
		return alert("not chinese");
    }
	
	
	var tt="<table border='1'>"
	var i=0;
	for( bookid in BooksUsedFrq){
		i++;
		var size = BooksUsedFrq[bookid].IndexCodeArr.length;
		var ai="<div style='background-color:red; width:"+(size/2)+"px;' >" + i + "</div>";
		tt+="<tr><td>"+ai+"</td><td>"+bookid+"</td><td>"+size +"</td></tr>";
	}
	tt+="</table>";
	
	// 
	
	var CommonCharCodesArr=[];
	for(var idx in oFreqCalc2.IndexCodeArr ){
		var ccod=oFreqCalc2.IndexCodeArr[idx];
		var i=0, ifind=0;
		for( bookid in BooksUsedFrq){
			i++;
			ifind = BooksUsedFrq[bookid].IndexCodeArr.indexOf(ccod);
			if(ifind<0) break;
		}
		if(ifind>=0){
			CommonCharCodesArr.push(ccod);
		}		
	}
	tt+="<br/>CommonCharCodesArr size="+CommonCharCodesArr.length;
	
	for(var idx in CommonCharCodesArr){
		var ccd=CommonCharCodesArr[idx];
		tt+="<br/>"+ccd+"&#"+ccd+";";
	}
	tt+="<br/>";
	
	//Unused words list
	
	var UnsuedCharCodesArr=[];
	for(var idx in oFreqCalc.IndexCodeArr ){
		var ccod=oFreqCalc.IndexCodeArr[idx];
		var i=0, ifind=-1;
		for( bookid in BooksUsedFrq){
			i++;
			ifind = BooksUsedFrq[bookid].IndexCodeArr.indexOf(ccod);
			if(ifind>=0) break;
		}
		if(ifind>=0){
			//CommonCharCodesArr.push(ccod);
		}
		else{
			UnsuedCharCodesArr.push(ccod);
		}	
	}
	tt+="<br/>UnsuedCharCodesArr size="+UnsuedCharCodesArr.length;
	
	for(var idx in UnsuedCharCodesArr){
		var ccd=UnsuedCharCodesArr[idx];
		tt+="<br/>"+ccd+"&#"+ccd+";";
	}
	tt+="<br/>";
	
	

    
    var ss=sBible+","+gBookChapterVerse.getBookFullName(sBookId);
    ss+="<br>Tot Words="+oFreqCalc.TotWords;
    ss+="<br>Tot individual="+oFreqCalc.IndexCodeArr.length;
	ss+="<br>Tot verses="+oFreqCalc.NumOfCalc;
    ss+="<br>Tot2 Words(exclude names)="+oFreqCalc2.TotWords;
    ss+="<br>Tot2 individual="+oFreqCalc2.IndexCodeArr.length;
	ss+="<br>Tot2 verses="+oFreqCalc2.NumOfCalc;
	var txt = ss+"<ht/>" + tt;
//	+ Statistics_WordsFreq_NamesOfPersonsPlaces_zh()+List_NamesOfPersonsPlaces_zh() 
    //$("#vbibtxt").html( txt ) ;
	WinOpenDocWrite( txt );
	
});


var FreqCalc=function(){
   this.IndexCodeArr=[];
   this.UFchcodDatArr=[];
   this.sortedStrnArr=[];
   this.sout="";
   this.TotWords=0;
   this.NumOfCalc=0;
  
   this.htmlcodeStart="&#";
   this.htmlcodeEnd=";";
   
   this.ZhiWithoutTbi=[];
}
FreqCalc.prototype.SetLanguage=function(sLang){
    if("zh"===sLang){
        this.htmlcodeStart="&#";
        this.htmlcodeEnd=";";
    }
    else{
        this.htmlcodeStart="";
        this.htmlcodeEnd="";
    }
}
FreqCalc.prototype.get=function(ccod){
    this.NumOfCalc++;
    for( var i=0; i<this.UFchcodDatArr; i+=1) {
        var cc = sTxt[i];
        var chcod = cc.charCodeAt(0);
        //if(chcod<10000) continue;
        if(chcod < 19968 || chcod > 65110 ){
            continue;
        }
        var idx = this.IndexCodeArr.indexOf(chcod);
        if(idx<0){
            idx=this.IndexCodeArr.length;//get last index for the size of array.
            this.IndexCodeArr[idx]=chcod;
            this.UFchcodDatArr[idx]={key:chcod, RFrq:0};
        }
        this.UFchcodDatArr[idx].RFrq += 1;
        this.TotWords++;
                    
        //alert( cc + "=" + chcod );
    }
};
FreqCalc.prototype.calc_zh=function(sTxt){
    this.NumOfCalc++;
    for( var i=0; i<sTxt.length; i+=1) {
        var cc = sTxt[i];
        var chcod = cc.charCodeAt(0);
        //if(chcod<10000) continue;
        if(chcod < 19968 || chcod > 65110 ){
            continue;
        }
        var idx = this.IndexCodeArr.indexOf(chcod);
        if(idx<0){
            idx=this.IndexCodeArr.length;//get last index for the size of array.
            this.IndexCodeArr[idx]=chcod;
            this.UFchcodDatArr[idx]={key:chcod, RFrq:0};
        }
        this.UFchcodDatArr[idx].RFrq += 1;
        this.TotWords++;
                    
        //alert( cc + "=" + chcod );
    }
};
FreqCalc.prototype.calc_English=function(sTxt){
    this.NumOfCalc++;
    //sTxt = sTxt.toLowerCase(); 
    sTxt=sTxt.replace("--", " ");
    sTxt=sTxt.replace(" -", " ");
    sTxt=sTxt.replace("- ", " ");
    var arr = sTxt.split(/[\s|\,|\.|\:|\;|\(|\)|\?|\!|\<|\>|\[|\]|\'|\"]/g);
    for( var i=0; i<arr.length; i+=1) {
        var sword = arr[i];
        sword=$.trim(sword);
        sword=sword.replace(/^\-+|\-+$/gm,'');
        if($.isNumeric( sword )) continue;
        if(sword.length===0) continue;
		
		///////////////calc_check()//////
        var idx = this.IndexCodeArr.indexOf(sword);
        if(idx<0){
            idx=this.IndexCodeArr.length;//get last index for the size of array.
            this.IndexCodeArr[idx]=sword;
            this.UFchcodDatArr[idx]={key:sword, RFrq:0};
        }
        this.UFchcodDatArr[idx].RFrq += 1;
        this.TotWords++;
                    
        //alert( cc + "=" + chcod );
    }
};
FreqCalc.prototype.calc_English_CapitalFirstWords_table=function(){
    var CapNames=[];
    for( var i=0; i<this.UFchcodDatArr.length; i+=1) {
        var obj = this.UFchcodDatArr[i];
        var sword=obj.key;
        if($.isNumeric( sword )) continue;
        if( sword.length<=1 ) continue;
        var firstLetterCode=sword.charCodeAt(0);
        if(firstLetterCode>=65 && firstLetterCode<=90){
            CapNames.push(sword);
        }
    }
    
    CapNames.sort();
    //
    var ss="<table border='1'><caption>calc_English_CapitalFirstWords_table</caption>";
    for(var i=0;i<CapNames.length; i++){
        ss+="<tr><td>"+i+"</td><td>"+CapNames[i]+"</td></tr>";
    }
    ss+="</table>";
    return ss;
};
FreqCalc.prototype.calc_count=function(sword){
    this.NumOfCalc++;
    if(sword.length===0) return;
    var idx = this.IndexCodeArr.indexOf(sword);
    if(idx<0){
        idx=this.IndexCodeArr.length;//get last index for the size of array.
        this.IndexCodeArr[idx]=sword;
        this.UFchcodDatArr[idx]={key:sword, RFrq:0};
    }
    this.UFchcodDatArr[idx].RFrq += 1;
    this.TotWords++;
                
    //alert( cc + "=" + chcod );
};
FreqCalc.prototype.calc_count_show=function(){
    var Size = this.IndexCodeArr.length;
	var tab="<table border='1'>"
	for(var idx=0; idx<Size;idx++){
		var key=this.UFchcodDatArr[idx]['key'];
		var frq=this.UFchcodDatArr[idx]['RFrq'];
		
		tab+="<tr><td>"+idx+"</td><td>"+key+"</td><td>"+frq+"</td></tr>";
		
	}
	tab+="</table>";                
    return tab;
};
FreqCalc.prototype.str_form_freq_code=function(freq,ccod){
		freq=''+freq;
        while(freq.length<10){
            freq="0"+freq;
        }        
        freq+= "_"+ccod;
		return freq;
}
FreqCalc.prototype.sort_freq=function(){
    for(var idx in this.UFchcodDatArr){
        var freq = ""+this.UFchcodDatArr[idx].RFrq;               
        var ccod = this.UFchcodDatArr[idx].key;
        
        while(freq.length<10){
            freq="0"+freq;
        }        
        var str=this.str_form_freq_code(freq, ccod);//freq+"_"+ccod;
        this.sortedStrnArr.push(str);
    }
    this.sortedStrnArr.sort();//
    this.sortedStrnArr.reverse(); 
}

FreqCalc.prototype.show_table=function(){
    this.sout="<tr><td>#</td><td>code</td><td>tbi</td><td>word</td><td>freq</td></tr>";
    for(var idx in this.sortedStrnArr){
   
        this.sout+="<tr>";
        this.sout+=this.toTDs2(idx, this.sortedStrnArr[idx]);
        this.sout+="</tr>"; 
    }
    
    this.sout = "<table border='1' class='versTxt'>" + this.sout + "</table>";
    this.sout+="<br>TotWords="+this.TotWords;
    this.sout+="<br>NumOfCalc="+this.NumOfCalc;
}

FreqCalc.prototype.toTable=function(){
    this.sout="<tr><td>#</td><td>code</td><td>tbi</td><td>word</td><td>freq</td></tr>";
    for(var idx in this.sortedStrnArr){
   
        this.sout+="<tr>";
        this.sout+=this.toTDs(idx, this.sortedStrnArr[idx]);
        this.sout+="</tr>"; 
    }
    
    this.sout = "<table border='1' class='versTxt'>" + this.sout + "</table>";
    this.sout+="<br>TotWords="+this.TotWords;
    this.sout+="<br>NumOfCalc="+this.NumOfCalc;
}

FreqCalc.prototype.toTableJoin=function(sorted2){
    this.sout="<tr><td>#</td><td>code</td><td>tbi</td><td>word</td><td>freq</td></tr>";
    for(var idx=0; idx< (this.sortedStrnArr.length || idx<sorted2.length); idx++){
        var sortedStrn1="";
        if(idx< (this.sortedStrnArr.length)){
            sortedStrn1 = this.sortedStrnArr[idx];
        }
        var sortedStrn2="";
        if(idx< (sorted2.length)){
            sortedStrn2 = sorted2[idx];
        }
        
        this.sout+="<tr>";
        this.sout+=this.toTDs(idx, sortedStrn1);
        this.sout+=this.toTDs(idx, sortedStrn2);
        this.sout+="</tr>"; 
    }
    
    this.sout = "<table border='1' class='versTxt'>" + this.sout + "</table>";
    this.sout+="<br>TotWords="+this.TotWords;
    this.sout+="<br>NumOfCalc="+this.NumOfCalc;
}
FreqCalc.prototype.toTDs2=function(idx, sortedstrn){
    var arr = sortedstrn.split(/[_]/g);
	var sout="<td>"+idx+"</td>";
	for(var i=0;i<arr.length;i++){
		sout+="<td>"+arr[i]+"</td>";
	}
    return sout;	
}
FreqCalc.prototype.toTDs=function(idx, sortedstrn){
    var arr = sortedstrn.split(/[_]/g);
    var freq = arr[0];              
    var ccod = arr[1];

    var cch = String.fromCharCode( ccod );// this.htmlcodeStart+ccod+this.htmlcodeEnd;
    var tbi = z2g_translate2jiaguwen( cch );
    
    if(tbi.length<3){//no tbi found.
        this.ZhiWithoutTbi.push("_"+ccod+"=',',//"+cch);
        //console.log("tbi:"+tbi+tbi.length+","+this.ZhiWithoutTbi.length);
    }
    
    
    var sout="";
    sout+="<td>"+idx+"</td>";
    sout+="<td>"+ccod+"</td>";
    sout+="<td>"+tbi+"</td>";
    sout+="<td>"+cch+"</td>";
    sout+="<td>"+parseInt(freq,10)+"</td>";
    return sout;
}
FreqCalc.prototype.ZhiWithoutTbi_show=function(){
    console.log("ZhiWithoutTbi:"+this.ZhiWithoutTbi.length);
    var sss="<hr/>ZhiWithoutTbi<br/>";
    for(var i=0;i<this.ZhiWithoutTbi.length;i++){
        sss+="Z."+this.ZhiWithoutTbi[i]+"<br/>";
    }
    sss+="<hr/>";
    return sss;
}





gMyFunctionsNames.add("Statistics_FreqOfWordsInNamesOfPersonsPlaces_zh",function(){
	WinOpenDocWrite( Statistics_Freq_NamesOfPersonsPlaces_zh() );
});
function Statistics_Freq_NamesOfPersonsPlaces_zh(){
	console.log("Statistics_Freq_NamesOfPersonsPlaces_zh");
    var oFreqCalc = new FreqCalc();
    oFreqCalc.SetLanguage("zh");

    for ( key in NamesOfPersons) {
        var Txt=NamesOfPersons[key];
        oFreqCalc.calc_zh(Txt);
    }
    for ( key in NamesOfPlaces) {
        var Txt=NamesOfPlaces[key];
        oFreqCalc.calc_zh(Txt);
    }

    oFreqCalc.sort_freq();
    oFreqCalc.toTable();
 
    var ss="<hr/>";
    ss+="<br>Tot Words="+oFreqCalc.TotWords;
    ss+="<br>Tot verses="+oFreqCalc.NumOfCalc;

    return( ss+oFreqCalc.sout ) ;
}

gMyFunctionsNames.add("List_NamesOfPersonsPlaces_zh",function(){
	WinOpenDocWrite( List_NamesOfPersonsPlaces_zh() );
});
function List_NamesOfPersonsPlaces_zh(){
	console.log("List_NamesOfPersonsPlaces_zh");
    var Txt="<hr/>NamesOfPersons<hr/>";
    for ( key in NamesOfPersons) {
        Txt+=key+":"+NamesOfPersons[key]+"<br/>";
    }
    Txt +="<hr/>NamesOfPlaces<hr/>";
    for ( key in NamesOfPlaces) {
        Txt+=key+":"+NamesOfPlaces[key]+"<br/>";
    }

    return( Txt ) ;
}



////donotwork
gMyFunctionsNames.add("test_SayingsIdArr",function (){
    var str="SayingsIdArr<hr/>";
    var iTot=0;

    for (var i in SayingsIdArr ) {
		str+="<hr/>";
		for(var k in SayingsIdArr[i]){
			str+=k+" : "+SayingsIdArr[i][k]+",<br>";
			iTot++;
		}                
    }
	str+="<hr/>iTot="+iTot;
    //alert(i);
    //$("#vbibtxt").html( str ) ;
	WinOpenDocWrite( str );
});



gMyFunctionsNames.add("HisSayings_CountInBooks",function(){
    var Txt="<hr/>HisSayings_CountInBooks<hr/><table border='1'><tr><td>BookNames</td><td>#ofHisSayings</td><td>#ofVerses</td><td>%</td></tr>";
	var BookNames=["Mathew","Mark","Luke","John","Acts"];
	var TotVserses=[1071,678,1151,878,1007];
	var TotCountHisSayings=0;
	var TotCountVerses=0;
    for ( i in BookNames) {
		TotCountHisSayings+=SayingsIdArr[i].length;
		TotCountVerses+=TotVserses[i];
		var percet=100*SayingsIdArr[i].length / TotVserses[i];
		percet=""+percet;
		percet=percet.substring(0,4);
        Txt+="<tr><td>"+BookNames[i]+"</td><td>"+SayingsIdArr[i].length+"</td><td>"+TotVserses[i]+"</td><td>"+percet+"</td></tr>";
    }
	Txt +="<tr><td>TotalCount</td><td>"+TotCountHisSayings+"</td><td>"+TotCountVerses+"</td></tr>";
    Txt +="</table>";


	//$("#vbibtxt").html( Txt ) ;
	WinOpenDocWrite(Txt);
    //return( Txt ) ;
});


//GetPyOf
gMyFunctionsNames.add("TBI_Zhi_Py",function(){
    var Txt="<hr/>HisSayings_CountInBooks<hr/><table border='1'><tr><td>BookNames</td><td>#ofHisSayings</td><td>#ofVerses</td><td>%</td></tr>";
	var BookNames=["Mathew","Mark","Luke","John","Acts"];
	var TotVserses=[1071,678,1151,878,1007];
	var TotCountHisSayings=0;
	var TotCountVerses=0;
	
    for ( i in BookNames) {
		TotCountHisSayings+=SayingsIdArr[i].length;
		TotCountVerses+=TotVserses[i];
		var percet=100*SayingsIdArr[i].length / TotVserses[i];
        Txt+="<tr><td>"+BookNames[i]+"</td><td>"+SayingsIdArr[i].length+"</td><td>"+TotVserses[i]+"</td><td>"+percet+"</td></tr>";
    }
	
	
	Txt +="<tr><td>TotalCount</td><td>"+TotCountHisSayings+"</td><td>"+TotCountVerses+"</td></tr>";
    Txt +="</table>";


	//$("#vbibtxt").html( Txt ) ;
	WinOpenDocWrite(Txt);
    //return( Txt ) ;
});


//GetPyOf
gMyFunctionsNames.add("AudioBibleBooksNames",function(){
    var Txt="<hr/>HisSayings_CountInBooks<hr/><table border='1'><tr><td>BookNames</td><td>#ofHisSayings</td><td>#ofVerses</td><td>%</td></tr>\r\n";
	
    for ( key in AudioBibleBooksNameChinese) {
		var nameEn=AudioBibleBooksNameChinese[key][1];
        var nameZh=AudioBibleBooksNameChinese[key][2];
        var totChapters=TotChapterOfBook[key];
        Txt+="<tr><td>"+key+"</td><td>"+totChapters+"</td><td>"+nameEn+"</td><td>"+nameZh+"</td></tr>\r\n";
    }
	
	

    Txt +="</table>";


	$("#vbibtxt").text( Txt ) ;
	WinOpenDocWrite(Txt);
    //return( Txt ) ;
});



var NamesFinder=function(){
    this.PosRangeArr=[];
};
NamesFinder.prototype.setNamesMark=function(parm){
    //{txt:sTxt, person:p1, place:p2}
    var Txt=parm.txt;
    //console.log(Txt);
    if(Txt.length<=0) return;
    if(parm.person){
        for ( key in NamesOfPersons) {
            var name=NamesOfPersons[key];
            var ipos=Txt.indexOf(name,0);
            var ipos2=ipos+name.length;
            while(ipos>=0){
                this.PosRangeArr.push(ipos);
                this.PosRangeArr.push(ipos2);
                ipos=Txt.indexOf(name,ipos2);
                ipos2=ipos+name.length;
                //console.log(name+":"+ipos+","+name.length);
            }
        }
    }
    if(parm.place){
        for ( key in NamesOfPlaces) {
            var name=NamesOfPlaces[key];
            var ipos=Txt.indexOf(name);
            var ipos2=ipos+name.length;
            while(ipos>=0){
                this.PosRangeArr.push(ipos);
                this.PosRangeArr.push(ipos2);
                ipos=Txt.indexOf(name,ipos2);
                ipos2=ipos+name.length;
                //console.log(name+":"+ipos+","+name.length);
            }
        }  
    }
}
NamesFinder.prototype.isInRange=function(idx){

    for ( var i=0; i<this.PosRangeArr.length; i+=2) {
        var pos0=this.PosRangeArr[i];
        var pos2=this.PosRangeArr[i+1];
        if(idx >= pos0 && idx < pos2 ){
            return true;
        }
    }
    return false;
}
NamesFinder.prototype.makeline=function(key){
    var ss="D._"+key+"=[";
    for (var i=0; i<this.PosRangeArr.length; i+=2 ) {
        var pos0=this.PosRangeArr[i];
        var pos2=this.PosRangeArr[i+1];
        ss += pos0 + "," + pos2 + ", ";        
    }
    return ss+"];<br>";
}






////////////test
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}