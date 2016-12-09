
function inc_Chinese7kPyXI(sdir){    
    var i=0;
    for( i=0; i<=1; i++) {
        sid = "00" + i;
        sid = sid.substr(sid.length-2,6);
        var jsfile = sdir + "cc/7kPy/Py" + sid + ".unicode.js";
        var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + ">";
        s = s + "</";
        s = s + "script";
        s = s + ">\n";
        
        document.write(s);
        //alert(s);
        //if(i<2|| 22==i || i>180 ) alert(s);
    }
    for( i=0; i<=12; i++) {
        sid = "00" + i;
        sid = sid.substr(sid.length-2,6);
        var jsfile = sdir + "cc/xl/X_" + sid + ".unicode.js";
        var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + ">";
        s = s + "</";
        s = s + "script";
        s = s + ">\n";
        
        document.write(s);
        //alert(s);
        
        //if(i<2|| 22==i || i>180 ) alert(s);
    }
}



