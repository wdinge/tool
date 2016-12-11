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
function displayDate()
{       

    displayTable("abc", "1 2 3 ", "+");
    
    var pinyin="shi4a";
    var testChineses=Y[pinyin];
    if ( Y[pinyin] == undefined ) {
        //alert("");
    }


    //alert(document.body.clientHeight);

    document.getElementById("demo").innerHTML =GetTot()+"<br>"+MaxLen()+"<br>"+GetAll() ;
    
    


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
    window.status = "Character Count:"+objTextArea.value.length;
    //document.getElementById("pinyininput").focus();
}



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

function TextareaKeyDwn(textareaObj, sPinyinDispID, sSelectionTableID){
    document.m_TextareaObj = textareaObj;
    textareaObj.m_PinyinInputObj = document.getElementById(sPinyinDispID);
    textareaObj.m_SelectionTable = document.getElementById(sSelectionTableID);
    //.focus();
    var keyCod = getEventCode(null);
    if( (keyCod>=65 && keyCod<=90) || 32 == keyCod){
      var c = String.fromCharCode(keyCod).toLowerCase();
      TextareaKeyDwn_Push_back_Pinyin(textareaObj, c );
      doGetCaretPosition(textareaObj);
      return false;
    }
    if( 8 == keyCod ) {//backspace. do not delete TextArea until pinyin is gone.
      var spinyin = textareaObj.m_PinyinInputObj.value;
      if( spinyin.length>0 ){
         textareaObj.m_PinyinInputObj.value = spinyin.substring(0,spinyin.length-1);
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

/////////////////////////////////////////
function TextareaKeyDwn_Push_back_Pinyin(taObj, cha)
{   
    me = taObj.m_PinyinInputObj; //input element.
 
 
    
    me.value += cha;
    if ( me.value.length>10) {
        me.value="";//clear.
        return;
    }
    var MAX_SHOW_LEN=10;
    var CODES_FIRST_ONLY_TAB  = "b c d f j k l m p q ";//r s t w x y z "; //these are only used at first in pinyin.
    var CODES_FIRST_ONLY_LEN  = CODES_FIRST_ONLY_TAB.replace(/\s+/g, ''); //these are only used at first in pinyin.
    var pinyin = me.value;//.replace(' ', ''); //replace(/^\s+|\s+$/g, ''); 


    //Commonly Followed Words
    var firstChar = pinyin.charAt( 0 );
    var CODES_NEVER_FIRST = " iuv"; //these are never used at first in pinyin.
    var CODES_FOLLOWED = "ia ib ic id ie if ij ik "; //select followed words
    var iPos = CODES_NEVER_FIRST.search( firstChar );
    if ( 0==iPos ) {//space for next page.
        if (undefined == me.m_iStartIndx ) me.m_iStartIndx=0; //init my m_iStartIndx
        me.m_iStartIndx += CODES_FOLLOWED.length/3 ;
        if ( me.m_iStartIndx > me.m_ChineseChars.length-1 ) {
            me.m_iStartIndx=0;  
         }
        var istop = me.m_iStartIndx + CODES_FOLLOWED.length/3 ; 
        var FlagMore="";
        if( istop <  me.m_ChineseChars.length-1) FlagMore = "+"+(me.m_ChineseChars.length-istop);
        var cs = me.m_ChineseChars.substring(me.m_iStartIndx, istop );
        document.getElementById("demo").innerHTML = "";  //
        displayTable(cs, CODES_FOLLOWED , FlagMore + ",iStart1="+me.m_iStartIndx);
        me.value = "";
        return;
    }
    if ( iPos > 0 ) {//iuv
        if ( 2 == pinyin.length ) { //select commonly followed words.
            iPos = CODES_FOLLOWED.search( pinyin );
            //alert(iPos);
            if ( iPos >=0  ) {
                var c = me.m_ChineseChars.charAt(me.m_iStartIndx+iPos/3);
                
                //alert(c);//selected.
                addAtCaretPos(c);
                var cfws = CommonlyFollowedWords(c);
                document.getElementById("demo").innerHTML="";
                if ( undefined != cfws ) {
                    me.m_ChineseChars = cfws;
                    me.m_iStartIndx=0;//reset to a new list.
                    var FlagMore="";
                    if( me.m_ChineseChars.length > CODES_FOLLOWED.length/3 ) {
                        FlagMore = "+" + (me.m_ChineseChars.length - CODES_FOLLOWED.length/3);
                    }                   
                    document.getElementById("demo").innerHTML = ""; //cfws + me.m_FlagMore;//+"<br>"+CODES_FOLLOWED;    
                    displayTable(cfws, CODES_FOLLOWED , FlagMore + ",iStart2="+me.m_iStartIndx );
                }
            }
            me.value = "";
            return;
        } else if ( pinyin.length>2 ) {
            me.value = "";
            return;
        }
        return;
    }


    //main pinyin list.
    var TONE_MIN=1;
    var TONE_MAX=5;
    var lastChar = pinyin.charAt( pinyin.length-1 );
    var last2Char = pinyin.charAt(pinyin.length-2);
    if (undefined == me.m_tone ) me.m_tone=TONE_MIN;//init my tone (0,1,2,3,4)
    if ( pinyin.length>=2 ) {
        if ( lastChar == last2Char ) { //repeat last char, increment tone.
            me.m_tone+=1;       
            me.value = me.value.substring(0, pinyin.length-1);  //remove last repeated.
            pinyin = me.value;    
            me.m_iStartIndx = 0 ;
        } else {//maybe select a chinese char or keep add on pinyin.  
            var iPos = CODES_FIRST_ONLY_LEN.search( lastChar );             
            //alert(iPos);
            if ( iPos >=0 ) {//selected.
                var Selected = me.m_iStartIndx + iPos;
                var c = me.m_ChineseChars.charAt( Selected );//get the selected chinese char.
                //alert(c);
                addAtCaretPos(c);
                me.value= "";
                var cfws = CommonlyFollowedWords(c);//begin to get most commonly followed words. First Time .
                document.getElementById("demo").innerHTML="";
                me.m_iStartIndx = 0;//First Time .
                if ( undefined != cfws ) {
                    var FlagMore = "";
                    if (cfws.length > CODES_FOLLOWED.length/3) FlagMore = "+"+(cfws.length - CODES_FOLLOWED.length/3);
                    var CWS = cfws.substring(0,CODES_FOLLOWED.length/3);
                    me.m_ChineseChars = cfws;
                    document.getElementById("demo").innerHTML = "";//
                    displayTable(cfws, CODES_FOLLOWED , FlagMore);
                    me.value = "";
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

    me.value = me.value.replace(/\s+/g, ''); //remove all spaces.
    //pinyin = me.value + me.m_tone; 
    //me.m_ChineseChars = Y[pinyin];

    var ChineseChars="";
    for (var i=0; i<=TONE_MAX; i++ ) {
        var iTone = me.m_tone + i; 
        if ( iTone  > TONE_MAX ) iTone =TONE_MIN;
        pinyin = me.value + iTone ;
        ChineseChars = Y[pinyin];
        if ( undefined == ChineseChars || ChineseChars.length==0) {
            //alert(ChineseChars +" " + pinyin);
            continue;
        } else {
            me.m_tone=iTone;
            break;
        }
    }
    if ( (undefined == ChineseChars) && ( pinyin.length >= 2 ) ) {
         me.m_tone=TONE_MIN;
         return;//eg. sh
    } else {
        me.m_ChineseChars = ChineseChars;//storeup
         
    }


    //change the start position.

    //var FlagMore="+";        
    if ( ' ' == lastChar ) {
        if( undefined == me.m_iStartIndx ) me.m_iStartIndx=0;//init my m_iStartIndx
        me.m_iStartIndx += CODES_FIRST_ONLY_LEN.length;
        if ( me.m_iStartIndx > me.m_ChineseChars.length-1 ) me.m_iStartIndx=0;  //remove last repeated.
    } else me.m_iStartIndx = 0;

    var iStop = me.m_iStartIndx + CODES_FIRST_ONLY_LEN.length;
    if ( iStop > me.m_ChineseChars.length-1 ) me.m_FlagMore="";
    else me.m_FlagMore = "+" + (me.m_ChineseChars.length - iStop); 


    //final display.
    ChineseChars = me.m_ChineseChars.substring(me.m_iStartIndx, iStop);
    document.getElementById("demo").innerHTML = me.m_tone;    //+"<br>"+ChineseChars+me.m_FlagMore+"<br> b c d f h j k l m p q r s t w x y z";
    displayTable(ChineseChars, CODES_FIRST_ONLY_TAB, me.m_FlagMore);

}


function displayTable(strChineses, strCodes, symbol)
{       
   var i=0;
   
   //get clean list.
   var codlist = strCodes.split(" ");
   var tmplist = new Array();
   for(i=0; i <codlist.length; i++) {
      var code=codlist[i];
      if( undefined == code || code.length==0 ) continue;
      tmplist.push(code);
   }
   codlist = tmplist;//clean list.
   
   //validate size check
   var tb = document.getElementById("tb").childNodes[0];
   var tds;
   tds = tb.childNodes[0].childNodes;
   
   var iSize = codlist.length;
   if(codlist.length + 1 > tds.length ) {
      alert("Desgn Erro: table cell num="+tds.length + ", CodeSize="+codlist.length);
      return;
   }
   
   
   //list chinese chars.
   for(i=0;i<tds.length;i++){
      if(i==codlist.length) {
         if(symbol.length>0) symbol+= "more(hit SPACE.)"
         tds[i].innerHTML = symbol  ;
         continue;
      }
      if(i>=codlist.length) {
         tds[i].innerHTML  = "";
         continue;
      }
      tds[i].innerHTML = strChineses.charAt(i);
   }
   
   //list map codes.
   tds = tb.childNodes[1].childNodes;
   if( codlist.length > 0 ) {
      for(i=0;i<tds.length;i++){
         if( i == codlist.length) {
            if(symbol.length>0) symbol+= "(hit SPACE.)"
            tds[i].innerHTML = "-"  ;
            continue;
         }          
         if(undefined == codlist[i] || 0==codlist[i].length) {
            tds[i].innerHTML="-";
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













