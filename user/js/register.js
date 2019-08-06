const register= async ()=>{
    const name= $("#user_name").val();
    const id= $("#user_id").val();
    const pw= $("#user_pw").val();
    const rpw= $("#user_rpw").val();

    if(!name || !id || !pw || !rpw){
        makeToast('입략값은 모두 입력해야 합니다');
        return;
    }

    if(pw!== rpw){
        makeToast('비밀번호와 비밀번호 확인이 일치하지 않습니다');
        return;
    }

    onLoading();
    await signup(id, pw, name, (result, data)=>{
        if(result){
            openDialog(
                `
                    <h3>가입 완료!</h3>
                    <p class="description">앱에서 이동된 경우 단순히 뒤로가기 버튼을 눌러 앱으로 돌아갈 수 있습니다</p>
                    <br/><br/>
                    <span class="btn btn-good" onclick="moveUrl('./login.php')">로그인 페이지로</span>
                `,
                true,
            )
        }else{
            makeToast(`가입 실패. 중복된 아이디가 존재하는 것 같습니다.`);
        }
    });
    offLoading();
}