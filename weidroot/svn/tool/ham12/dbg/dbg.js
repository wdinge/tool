//
//  <SCRIPT language="javascript" src="dbg/dbg.js"></SCRIPT>
// 
// 
var DBG = {
    //
    // debug
    //
    INDEX : 0,
    TRACE_CLEAR:function()
    {
        this.INDEX=0;
        this.DbgOpener.document.f2.id2.value = "";
    },
    TRACE : function (s)
    {
        if( this.DbgOpener )
        {
            if( this.DbgOpener.document.f2.id2.value.length > 5000) {
                this.INDEX = 0;
                this.DbgOpener.document.f2.id2.value = "";
            }
            this.INDEX++;


            this.DbgOpener.document.f2.id2.value = this.getPaddingNum(this.INDEX,5) + ": " + s + "\n" + this.DbgOpener.document.f2.id2.value;
            var i = this.DbgOpener.document.f2.id2.value.length;

            //this.DbgOpener.document.f2.id2.setSelectionRange(i,i);
        }
        //else
        //{
        //    this.DbgOpener = window.open("dbg/dbg2.htm", "db2", "width=800,height=600");
        //                   //window.open('dbg2.htm', 'dbg2','width=800,height=600')
        //    this.INDEX = 0;
        //}
    },
    TRACE1 : function (s)
    {
        if( this.DbgOpener1 )
        {
            if( this.INDEX > 100) {
                this.INDEX = 0;
                this.DbgOpener.document.f2.id2.value = "";
            }
            this.INDEX++;


            this.DbgOpener1.document.f2.id2.value = this.getPaddingNum(this.INDEX,5) + ": " + s + "\n" + this.DbgOpener1.document.f2.id2.value;
            var i = this.DbgOpener1.document.f2.id2.value.length;

            //this.DbgOpener.document.f2.id2.setSelectionRange(i,i);
        }
    },
    DBG_TextClick : function(){

         if(null==this.Dbg_EnableFlag){
             this.Dbg_EnableFlag = 0;
         }
         var sFlg = ""+this.Dbg_EnableFlag;
         if( sFlg.length >= 5 ){
             window.status = "";
			 return;
         }
         this.Dbg_EnableFlag++;
         this.iBodyMove = true;


		 window.status = this.Dbg_EnableFlag;
		 //alert(this.Dbg_EnableFlag);
         if(1234==this.Dbg_EnableFlag)//password is 1234
         {
            alert(this.Dbg_EnableFlag);
            this.DbgOpener = window.open("dbg/dbg2.htm", "db2", "width=800,height=600");
                           //window.open('dbg2.htm', 'dbg2','width=800,height=600')
         }
         if(4321==this.Dbg_EnableFlag1)//password is 123
         {
            alert(this.Dbg_EnableFlag);
            this.DbgOpener1 = window.open("dbg/dbg1.htm", "db1", "width=800,height=600");
                           //window.open('dbg2.htm', 'dbg2','width=800,height=600')
         }
    },
    DBG_BodyMove : function(){
         if( this.iBodyMove && true==this.iBodyMove){
             this.iBodyMove =false;
             this.Dbg_EnableFlag *= 10;
         }
    },


getPaddingNum : function(i,len)
{
    var s0padding = "00000000000" + i;
    var j = s0padding.length - len;
    if(i<0) alert("getPaddingNum:"+j);
    var s = s0padding.substr(j, len);
    return s;
}

}//////////

