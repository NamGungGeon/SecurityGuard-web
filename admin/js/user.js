const target_user= getUrlParams().user;
if(!target_user){
    alert('비정상적인 접근입니다');
    window.location= './';
}


