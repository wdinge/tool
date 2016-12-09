var MyCookies={
Init:function( json ){
	this.items=json;
},
ExpireDays:function( exdays ){
	this.exdays=exdays;
	
	if( this.exdays<=0 ) {
		console.log("cookies not used.");
		return;
	}
	
	for( key in this.items ){
		var defaultval=this.items[key];
		this.items[key]=this.get(key,defaultval);
	}
},
Set: function (cname, cvalue) {
	var v=this.items[cname];
	if( undefined === this.items[cname]){
		return alert(cname +"=" + cvalue + " undefined key");
	}
	this.items[cname]=cvalue;
},
Get: function (cname) {
	if(undefined === this.items[cname]){
		return alert(cname + " undefined get.");
	}	
	return this.items[cname];
},
Save:function(){
	if(this.exdays<=0) {
		console.log("cookies not used.");
		return -1;
	}
	var i=0;
	var sbug="";
	for(cname in this.items ){
		var cvalue=this.items[cname];
		sbug +=cname+"="+cvalue+",";
		console.log("save cookies:"+sbug);
		this.set (cname, cvalue, this.exdays);
		i++;
	}
	return sbug+"\n"+i;
},
Show:function(){
	var str=JSON.stringify(this);
	console.log(str);
},
	
	
	
	
	
	
	
set2_______________________test: function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	var jsn={};
	jsn[cname]=cvalue;
	jsn["a"]="b";
	var strjsn=JSON.stringify(jsn);
	console.log("stringify:" +strjsn);
	var str=" "+cname + "=" + cvalue + "; a=b; " + expires;
	console.log("before cookie: "+document.cookie);
    document.cookie = str;//cname + "=" + cvalue + "; " + expires;
	console.log("set str: "+str);
	console.log("after cookie: "+document.cookie);
},
set: function (cname, cvalue, exdays) {
	if(undefined===exdays) return alert("exdays is undefined");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	var str=cname + "=" + cvalue + "; " + expires;
    document.cookie = cname + "=" + cvalue + "; " + expires;
	console.log("set str:"+str);
	console.log("getcookie:"+document.cookie);
},

get: function (cname,defaultval) {
	console.log("curr cookie: "+document.cookie);
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return defaultval;
}
};