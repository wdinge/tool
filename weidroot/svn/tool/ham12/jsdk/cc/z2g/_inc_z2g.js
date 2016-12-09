var GB=[];
var Z={};
var Z2G={
	Set:function(dir, mode){
		this.dir=dir;
		this.mode=mode;
	},
	Load:function(){
		if( !this.dir ){
			alert("KJV need Set first.");
		}
		if( typeof GB === undefined || GB.length==0 || 'undefined'===Z ){
			inc_z2g_run(this.dir,this.mode);
		}
	}
};

function inc_z2g(sdir, async){  
  console.log("async:"+async);
  if(async==="Timeout"){
	  setTimeout(inc_z2g_run(sdir, async), 5000);
  }
  else{
	  inc_z2g_run(sdir, async);
  }
}
function inc_z2g_run(sdir, async){    
   var jsfiles=new Array();
   jsfiles[0]   = sdir + "cc/z2g/jianfan/jian_fan_group.js";
   jsfiles[1]   = sdir + "cc/z2g/zid2jid/zid2jid_1.js";
   jsfiles[2]   = sdir + "cc/z2g/zid2jid/zid2jid_2.js";
   var i=0;
   for( i=0; i<jsfiles.length; i++) {
      var jsfile = jsfiles[i];
      var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + ">";
        s = s + "</";
        s = s + "script";
        s = s + ">\n";
        
      //document.write(s);
	  $("head").append(s);
      //alert(s);
	  console.log("finished: inc_z2g_run"+s);
    }
	
	console.log("finished: inc_z2g_run");
}

function inc_z2g_write(sdir){    
   var jsfiles=new Array();
   jsfiles[0]   = sdir + "cc/z2g/jianfan/jian_fan_group.js";
   jsfiles[1]   = sdir + "cc/z2g/zid2jid/zid2jid_1.js";
   jsfiles[2]   = sdir + "cc/z2g/zid2jid/zid2jid_2.js";
   var i=0;
   for( i=0; i<jsfiles.length; i++) {
      var jsfile = jsfiles[i];
      var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + ">";
        s = s + "</";
        s = s + "script";
        s = s + ">\n";
        
      document.write(s);
	  //$("head").append(s);
      //alert(s);
	  //console.log("finished: inc_z2g_run"+s);
    }
	
	console.log("finished: inc_z2g_run");
}


//chineseTxt comes from String.fromCharCode (code);
function z2g_translate2jiaguwen(chineseTxt){
      var jxt="";
      var i=0;
      for(i=0;i<chineseTxt.length;i++) {
         var azi = chineseTxt.charAt(i);
         var zis=jian_fan_group_GetGroup(azi);
         var zid2jids="";
         for(var m=0;m<zis.length;m++){
           var zi = zis.charAt(m);
           var key = "_"+zi.charCodeAt(0);
           if( undefined != Z[key] && Z[key].length>0 ){
            zid2jids += Z[key];
           }
         }
         
         var imglist=undefined;
         if( zid2jids.length>0 ){
            imglist = zid2jids.split(",");
         }
         
         if( undefined == imglist || imglist.length==0){
            jxt+=azi;
         }
         else{//jiaguwen
            jxt+="[";
            for(var k=0;k<imglist.length;k++) {
               var imgid=imglist[k];
               if( imgid.length==0) continue;
               jxt+="<img class='tbi' src='../../../___bigdata/___solid/odb/tbi/img/jgif/"+ imgid + ".gif'/>";
            }
            jxt+="]";
         }
         //alert(jxt);
      }
      return jxt;
    }


function z2g_convert2opposite(chineseTxt){
      var jxt="";
      var i=0;
      for(i=0;i<chineseTxt.length;i++) {
         var azi = chineseTxt.charAt(i);
         var zis = jian_fan_group_GetOpositeOf(azi);
         if(zis.length>1) zis = "[" + zis + "]" ;
         jxt += zis;
      }
      return jxt;
    }