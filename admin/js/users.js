

const requestCreateUser= async ()=>{
    const id= $("#user_id").val();
    const pw= $("#user_pw").val();
    const name= $("#user_name").val();
    
    if(!id || !pw || !name){
        makeToast('입력값을 모두 입력해야 합니다');
        return;
    }

    onLoading();
    await signup(id, pw, name, (result, data)=>{
        if(result){
            makeToast('계정 생성 완료');
            closeDialog();
            init();
        }else{
            makeToast(`실패: ${data}`);
        }
    });
    offLoading();
}
const openCreateUserDialog= ()=>{
    
    openDialog(
        `
        <h2>유저 추가</h2>
        <br/><br/>
        <span class="input-label">아이디</span>
        <input type="text" id="user_id" placeholder="id"><br/>
        <span class="input-label">패스워드</span>
        <input type="text" id="user_pw" placeholder="pw"><br/>
        <span class="input-label">성명</span>
        <input type="text" id="user_name" placeholder="name"><br/>
        <br/><br/>
        <span class="btn btn-good" onclick="requestCreateUser()">계정 생성</span>
        `
    );
};

const init= async ()=>{
    onLoading();

    await getUsers((result, data)=>{
        if(result){
            const htmls= data.users.map((value)=>{
                return `
                    <tr>
                        <td>${value.id}</td>
                        <td>${value.cash}</td>
                        <td>${value.isEmergency}</td>
                        <td>${value.role}</td>
                        <td>${value.createdAt}</td>    
                    </tr>
                `;
            }).join(''); 
            $("#users").html(
                `
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>캐시(원)</th>
                            <th>위험상황</th>
                            <th>권한</th>
                            <th>계정 생성일</th>
                        </tr>
                        ${htmls}
                    </table>
                `
            );
            $("#users_status").html(`${data.users.length}명의 유저가 가입되어 있습니다`);
        }else{
            makeToast(`실패: ${data}`)
        }
    });

    offLoading();
};

$(document).ready(()=>{
    init();
});