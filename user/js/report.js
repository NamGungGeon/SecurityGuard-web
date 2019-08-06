const submitReport= async ()=>{
    const email= $("#report_email").val();
    const title= $("#report_title").val();
    const content= $("#report_content").val();

    if(!title || !content){
        makeToast("제목과 내용은 모두 입력해 주세요");
        return;
    }
    
    if(email && !isValidEmail(email)){
        makeToast("올바른 이메일 패턴이 아닙니다<br/>오탈자가 없는지 확인해주세요");
        return;
    }

    onLoading();
    window.setTimeout(()=>{
        offLoading();
        openDialog(
            `
            <h3>입력하신 내용이 성공적으로 접수되었습니다</h3>
            <p class="description">의견을 보내주셔서 감사합니다</p>
            <br/><br/>
            <span class="btn btn-good">e
            `, true
        )
    }, 500);
}