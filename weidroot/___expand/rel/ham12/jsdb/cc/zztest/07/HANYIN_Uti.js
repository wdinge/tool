//refer to ddr.js
//pinyinx[i] = "pinx, Indxstart, len";

// W PinYinUnicode
// pin y \uxxxx \uyyyy







function pytst(spin, iyin){
    var ary = HANZI.GetSortedList(spin);
    for(var i=0; i<ary.length; i++)
    {
        //IME.TRACEv{i+" "+ary[i]);
    };
}


var INDX_OFFSET =  parseInt("4E00",16);




function getPaddingNum(i,len)
{
	var s0padding = "00000000000" + i;
	var j = s0padding.length - len;
	if(i<0) alert("getPaddingNum:"+j);
	var s = s0padding.substr(j, len);
	return s;
};





var W_UTI={
Src : function (sdir)
{
	for(var i=0;i<2;i++)
	{
		var s = getPaddingNum(i,2);
		
		s = sdir + "W_" + s + ".unicode.js";
		
		s = "<script language=\'javascript' src=\'" +  s;
		s = s + "\'><\/script>";
		document.write(s);
	}
}
};//var W_UTI={
var U_UTI={
Src : function (sdir)
{
	for(var i=0;i<3;i++)
	{
		var s = getPaddingNum(i,2);
		
		s = sdir + "U_" + s + ".js";
		
		s = "<script language=\'javascript' src=\'" +  s;
		s = s + "\'><\/script>";
		document.write(s);
	}
},
GetUsageOfHanzi:function(c)
       {
           var codex = c.charCodeAt(0) - INDX_OFFSET;
           var uc = U[codex];//usage
           if(null == uc ){//put at last.
               return 0;
           }
           var iuc = parseInt(uc,16);
           return iuc;
       }
};//var U_UTI={

var X_UTI={
Src : function (sdir)
		{
			for(var i=0;i<13;i++)
			{
				var s = getPaddingNum(i,2);
				s = sdir + "X_" + s + ".unicode.js";
				
				s = "<script language=\'javascript' src=\'" +  s;
				s = s + "\'><\/script>";
				//alert(s);
				document.write(s);
			}
		},
GetLinkedListHz : function (charCode)
       {
           var idx = charCode - INDX_OFFSET;//=parseInt("4E00",16);//offset
           if(idx<0) return "";
           var sRet="";
           if(X[idx]==null) return "";
           for(var i=1;i<X[idx].length;i++){
               sRet+= X[idx].charAt (i);
           }
           return sRet;
       }






};//var X_UTI={









function d2h(d) {return d.toString(16);} //intger to hex
function h2d(h) {return parseInt(h,16);} //hex to intger






//Depend on pin usage in pinyin.
var PIN_SEL_CODE={
       //
       // pinyin letter properties
       // 
       
       //Following letters are only used on the first in pinyin. (First Only Letters)
       //So they are used as selection id.
       //They are ordered by accessibility. 
       //FOLCODE : "FDSWCBTJKLMPYQXZ";
       // 

       FOLCODE   : "FDSWTCBJKLMPYQXZ", 
Init : function()
{
    
    this.SelCodeStr="FDSWTCBJKLMPYQXZ";
 
    this.SelcodesToId = new Array();
    this.IdToSelcodes = new Array();
    var id=0;
    for(var s1=0; s1 < this.FOLCODE.length; s1++)
    {
        for(var s2=0; s2 < this.FOLCODE.length; s2++)
        {
            var selcode = this.FOLCODE.charAt(s1) + this.FOLCODE.charAt(s2);
            selcode = selcode.toLowerCase ();
            this.SelcodesToId[selcode] = id;
            this.IdToSelcodes[id]      = selcode;



            id++;
        }
    }


},
IsSelCode : function (scode)
{

       var s = String.fromCharCode(scode);
       DBG.TRACE("SelCodeStris:"+this.SelCodeStr+","+s);

       s = s.toUpperCase();
       if (this.SelCodeStr.indexOf(s)>=0) return true;

       s = s.toLowerCase();
       if (this.SelCodeStr.indexOf(s)>=0) return true;

       return false;
},
GetElemIdFromSelCodes : function (SelCodes)
{
    SelCodes = SelCodes.toLowerCase ();
    return this.SelcodesToId[SelCodes];
},
GetSelCodesFromElemId : function (id )
{
    var selcode = this.IdToSelcodes[id];
    if(null == selcode) return "-";
    selcode = selcode.toLowerCase();
    return selcode;
},

GenSelCodeStr : function (sEnglish)
{
},


test:function()
{
}
}/////var ENG_SEL_CODE






var HANZI = {

Init : function ()
       { 
           this.iYin = 0;
           PIN_SEL_CODE.Init();
       },
           //public: get 1st idx of pinyin. for tone1 it may have another one convert from 5.
SearchIndxByPinYin : function(spin, iyin)
       {
           if(spin == null || spin == "" || spin == " ") return -1;

           var i=-1;
           var spy = spin;
           if( iyin >=1 && iyin <=5 )
           {
               spy = spin + iyin;

               for( i=0; i<W.length; i++ )
               {
                   var ifind = W[i].search( spy );
                   if( ifind == 0 )
                   {            
                       return i;
                   }
               }
           }
           else
           {
               //wild search
               for( i=0; i<W.length; i++ )
               {
                   for(var k=1; k<=5; k++)
                   {
                       spy = spin + k;
                       var ifind = W[i].search( spy );

                       if( ifind == 0 )
                       {            
                           return i;
                       }
                   }
               }
           };
           return i;
       },   

           //public
SetYin : function (iyin)
       {
           this.iYin = iyin;
       },
           //public
SetYinUp : function ()
       {
           this.iYin ++;

           if( this.iYin==6)
           {
               this.iYin=0;
           }
       },
GetYin : function ()
       {
           return this.iYin;
       },
GetYinInStr : function()
       {
           var VOICE_TONE = new Array();   //1,2,3,4.
           VOICE_TONE[0] = " +";
           VOICE_TONE[1] = " -";
           VOICE_TONE[2] = " /";
           VOICE_TONE[3] = " v";
           VOICE_TONE[4] = " \\";
           VOICE_TONE[5] = " _";
           return VOICE_TONE[this.iYin];
       },
isFolCode : function (scode)
       {
           return PIN_SEL_CODE.IsSelCode(scode);
       },
GetElemIdFromSelCodes : function (SelCodes)
{
    return PIN_SEL_CODE.GetElemIdFromSelCodes(SelCodes);
},
GetSelCodesFromElemId : function (ElmId )
{
    return PIN_SEL_CODE.GetSelCodesFromElemId(ElmId);
},
           //public:
           //the yin(voice tone) need to be set before call it.
           //The default yin is 0(mix of all form 1 to 5))
GetListOfPin : function (spin)
       {
           return this.GetList(spin, this.iYin);
       },

           //public: get char list of pinyin.
GetList:function(spin, iyin)
       {   
           this.HzList = "";
           //this.UsageList = new Array();


           var iIdx = this.SearchIndxByPinYin( spin, iyin );
           if( iIdx < 0 ) return "";
           var i;
           var n = 0;

           var spy = spin;
           if( iyin >=1 && iyin <=5 )
           {
               spy = spin + iyin;

               for( i = iIdx; i < iIdx + 5; i++)
               {
                   if(i>=W.length) break;
                   if( W[i].search( spy ) != 0 ) continue;

                   this.AddPinyinList2UsageOrderedHzList(W[i]);
               }
           }    
           else
           {
               for( i = iIdx; i < iIdx + 5; i++)
               {
                   if(i>=W.length) break;
                   for(var k=1; k<=5; k++)
                   {
                       spy = spin + k;

                       if( W[i].search( spy ) != 0 ) continue;

                       this.AddPinyinList2UsageOrderedHzList(W[i]);

                   }
               }    
           }
           //for(i = 0; i<this.HzList.length; i++){
           //    this.UsageList[i] = parseInt(U[this.HzList.charCodeAt(i)-INDX_OFFSET],16);
           //}
           return this.HzList; 
       } ,
AddPinyinList2UsageOrderedHzList:function(PinyinHz)
       {
           var tmplst = PinyinHz.split(" ");
           if( tmplst.length < 1 ) return;
           var ws = tmplst[1];
           for(var i=0;i<ws.length; i++){
               this.AddHz2UsageOrderedHzList(ws.charAt(i));
           };
       },

AddHz2UsageOrderedHzList:function(c)
       {
           if( this.HzList.length==0){
               this.HzList = c;
               return;
           };
           if(this.HzList.search(c)>=0){//already exist.
               return;
           };

           var iuc = U_UTI.GetUsageOfHanzi(c);

           var i=0;
           for(i=0;i<this.HzList.length;i++){
               var cz = this.HzList.charAt(i);
               var iusage = U_UTI.GetUsageOfHanzi(cz);

               if(iuc > iusage){
                   break;
               };
           }      
           if( 0==i){//put it in first.
               this.HzList = c + this.HzList;
               return;
           };

           var s1 = this.HzList.substr(0,i);
           var s2 = this.HzList.substr(i,this.HzList.length);
           this.HzList = s1 + c + s2;
       }
       ,
GetCount:function()
       {
           var nTotHz = 0; 
           var i=0;
           for(i=0; i < W.length; i++)
           {
               var lst = W[i].split(" ");
               if( lst && lst.length >= 2 ){
                   nTotHz += lst[1].length;   
               }
           };
           return nTotHz;
       }
};






/////////////////////////////////////////
//keyCod = window.event.keyCode;
function GetChineseChar(keyCod, bKeyShiftIsDown)
{
    //var ch = String.fromCharCode(27492);
    //Trace("KeyEventHandler.KeyDownCode=" + KeyEventHandler.KeyDownCode);

    if( bKeyShiftIsDown )//shift is down.
    {
        switch(keyCod) {
            case 192: return String.fromCharCode(65374); //chinese `~ 

            case  48: return String.fromCharCode(65289  );//0 )
            case  49: return String.fromCharCode(65281  );//1 !
            case  50: return String.fromCharCode(65312  );//2 @
            case  51: return String.fromCharCode(65283  );//3 # 
            case  52: return String.fromCharCode(65284  );//4 $
            case  53: return String.fromCharCode(65285  );//5 %
            case  54: return String.fromCharCode(65342  );//6 ^
            case  55: return String.fromCharCode(65286  );//7 &
            case  56: return String.fromCharCode(65290  );//8 *
            case  57: return String.fromCharCode(65288  );//9 (

            case 187: return String.fromCharCode(65291);   //chinese +=
            case 189: return String.fromCharCode(65343);   //chinese -_


            case 219: return String.fromCharCode(65371); //chinese  [{
            case 221: return String.fromCharCode(65373); //chinese  ]}
            case 220: return String.fromCharCode(65372); //chinese  \|


            case 186: return String.fromCharCode(65306); //chinese : ;
            case 222: return String.fromCharCode(65282); //chinese " '



            case 188: return String.fromCharCode(65308); //chinese ,<
            case 190: return String.fromCharCode(65310); //chinese .>
            case 191: return String.fromCharCode(65311); //chinese ? /



        };
        keyCod+=1;
        if( (keyCod >= 48) && (keyCod <= 58) ) {
            return String.fromCharCode( keyCod );
        }            
    }
    else
    {
        switch(keyCod) {

            case 192: return String.fromCharCode(65344); //chinese `~ 65344 65374

            case  48: return String.fromCharCode(65296);//0 (
            case  49: return String.fromCharCode(65297);//1 !
            case  50: return String.fromCharCode(65298);//2 @
            case  51: return String.fromCharCode(65299);//3 # 
            case  52: return String.fromCharCode(65300);//4 $
            case  53: return String.fromCharCode(65301);//5 %
            case  54: return String.fromCharCode(65302);//6 ^
            case  55: return String.fromCharCode(65303);//7 &
            case  56: return String.fromCharCode(65304);//8 *
            case  57: return String.fromCharCode(65305);//9 )

            case 187: return String.fromCharCode(65309); //chinese +=
            case 189: return String.fromCharCode(65293); //chinese -_


            case 219: return String.fromCharCode(65339); //chinese 65339  65371 [{
            case 221: return String.fromCharCode(65341); //chinese 65339  65373 ]}
            case 220: return String.fromCharCode(65340); //chinese 65340  \|

            case 186: return String.fromCharCode(65307); //chinese ;:
            case 222: return String.fromCharCode(65287); //chinese ' "

            case 188: return String.fromCharCode(65292); //chinese ,<
            case 190: return String.fromCharCode(12290); //chinese .>
            case 191: return String.fromCharCode(65295); //chinese ?/


        };
        if( (keyCod >= 48) && (keyCod <= 58) ) {//0---9
            return String.fromCharCode( keyCod );
        }    
    }

    return null//recommend to be "";
}
