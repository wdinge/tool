var StrongsHebrewUti={
 Remove_Prounce_Hebrew:function(phword){
        var sword='';
        for(var k=0;k<phword.length;k++){
            var code=phword.charCodeAt(k);
            if(code>=1488 && code<=1514){
                var ch=phword.charAt(k);
                sword+=ch;
            }                
        }  
        return sword;
  },    
  findObjs:function(word){
    word=$.trim(word);
    word=StrongsHebrewUti.Remove_Prounce_Hebrew(word);
    var ret=[];
    $.each(StrongsHebrew.lexicon.entry,function(i,obj){
        if( word == StrongsHebrewUti.Remove_Prounce_Hebrew(obj.w.__text) ){
            ret.push(obj);
        }
    });
    return ret;
  },
  get_Ids:function(objArr){
    var ret='';
    var coma='';
    if(objArr.length>0) coma="<br/>";
    $.each(objArr,function(i,obj){
            ret+=obj._id+coma;
    });
    return ret;
  },
  get_uls:function(objArr){
    var ret='';
    $.each(objArr,function(i,obj){
            ret+=StrongsHebrewUti.get_ul(obj);
            ret+='<hr/>';
    });
    return ret;
  },
  get_ul:function(obj){
    var ret='<ul>';
    
    ret+="<li>"+obj._id+"</li>";
    ret+="<li>"+obj.w._pron+"</li>";
    ret+= "<li>"+obj.w["_xml:lang"]+"</li>";
    
    var meaning='-';
    if( obj.meaning ){
       meaning=obj.meaning.def;
    }
    ret += "<li>"+meaning +"</li>";
    
    var source='-';
    if( obj.source ){
       source=JSON.stringify(obj.source);
    }
    ret += "<li>"+source +"</li>";
    
    var usage='-';
    if( obj.usage ){
       usage=obj.usage;
    }
    ret += "<li>"+usage +"</li>";
    
    ret+="</ul>";
    return ret;
  },
  
  
  get_table:function(){
        var stab="<table border='1'>";
        $.each(StrongsHebrew.lexicon.entry,function(i,obj){
           var lang=obj.w["_xml:lang"];
           stab += "<tr><td>"+obj._id +"</td><td>"+obj.w.__text+"</td><td>"+obj.w._pron+"</td>";
           
           stab += "<td>"+lang +"</td>";
           var meaning='';
           if( obj.meaning ){
              meaning=obj.meaning.def;
           }
           stab += "<td>"+meaning +"</td>";
           
           var source='';
           if( obj.source ){
              source=JSON.stringify(obj.source);
           }
           stab += "<td>"+source +"</td>";
           
           var usage='';
           if( obj.usage ){
              usage=obj.usage;
           }
           stab += "<td>"+usage +"</td>";
           
           
           stab +="</tr>";
        });
        stab +="</table>";
        return stab;
  },
      
};
