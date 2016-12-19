<?php
@session_start();
if( !isset($_SESSION["LOGIN_USER"]) ){
	header("Location: ./login/");
}

// Set no caching. Need php.ini: output_buttering=4096.
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");



require_once ("../_uti/Uti.php");
?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Work</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="sample.css" />
<script type="text/javascript" src="../adapters/jquery.js">    </script>

<style type="text/css">
html,body {
	//height: 100%;
	width: 100%;
	margin: 0px;
	padding: 0px 0px 0px 3px; //
	//overflow: hidden;
}

span.op {
	position: absolute;
	top: 0px;
	right: 0%;
	margin-left: -250px;
}

a.path { //
	background-color: #dddd00;
	margin: 0px;
	padding: 0px 10px 0px 10px;
}

a.create_Dir { //
	background-color: #aaaaaa;
	margin: 0px;
	padding: 0px 10px 0px 10px;
}

a.create_File {
	margin: 0px;
	padding: 0px 10px 0px 10px;
}
a:hover { background: #aaaaff;}
</style>




<script type="text/javascript"> 

    $(document).ready(function(){               

    $("#file").click(function(){        
	});/////$("#file").click(function(){   
	
    $("#refresh").click(function(){   
        var fname = $(this).attr("fname");
        //alert(fname);
        window.open("./au2refresh.htm?fname="+fname, "_blank");
    });////




    $("#createDir").click(function(){   
    	var cwd=$("#getcwd").html();  
    	var ret=prompt("Create Diretroy in \n"+cwd , "");
    	if (null==ret) return;
        //alert(fname);WorkCreateDirFtp.php?dir=$dir
        cwd = cwd + ret;  
        if( true==confirm("Are you sure to create dir: \n\n"+cwd) ){
        	window.location.href="WorkCreateDir.php?dir="+cwd;
    	}
        
    });////
    $("#CreateFile").click(function(){   
    	var cwd=$("#getcwd").html();  
        cwd=$.trim(cwd);
    	var ret=prompt("Create File in \n"+cwd , "");
    	if (null==ret) return;
        //alert(fname);WorkCreateDirFtp.php?dir=$dir
        cwd = cwd + ret;  
        if( true==confirm("Are you sure to create File: \n\n"+cwd, "ff") ){
        	window.location.href="WorkCreateFile.php?dir="+cwd;
    	}        
    });////


    $("#gosearch").click(function(){  
    	var dir=$("#getcwd").html();  
    	window.open("./search/index.php?dir="+dir, "_blank");
        
    });////
    $("#goModifyer").click(function(){  
    	var dir=$("#getcwd").html();  
    	window.open("./modifyer/index.php?dir="+dir, "_blank");
        
    });
    

    $("#gosearch_html").click(function(){  
    	var dir=$("#getcwd").html();  
    	window.open("./search_html/index.php?dir="+dir, "_blank");
        
    });////
	
	$("#upload_file").click(function(){  
    	var dir=$("#getcwd").html();  
    	window.open("./upload/index.php?dir="+dir, "_blank");
        
    });////

    $("#goBackupDir").click(function(){  
    	var dir=$("#getcwd").html();  
		dir = $.trim(dir);		
		dir = dir.substring(0, dir.length - 1);
		var arr = dir.split("/");
		if(arr.length==0) return alert("err");
		var node=arr[arr.length-1];

    	var node2 = node + "_bak";
    	var ret=prompt("Backup Suffix:" , "_bk");
    	if (null==ret || node2.length==0) return alert("empty");
        //alert(fname);WorkCreateDirFtp.php?dir=$dir
        var dir2 = dir + ret;  
        ret = prompt(dir +"\nBackup as: \n", dir2) ;
    	if(null==ret || ret.length==0) return alert("empty");
        var url = "WorkBackupDir.php?dir="+dir+"&dir2="+ret;
        alert(url);
        window.open(url,"","width=700,height=600,scrollbars=yes, resizable=yes,");      
    });////

    $("a.filelink").mouseover(function(){  
        var href = $(this).attr("href");
        var width = 10+$("#filelist").width();
        var pos = $("#filelist").position();
        //alert(href);
        $("#imgHoldr").css("position","fixed").css("top",77).css("left",width);
        $("#imger").attr("src",href);
        $("#imgUrl").html(href);
        
        $("a").css("background", "");
        $(this).css("background", "#aaaaff");
    
    });////
    $("a[href2]").click(function(){  
        var href = $(this).attr("href2");
		window.open(href);
    });////

    
    
    });///////////////////////////////$(document).ready(function(){    

    </script>

</head>

<body>



<?php
class ShowExplorer{

	public $imgArr=Array();

	public function showExplorePage(){

		$REFRESHER = $_SERVER["REQUEST_URI"];
		$REFRESHER = str_replace("index.php", "autorefresh.htm", $REFRESHER);


		$THISFILE = basename(__FILE__);



		$dir = "../../../"; //getcwd();

		if( isset($_GET["dir"]) && strlen($_GET["dir"])>0 && file_exists($_GET["dir"])){
			$dir = $_GET["dir"];
		}
		$dir=realpath($dir);


		$docRoot = str_replace( $_SERVER["SCRIPT_NAME"], "", realpath(__FILE__) ) . "/";
		//echo $docRoot . "<hr/>";

		chdir( $dir ); //must change to dir to scan.
        
        $arrNodes=explode("/",$dir);


		echo "<a id='getcwd'>" . $dir . "/ </a>  &nbsp; &nbsp;  &nbsp; &nbsp; (". count($arrNodes).")";
		echo "<span class='op'>";
		echo " | <a id='goBackupDir'> BackupDir </a>";
		echo " | <a class='create_Dir' id='createDir' >CreateDir</a>";
		echo " | <a class='create_File' id='CreateFile'>CreateFile</a> ";
		echo " | <a id='upload_file'>Upload</a> ";
		echo " | <a id='gosearch'> Search </a>";
        echo " | <a id='goModifyer'> Modifyer... </a>";

		echo "</span>";
		echo "\n<hr/>\n";


		$folders = "<a class='path' title='goto parent folder' href='$THISFILE?dir=". dirname($dir) . "'> .    .</a><br>";
		$files="";
		//echo "<a class='path' title='goto parent folder' href='$THISFILE?dir=". dirname($dir) . "'> .    .</a>\n";


		$idx=0;

		foreach ( scandir( $dir, 0) as $i => $entry ) {

			$fullpath = realpath( $entry );
            $fullpath=str_replace("\\","/",$fullpath);
            
			$locFile = str_replace( "/mnt/hgfs/htdocs/", "/", $fullpath );  //for ubuntu link -s /mnt/hgfs/htdocs /var/wwww
			$locFile = str_replace( "/www/99k.org/p/l/a/plastron777/htdocs/", "/", $locFile );  //
			$locFile = str_replace( "/www/99k.org/g/o/l/golden-apple/htdocs/", "/", $locFile );
			$locFile = str_replace( "/usr/share/apache2/htdocs/", "/", $locFile );  //for umg box
			//$locFile = str_replace( "/membri/plastron777/", "/", $locFile );
			$locFile = str_replace( $docRoot, "/", $locFile ); //for altervista
			$locFile = str_replace( $_SERVER["DOCUMENT_ROOT"], "", $locFile ); //for umg


            $url=$this->path2url($fullpath);


			if ( $entry == "."  || $entry == "..") {
				continue;
			}

			if ( is_dir($entry) ){

				$folders .= "<a class='path' href='$THISFILE?dir=$fullpath'>$entry</a> <br/>\n";

			}
			else{
				$idx+=1;

				$files .= "<a id='refresh' fname='$locFile'>*</a><a> </a>";
				$files .= "<a class='viewfile' href='Work.htm?filename=$fullpath'> $idx </a>";
				$files .= "<a id='del'> . </a><a class='filelink' href2='$url' title='$fullpath'>$entry</a><br> \n";

				$ext = pathinfo($locFile, PATHINFO_EXTENSION);
				if( in_array($ext, Array("jpg","jpeg","img","png","gif")) ){
					$this->imgArr[]=$locFile;
				}

			}
		}

		//echo "<table border='1'><tr><td>$folders</td><td>$files</td></tr>";
		echo "<table border='1' bgcolor='#ffFF0' id='dirlist'><tr><td>$folders</td></tr></table><hr/>";
		echo "<table border='1' bgcolor='#ffFFff' id='filelist'><tr><td>$files</td></tr></table>";
        echo "REQUEST_URI:" . $_SERVER["REQUEST_URI"]."<hr/>";
        print_r($_SERVER);
	}//showExplorePage

    function path2url($file, $Protocol='http://') {
        $file=str_replace("\\","/",$file);
        return $Protocol.$_SERVER['HTTP_HOST']."/".str_replace($_SERVER['DOCUMENT_ROOT'], '', $file);
    }

	public function showImgs(){
		if( count($this->imgArr) ===0) return; 
		echo "<div id='imgHoldr'><span id='imgUrl'></span><br/><img id='imger'></img></div>";
		foreach( $this->imgArr as $idx=>$relativeFile){
			echo $idx;
			$basename=basename($relativeFile);
			echo "<img src='$relativeFile' title='$basename' width='30' />";
			
			if($idx>=10){
				echo "<br/><a id='moreImg'>more...</a>";
				break;
			}
			
			//$image = new Imagick($relativeFile);
			// If 0 is provided as a width or height parameter,
			// aspect ratio is maintained
			//$image->thumbnailImage(100, 0);
			//echo $image;
		}
	}
}


//$ret = glob("/usr/shared/apache2/*");
//echo count($ret) . "<br/>";

$se = new ShowExplorer();
$se->showExplorePage();


echo "<hr/>";
$se->showImgs();

echo "<br/><br/><br/>";
?>

<div id="imgHolder"></div>

</body>

</html>