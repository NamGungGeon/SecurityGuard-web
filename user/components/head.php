
<?php
    session_start();
    
    class Request{
        public static function post($param='', $isEssential=false){
            $value= $_POST[$param];
            if($isEssential== true){
                if($value== null || $value=== ''){
                    $json['resultCode']= Result::$PARAMETER_ABSENT;
                    echo_json($json);
                    exit();
                }
            }else{
                if($value== null || $value=== ''){
                    return null;
                }   
            }
            return $value;
        }
        public static function get($param='', $isEssential=false){
            $value= $_GET[$param];
            if($isEssential== true){
                if($value== null || $value=== ''){
                    $json['resultCode']= Result::$PARAMETER_ABSENT;
                    echo_json($json);
                    exit();
                }
            }else{
                if($value== null || $value=== ''){
                    return null;
                }   
            }
            return $value;
        }
    }
    
    $isDev= false;
    if($isDev){
        error_reporting(E_ALL);
        ini_set('display_errors', '1');
    }else{
        error_reporting(0);
    }
    //get token, uid from passed data.
    $temp= Request::post('token');
    if($temp!= null) $_SESSION['token']= $temp;
    $temp= null;
    $temp= Request::post('uid');
    if($temp!= null) $_SESSION['uid']= $temp;
    $token= $_SESSION['token'];
    $uid= $_SESSION['uid'];
?>

<title>
    시큐리티 가드
</title>

<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">

<link rel="stylesheet" href="./css/animations.css">
<link rel="stylesheet" href="./css/loading.css">
<link rel="stylesheet" href="./css/basic.css">
<link rel="stylesheet" href="./css/dialog.css">


<script>
    const uid= "<?php echo $uid;?>";
    const token= "<?php echo $token;?>";
    

</script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="./js/util.js"></script>
<script src="./js/apis.js"></script>
