
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
	function getValueById(eid) {
		var elm = document.getElementById(eid);
		if (elm.innerHTML) return elm.innerHTML; //safari
		if (elm.value) return elm.value; //safari
		return "";
	}
	function setValueById(eid, val) {
		var elm = document.getElementById(eid);
		if (elm.innerHTML) elm.innerHTML = val; //safari
		if (elm.value) elm.value = val; //safari
	}
    function convertToEntities(tstr) {    
        //var tstr = document.form.unicode.value;    
        var bstr = '';     
        for (i=0; i<tstr.length; i++) {
            if (tstr.charCodeAt(i)>127) {//for chinese
                bstr += '&#' + tstr.charCodeAt(i) + '`';// special code.       
            } else {
                if (tstr.charAt(i) == ';' ){
                    bstr += '^';
                }
                else{
                    bstr += tstr.charAt(i);        
                }
            }    
        }    
        //document.form.entity.value = bstr;
        return bstr;
    } 
    
    
    ////////////////////////////
    function cookieRead(key){

        var start = 1+key.length + document.cookie.indexOf( key + "=" );
        if( start < 0) return null;
        var end = document.cookie.indexOf(";", start); // First ; after start    
        if (end == -1) return null; // failed indexOf = -1    
        var sread = document.cookie.substring(start, end);

        sread = sread.replace(/`/g,";");//
        sread = sread.replace(/[\^]/g,";");
        sread = sread.replace(/_/g,"\r\n\r");
        return sread;
    }
    function cookieSave(key,val){
        var expires = new Date();
        expires.setDate(expires.getDate() + 365); // 7 = days to expire
        var s= key + "=" + convertToEntities(val);
        document.cookie = s+ ";expires=" + expires.toGMTString();
    }
    
    
	function indexedKey(indx){
		var s = "c"+indx+"_";
		return s;
	}
    
    ////////////////////////////////
    function cookieSaveIndex(idx, val){
        cookieSave(indexedKey(idx),  val);
        return;
    }
    function cookieReadIndex(idx){
        return cookieRead( indexedKey(idx) );
    }
    
    
    ////////////////////////////////
    function cookieSaveIndx(eid, idx){        
	    cookieSaveIndex(idx, getValueById(eid));
        return;
    }
    function cookieReadIndx(eid,idx){
        setValueById(eid, cookieReadIndex(idx) );
        return;
    }
    
    ///////////////////////////
    function cookieSetMaxIndex(iMax){
        cookieSave("iMax",iMax.toString() );
    }
    function cookieNextIndex(){
        if( document.m_iCookieIdx == null ){
            document.m_iCookieIdx = -1;
        }
        document.m_iCookieIdx++;
        var iMax = cookieRead("iMax");
        if( document.m_iCookieIdx >=  0+iMax ) document.m_iCookieIdx=0;
    }
    function cookieSaveNext(val){
        var iMax = cookieRead("iMax");
        if( iMax == null) iMax = 0;
        for( var i=0;i<iMax;i++) {
            var ck = cookieReadIndex(i);
            if( ck == null || ck.length==0 || ck == val) {
                cookieSaveIndex(i, val);
                return;
            } 
        }
        cookieNextIndex();
        cookieSaveIndex(document.m_iCookieIdx, val);
    }
    function cookieReadNext(){
        cookieNextIndex();
        return cookieReadIndex( document.m_iCookieIdx );
    }
    
    
    
    ///////
    function cookieSaveNextById(eid){
        cookieSaveNext(getValueById(eid));        
    }
    function cookieReadNextById(eid){
        setValueById(eid, cookieReadNext() );		
    }
    
    
    

