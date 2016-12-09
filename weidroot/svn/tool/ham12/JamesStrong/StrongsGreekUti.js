var StrongsGreekUti={
  findObjs:function(word){
    word=$.trim(word);
    var ret=[];
    $.each(StrongsGreek.strongsdictionary.entries.entry,function(i,obj){
        var greek='---';
        if(typeof obj.greek === "object" ){
            if(Array.isArray(obj.greek)){
            }
            else{
                greek=obj.greek._unicode;
            }
        }
        
        if( word == greek ){
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
            ret+=obj.strongs+coma;
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
        $.each(StrongsGreek.strongsdictionary.entries.entry,function(i,obj){
           stab += "<tr><td>"+obj.strongs +"</td>";//id
            
           var pronunciation='';
           if(obj.pronunciation){
             pronunciation=obj.pronunciation._strongs;
           }
           var strongs_def='';
           if(obj.strongs_def){
             strongs_def=obj.strongs_def;
           }
           
           
           var greek='';
           if(typeof obj.greek === "object" ){
                if(Array.isArray(obj.greek)){
                }
                else{
                    greek=obj.greek._unicode;
               }
           }
           stab += "<td>"+greek+"</td>";
           
           
           stab += "<td>"+pronunciation+"</td><td>"+strongs_def+"</td>";
           
           /*var lang='';
           if(obj.w){
               lang=obj.w["_xml:lang"];
           }
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
           stab += "<td>"+usage +"</td>";*/
           
           
           stab +="</tr>";
        });
        stab +="</table>";
        return stab;
  },
      
};
