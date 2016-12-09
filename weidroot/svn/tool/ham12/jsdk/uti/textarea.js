
/*
* Group:
*   unicode_pinuin_dat.js.
*   unicode_pinuin_fun.js.
*
* Unicode PinYin Usage
* var UC_PY_D = new Array()
*/
/*Unicode PinYin Usage*/
//var UC_PY_D = new Array();


//UC_PY_D[ 0 ] = "\u673A  jia 1 1234";
//UC_PY_D[ 1 ] = "\uAC60  jia 1 1234";



		   



//var globalCursorPos; // global variabe to keep track of where the cursor was

//sets the global variable to keep track of the cursor position
//function setCursorPos() {
// globalCursorPos = getCursorPos(myForm.myTextArea);
//}

//This function returns the index of the cursor location in
//the value of the input text element
//It is important to make sure that the sWeirdString variable contains
//a set of characters that will not be encountered normally in your
//text
function getCursorPos(textElement) {
	//save off the current value to restore it later,
	var sOldText = textElement.value;

	//create a range object and save off it's text
	var objRange = document.selection.createRange();
	var sOldRange = objRange.text;

	//set this string to a small string that will not normally be encountered
	var sWeirdString = '#%~';

	//insert the weirdstring where the cursor is at
	objRange.text = sOldRange + sWeirdString; 
	objRange.moveStart('character', (0 - sOldRange.length - sWeirdString.length));

	//save off the new string with the weirdstring in it
	var sNewText = textElement.value;

	//set the actual text value back to how it was
	objRange.text = sOldRange;

	//look through the new string we saved off and find the location of
	//the weirdstring that was inserted and return that value
	for (i=0; i <= sNewText.length; i++) {
		var sTemp = sNewText.substring(i, i + sWeirdString.length);
		if (sTemp == sWeirdString) {
			var cursorPos = (i - sOldRange.length);
			return cursorPos;
		}
	}
	return 0;
}
//this function inserts the input string into the textarea
//where the cursor was at
function insertString(textElement, globalCursorPos, stringToInsert) {
	var firstPart = textElement.value.substring(0, globalCursorPos);
	var secondPart = textElement.value.substring(globalCursorPos, textElement.value.length);
	textElement.value = firstPart + stringToInsert + secondPart;
}

function setCaretPosition_Id(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}



var TextAreaEditor = {
Init:function(TextAreaElm){
	this.TextAreaElm = TextAreaElm;
	this.caretPos = 0;
},
OnFocus:function(){
    setCaretPosition(this.TextAreaElm, this.caretPos);
	//IME.TRACE("^^caretPos="+this.caretPos);

	storeCaret( this.TextAreaElm );
},
OnKeyup:function(){
	this.caretPos = getCursorPos(this.TextAreaElm);
	//IME.TRACE("^^kkkkkk  caretPos="+this.caretPos);
	
	storeCaret( this.TextAreaElm );	
},
OnClick:function(){
	this.caretPos = getCursorPos(this.TextAreaElm);
	//IME.TRACE("^^kkkkkk  caretPos="+this.caretPos);
	
	storeCaret( this.TextAreaElm );	
},
InsertStr:function(str){
	insertString(this.TextAreaElm,this.caretPos,str);
	this.caretPos++;
}

};








































/////////////////////////////////////////
//
// TextAreaEditor <TextArea>
//
// insert at current caret.
// issues: could not restore caret position.
function storeCaret (textEl) {
     if (textEl.createTextRange) 
     {
         textEl.caretPos = document.selection.createRange().duplicate();
     }
}

function insertAtCaret (textEl, text) 
{
       if (textEl.createTextRange && textEl.caretPos) 
       {
         var caretPos = textEl.caretPos;
         caretPos.text =
           caretPos.text.charAt(caretPos.text.length - 1) == ' ' ?
             text + ' ' : text;
       }
       else
       {
         textEl.value  = text;
       }
}
//
//
//////////////////////////////////////////








