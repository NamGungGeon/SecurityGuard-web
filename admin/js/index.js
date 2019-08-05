

if(token && uid){
    window.location= './ads.php';
}

const login= async ()=>{
    const id= $("#user_id").val();
    const pw= $("#user_pw").val();

    if(!id || !pw){
        makeToast('아이디와 비밀번호를 모두 입력하세요');
        return;
    }
    
    onLoading();
    await signin(id, pw, (result, data)=>{
        if(result){
            //관리자인지 한번 더 검사
            const accessToken= data.accessToken;
            const user= {
                id: id,
                token: accessToken,
            };
            
            getUser(user, (r, d)=>{
                if(r){
                    if(d.user.role=== 'admin'){
                        //관리자
                        $("#id").val(id);
                        $("#token").val(accessToken);
                        
                        $("#letsGo").submit();
                    }else{
                        makeToast(`관리자 권한이 없는 계정입니다`);
                    }
                }else{
                    makeToast(`유저 정보 로드 실패: ${d}`);
                }
            });
        }else{
            makeToast(`로그인 실패: ${data}`);
        }
    });
    offLoading();
}