
var versionHolder= null;


const requestVersionUpdate= ()=>{
    const latest= $("#version_latest").val();
    const stable= $("#version_stable").val();
    
    if(!latest || !stable){
        makeToast('입력값은 생략될 수 없습니다');
        return;
    }

    onLoading();
    updateAppVersion(latest, stable, (result, e)=>{
        offLoading();
        if(result){
            closeDialog();
            init();
            makeToast('변경되었습니다');
        }else{
            makeToast(`실패: ${e}`);
        }
    });
}
const openVersionUpdateDialog= ()=>{
    if(!versionHolder)
        return;

    openDialog(
        `
        <h2>버전 정보 변경</h1>
        <h6 class="description"}>(네이밍 규칙 x.y.z)</h6>
        <br/><br/>
        <span class="input-label">최소 실행 가능 버전</span>
        <input type="text" id="version_stable" placeholder="stable version" value="${versionHolder.stable}"><br/>
        <span class="input-label">최신 버전</span>
        <input type="text" id="version_latest" placeholder="latest version" value="${versionHolder.latest}"><br/>
        <br/><br/>
        <span class="btn btn-good" onclick="requestVersionUpdate()">변경</span>
        `
    );
}

const init= async ()=>{
    onLoading();
    await getAppVersion((result, data)=>{

        if(result){
            versionHolder= data;
            $("#app-stable-version").html(data.stable);
            $("#app-latest-version").html(data.latest);
        }else{
            makeToast(`실패: ${data}`);
        }
    });

    offLoading();
}

$(document).ready(()=>{
    init();
});