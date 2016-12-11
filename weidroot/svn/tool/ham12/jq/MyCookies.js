var MyCookies={
Init:function( json ){
	if(typeof(Storage)){
		var str=JSON.stringify(json);
		this.cookie=json;
		//alert(json);
		//alert("init  str="+str);
  	}
	else{
  		alert("Not support html5 Storage!");
	}
},
ExpireDays:function( exdays ){

},
Set: function (cname, cvalue) {
	localStorage.setItem(cname, cvalue);
},
Get: function (cname, defaultValue=null) {
	var str=localStorage.getItem(cname);
	//alert("localStorage Get:"+cname+"="+str);
	if(!str){
		if (!this.cookie){alert("not init yet:"+cname); return defaultValue;};
		//alert("Get default cookie:"+cname+"="+this.cookie[cname]);
		return this.cookie[cname];
	};
	return str;
},
Save:function(){

},
Show:function(){

},
	
	

};