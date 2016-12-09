//refer to 7kpy_xx.js and xl_00.js
//pinyinx[i] = "pinx, Indxstart, len";


function GetAll()
{
    var i=0;
    var TotChineseChar=0;
    var s = "";
    for (key in Y) {
        i+=1;
        s+= i + " : " + key + "=" + Y[key] + "<br>\n";
        TotChineseChar+= Y[key].length;
    }
    return s;
}
function GetTot()
{
    var TotChineseChar=0;
    var s = "";
    for (key in Y) {
        TotChineseChar+= Y[key].length;
    }
    return "TotChinese="+TotChineseChar;
}
function MaxLen()
{
    var iMax=0;
    var Str="";
    for (key in Y) {
        if (iMax < Y[key].length ) {
            iMax = Y[key].length;
            Str = key+"="+ Y[key];
        }
    }
    return "MaxLen="+iMax +"," + Str;
}
function displayDate(eid)
{       

    //displayTable("abc", "1 2 3 ", "+");
    
    var pinyin="shi4a";
    var testChineses=Y[pinyin];
    if ( Y[pinyin] == null ) {
        //alert("");
    }


    //alert(document.body.clientHeight);
    
    document.getElementById(eid).innerHTML =GetTot()+"<br>"+MaxLen()+"<br>"+GetAll() ;
    
    


}







/////////////////////////////////////////
//utils

//body onclick, send text into textarea.
function getEl(){
   var ev = arguments[0] || window.event,
   origEl = ev.target || ev.srcElement;
   //alert(origEl.tagName+origEl.value+origEl.innerHTML);
   if(origEl.tagName=="TD") {
      addAtCaretPos(origEl.innerHTML);
   }
}

function addAtCaretPos( strText)
{
    objTextArea = document.m_TextareaObj;////document.getElementById("edit_area");
    // add the given text in caret position of given textarea
                // add the given text in caret position of given textarea
            if ( document.selection ) { // window IE7>
                objTextArea.focus();
                // apply text:
                document.selection.createRange().text = strText;

                // apply to textarea:
                objTextArea.caretPos = document.selection.createRange().duplicate();
                //objTextArea.scrollTop = objTextArea.scrollHeight; //move scroll to bottom. We do not need it here.
            } else { // ffox: use value instead of innerHTML.
        // Textarea is a form element - the inner html is used as the default contents of the text area, 
        // but it is not the dynamic value of the text area. 
        // The innerHTML of a text area does not change when the user edits its contents. 
        // That IE displays the changed value when referencing .innerHTML is wrong.
        // To access it's value, use the .value property - not .innerHTML

        if ( 0 == strText.length ) {
            return;
        }
        var slen = objTextArea.value.length;
        var i =  objTextArea.selectionStart;
        var s1 = objTextArea.value.substr( 0, i);
        var s2 = objTextArea.value.substr( i, slen);
        objTextArea.value = s1 + strText + s2;
        i++;
        objTextArea.setSelectionRange(i,i);

        if (slen == objTextArea.value.length) {
            alert("error insert");
        }

        objTextArea.scrollTop = objTextArea.scrollHeight; 
        objTextArea.focus();          
    }
    window.status = "add:"+strText+",Character Count:"+objTextArea.value.length;
    //document.getElementById("pinyininput").focus();
}


//not used/
function setCaretPosition(elemId, caretPos) { 
    var elem = document.getElementById(elemId); 

    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange(); 
            range.move('character', caretPos); 
            range.select(); 
        } else {
            if (elem.selectionStart) {
                elem.focus(); 
                elem.setSelectionRange(caretPos, caretPos); 
            } else
                elem.focus(); 
        } 
    }
} 


function doGetCaretPosition (ctrl) {
    var CaretPos = 0;  // IE Support
    if (document.selection) {
        ctrl.focus ();
        var Sel = document.selection.createRange ();
        Sel.moveStart ('character', -ctrl.value.length);
        ctrl.m_CaretPos = Sel.text.length;

        //alert(CaretPos);
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return(CaretPos);
}

function isOperationKey (keyCode)
{
    switch (keyCode) {
    case 8://bkspace
    case 13: //enter
        //case 32: //space
    case 37: //<=
    case 38: //uparrow
    case 39: //=>
    case 40: //dwn arrow
    case 33: //PgUp
    case 34: //PgDwn
    case 35: //End
    case 36: //Home
    case 45: //insert
    case 46: //Delete
        return true;
        break;
    case 8:  //bkspace
        //if (0==this.sPinput.length) {
        //  return true;
        //}
        break;
    }
    return false;
}

function isSymbolsKey (keyCode)
{
   //alert(keyCode);
    switch (keyCode) {
    case 188://,
    case 13: //enter
        //case 32: //space
    case 37: //<=
    case 38: //uparrow
    case 39: //=>
    case 40: //dwn arrow
    case 33: //PgUp
    case 34: //PgDwn
    case 35: //End
    case 36: //Home
    case 45: //insert
    case 46: //Delete
        return true;
        break;
    case 8:  //bkspace
        //if (0==this.sPinput.length) {
        //  return true;
        //}
        break;
    }
    return false;
}



function getEventCode (elm)
{  
    //alert();
    var myEvent=null;
    if (window.event) {
        myEvent = window.event;
        //DBG.TRACE("window");
    } else {
        myEvent = e;//ffox
        //DBG.TRACE("ffox");
    }

    //                 FireFox        || Window IE
    var keyPressed;
    if ( myEvent.which ) {
        keyPressed = myEvent.which;//        || evt.keyCode;
    } else if ( myEvent.keyCode ) {
        keyPressed = myEvent.keyCode;
    } else {
        alert("This brower does not support the event");
    }

    //alert(keyPressed+"="+ );
    var c = String.fromCharCode(keyPressed).toLowerCase();
    //return c;
    return keyPressed;
}


function doResize(TestAreaID){
    document.getElementById(TestAreaID).rows=document.body.clientHeight/16-20;//20;
    //document.getElementById("edit_area").cols=document.body.clientWidth/8;//8
}






///////////////////////////////////////
//main
///////////////////////////////////////
function TextareaInit(textareaObj, sPinyinDispID, sSelectionTableID, sToneID){
    if(null != textareaObj.m_bInited) return;
    textareaObj.m_bInited = true;
    
    document.m_TextareaObj = textareaObj;
    
    document.m_PinyinInputObj = document.getElementById(sPinyinDispID);
    document.m_SelectionTable = document.getElementById(sSelectionTableID);
    document.m_ToneObj        = document.getElementById(sToneID);
    
    
    document.m_PinyinInputObj.func_init=function(){
        if(null == this.m_pinyin) this.m_pinyin="";
    };
    document.m_PinyinInputObj.func_Show=function(){
        //if(null == this.m_pinyin) this.m_pinyin="";
        if(null !=  this.value ) this.value=this.m_pinyin;
        if(null !=  this.innerHTML ) this.innerHTML=this.m_pinyin;
        //alert("iih");
    };
    document.m_PinyinInputObj.func_init();
        
    //////////////////////////////////////////////////////////
    document.m_PinyinInputObj.func_append=function(cha, SelectionTableObj, ToneObj )
    {   
        me = this; //input element.
      
        //pushback pinyin.
        me.m_pinyin+=cha;
        

        var MAX_SHOW_LEN=10;
        if ( me.m_pinyin.length>MAX_SHOW_LEN) {
            me.m_pinyin="";
            me.func_Show();
            return;
        }    
        me.func_Show();
        
        
        //NOTE: "b c d f j k l m p q r s t w x y z "; //these are only used at first in pinyin. Carefuly choose 10 of them in orders.
        var CODES_FIRST_ONLY_TAB  = "s d f b c j k l m x ";//p q t w x y z "; //these are only used at first in pinyin. NOTE:r could be first(ri) or last.(er)
        var tmp = CODES_FIRST_ONLY_TAB;
        var CODES_FIRST_ONLY_LEN  = tmp.replace(/\s+/g, ''); //these are only used at first in pinyin.
        
        var pinyin = me.m_pinyin;//.replace(' ', ''); //replace(/^\s+|\s+$/g, ''); 

        //Commonly Followed Words. If len > 10, show page by page.
        var firstChar = pinyin.charAt( 0 );
        var CODES_NEVER_FIRST = " iuv"; //these are never used at first in pinyin.
        var CODES_FOLLOWED = "ia ib ic id ie if ij ik "; //select followed words started with i.
        var CODES_PAGE_SIZE=CODES_FOLLOWED.length/3;
        var iPos = CODES_NEVER_FIRST.search( firstChar );
        if ( 0==iPos ) {//space for next page.
            if (null == me.m_iStartIndx ) me.m_iStartIndx=0; //init my m_iStartIndx
            me.m_iStartIndx += CODES_PAGE_SIZE ;
            if ( me.m_iStartIndx > me.m_ChineseChars.length-1 ) {
                me.m_iStartIndx=0;  
             }
            var istop = me.m_iStartIndx + CODES_FOLLOWED.length/3;//CODES_PAGE_SIZE ; 
            var FlagMore="";
            if( istop <  me.m_ChineseChars.length-1) FlagMore = "+"+(me.m_ChineseChars.length-istop);
            var cs = me.m_ChineseChars.substring(me.m_iStartIndx, istop );
            ToneObj.innerHTML = "";  //
            displayTable(SelectionTableObj, cs, CODES_FOLLOWED , FlagMore + ",iStart1="+me.m_iStartIndx);
            me.m_pinyin="";
            me.func_Show();
            return;
        }
        if ( iPos > 0 ) {//iuv
            if ( pinyin.length >= 2 ) { //select commonly followed words.
                iPos = CODES_FOLLOWED.search( pinyin );
                //alert(iPos);
                if ( iPos >=0  ) {
                    var c = me.m_ChineseChars.charAt(me.m_iStartIndx+iPos/3);
                    
                    //alert(c);//selected.
                    addAtCaretPos(c);
                    var cfws = CommonlyFollowedWords(c);
                    ToneObj.innerHTML="";
                    if ( null != cfws ) {//find the common followed word
                        me.m_ChineseChars = cfws;
                        me.m_iStartIndx=0;//reset to a new list.
                        var FlagMore="";
                        if( me.m_ChineseChars.length > CODES_FOLLOWED.length/3 ) {
                            FlagMore = "+" + (me.m_ChineseChars.length - CODES_FOLLOWED.length/3);
                        }                   
                        ToneObj.innerHTML = ""; //cfws + me.m_FlagMore;//+"<br>"+CODES_FOLLOWED;    
                        displayTable(SelectionTableObj, cfws, CODES_FOLLOWED , FlagMore + ",iStart2="+me.m_iStartIndx );
                    }
                }
                me.m_pinyin="";
                me.func_Show();                
            } 
            return;
        }


        //main pinyin list.
        var TONE_MIN=1;
        var TONE_MAX=5;
        var lastChar = pinyin.charAt( pinyin.length-1 );
        var last2Char = pinyin.charAt(pinyin.length-2);
        if (null == me.m_tone ) me.m_tone=TONE_MIN;//init my tone (0,1,2,3,4)
        if ( pinyin.length>=2 ) {
            if ( lastChar == last2Char ) { //repeat last char, increment tone.
                me.m_tone+=1;       
                me.m_pinyin = me.m_pinyin.substring(0, pinyin.length-1);  //remove last repeated.
                pinyin = me.m_pinyin;   
                me.func_Show();
                me.m_iStartIndx = 0 ;
            } else {//maybe select a chinese char or keep add on pinyin.  
                var iPos = CODES_FIRST_ONLY_LEN.search( lastChar );             
                //alert(iPos);
                if ( iPos >=0 ) {//selected.
                    var Selected = me.m_iStartIndx + iPos;
                    var c = me.m_ChineseChars.charAt( Selected );//get the selected chinese char.
                    //alert(c);
                    addAtCaretPos(c);
                    me.m_pinyin="";
                    me.func_Show();
                    var cfws = CommonlyFollowedWords(c);//begin to get most commonly followed words. First Time .
                    ToneObj.innerHTML="";
                    me.m_iStartIndx = 0;//First Time .
                    if ( null != cfws ) {
                        var FlagMore = "";
                        if (cfws.length > CODES_FOLLOWED.length/3) FlagMore = "+"+(cfws.length - CODES_FOLLOWED.length/3);
                        var CWS = cfws.substring(0,CODES_FOLLOWED.length/3);
                        me.m_ChineseChars = cfws;
                        ToneObj.innerHTML = "";//
                        displayTable(SelectionTableObj, cfws, CODES_FOLLOWED , FlagMore);
                        me.m_pinyin="";
                        me.func_Show();
                        return;
                    }
                    return;
                } else {//keep adding on pinyin.
                   //alert(iPos);
                   //return;
                }
            }
        } else {
            if ( lastChar != ' ' ) {
                me.m_tone=TONE_MIN;
            }//space should not change the tone.
        }
        if ( me.m_tone > TONE_MAX ) me.m_tone = TONE_MIN;

        me.m_pinyin = me.m_pinyin.replace(/\s+/g, ''); //remove all spaces.
        me.func_Show();

        var ChineseChars="";
        for (var i=0; i<=TONE_MAX; i++ ) {
            var iTone = me.m_tone + i; 
            if ( iTone  > TONE_MAX ) iTone =TONE_MIN;
            pinyin = me.m_pinyin + iTone ;
            ChineseChars = Y[pinyin];
            if ( null == ChineseChars || ChineseChars.length==0) {
                //alert(ChineseChars +" " + pinyin);
                continue;
            } else {
                me.m_tone=iTone;
                break;
            }
        }
        if ( (null == ChineseChars) && ( pinyin.length >= 2 ) ) {
             me.m_tone=TONE_MIN;
             return;//eg. sh
        } else {
            me.m_ChineseChars = ChineseChars;//storeup
             
        }


        //change the start position.

        //var FlagMore="+";        
        if ( ' ' == lastChar ) {
            if( null == me.m_iStartIndx ) me.m_iStartIndx=0;//init my m_iStartIndx
            me.m_iStartIndx += CODES_FIRST_ONLY_LEN.length;
            if ( me.m_iStartIndx > me.m_ChineseChars.length-1 ) me.m_iStartIndx=0;  //remove last repeated.
        } else me.m_iStartIndx = 0;

        var iStop = me.m_iStartIndx + CODES_FIRST_ONLY_LEN.length;
        if ( iStop > me.m_ChineseChars.length-1 ) me.m_FlagMore="";
        else me.m_FlagMore = "+" + (me.m_ChineseChars.length - iStop); 


        //final display.
        ChineseChars = me.m_ChineseChars.substring(me.m_iStartIndx, iStop);
        ToneObj.innerHTML = me.m_tone;    //+"<br>"+ChineseChars+me.m_FlagMore+"<br> b c d f h j k l m p q r s t w x y z";
        displayTable(SelectionTableObj, ChineseChars, CODES_FIRST_ONLY_TAB, me.m_FlagMore);

    };
    ///////////////////////////////////////////////////////
  

}
function TextareaOnClick (textareaObj) {
    doGetCaretPosition(textareaObj);
}
function TextareaKeyDwn(textareaObj, sPinyinDispID, sSelectionTableID, sToneID){    
    TextareaInit(textareaObj, sPinyinDispID, sSelectionTableID, sToneID);
    
    //.focus();
    var keyCod = getEventCode(null);
    
    if( 27 == keyCod ) return false;//prevent to erase all content.
    //alert(keyCod);
    /////////////////////////////////////////////////////
    //Switch input mode between English and Chinese.
    if( 17 == keyCod ){//Shift=16, Ctrl=17, Alt=18, ESC=27
        if( true == textareaObj.bEnglishMode ) {
            textareaObj.bEnglishMode = false;
            textareaObj.style.background="#FFFF99" 
        }
        else{
            textareaObj.bEnglishMode = true;
            textareaObj.style.background="#f0f8ff" 
        }        
        textareaObj.focus();
    }
    if( textareaObj.bEnglishMode == true ) return true;
    //////////////////////////////////////////////////////
    
    
    if( (keyCod>=65 && keyCod<=90) || 32 == keyCod){ //a-z, space
      var c = String.fromCharCode(keyCod).toLowerCase();
      document.m_PinyinInputObj.func_append(c, document.m_SelectionTable, document.m_ToneObj );
      doGetCaretPosition(textareaObj);
      return false;
    }
    if( 8 == keyCod ) {//backspace. do not delete TextArea until pinyin is gone.
      var spinyin = document.m_PinyinInputObj.m_pinyin;
      if( spinyin.length>0 ){
         document.m_PinyinInputObj.m_pinyin = spinyin.substring(0,spinyin.length-1);
         document.m_PinyinInputObj.func_Show();
         return false;         
      }
      return true;
    }
    //alert(keyCod);
    if (isOperationKey(keyCod)) return true;//take effect.
    if (isSymbolsKey(keyCod)) return true;//take effect.
    doGetCaretPosition(textareaObj);
    return true;
}



function displayTable(tableObj, strChineses, strCodes, symbol)
{       
   var i=0;
   
   //get clean code list. Code could be one or two characters.
   var codlist = strCodes.split(" ");
   var tmplist = new Array();
   for(i=0; i <codlist.length; i++) {
      var code=codlist[i];
      if( null == code || code.length==0 ) continue;
      tmplist.push(code);
   }
   codlist = tmplist;//clean list.
   
   //validate size check: number of codes should fit number of cell of table. 
   var tb = tableObj.childNodes[0];//first raw.
   var tds = tb.childNodes[0].childNodes; //
   
   var iSize = codlist.length; 
   if(codlist.length + 1 > tds.length ) {
      alert("Desgn Error: table cell num="+tds.length + ", CodeSize="+codlist.length);
      return;
   }
   
   
   //list chinese chars on first raw.
   for(i=0;i<tds.length;i++){
      if(i==codlist.length) {
         if(symbol.length>0) {
            symbol += " more [SPACE]";
         }
         tds[i].innerHTML = symbol  ;
         continue;
      }
      if(i>=codlist.length) {
         tds[i].innerHTML  = "";
         continue;
      }
      tds[i].innerHTML = strChineses.charAt(i);
   }
   
   //list selectable codes on second raw.
   tds = tb.childNodes[1].childNodes;
   if( codlist.length > 0 ) {
      for(i=0;i<tds.length;i++){
         if( i == codlist.length) {
            if(symbol.length>0) symbol+= "(hit SPACE.)"
            tds[i].innerHTML = ""  ;
            continue;
         }          
         if(null == codlist[i] || 0==codlist[i].length) {
            tds[i].innerHTML="";
            continue;
         }   
         else tds[i].innerHTML = codlist[i];
      }
   }
   else{
      alert("Bad design");
      for( i=0; i < tds.length; i++){
         tds[i].innerHTML = strCodes.charAt(i);
      }
   }
   //alert(tb.childNodes.item(0));
}













