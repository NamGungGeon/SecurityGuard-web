


const reports= [];

const requestUpdateReportState= async (idx, wanted)=>{
    onLoading();
    await myServer.updateReport(idx, wanted, (result, data)=>{
        if(result){
            closeDialog();
            makeToast('처리되었습니다');
            init();
        }else{
            makeToast('오류: '+ data);
        }
    });
    offLoading();
}
const openDetailReportDialog= (idx)=>{
    let target= null;
    reports.map((value)=>{
        if(value.idx=== idx)
            target= value;
    });
    
    if(!target){
        makeToast('해당 문의를 찾을 수 없습니다');
        return;
    }
    openDialog(
      `
        <h3>${target.title}</h3>
        <h6>${target.email? `${target.email} 로 답변이 필요합니다`: '답장 불필요'}</h6>
        <p class="description">${target.uploadDate}</p>
        <br/><br/>
        <p>
            ${target.content}
        </p>
        <br/><br/>
        ${
            target.resolved==="0"?
            `<span class="btn btn-good" onclick="requestUpdateReportState(${target.idx}, 1)">답변완료</span>`
            :
            `<span class="btn btn-alert" onclick="requestUpdateReportState(${target.idx}, 0)">답변완료 취소</span>`
        }
        
      `  
    );
}
const requestDeleteReports= async ()=>{
    onLoading();
    await myServer.deleteReports((result, e)=>{
        if(result){
            closeDialog();
            makeToast('답변완료된 모든 문의가 삭제되었습니다');
            init();
        }else{
            makeToast(`실패: ${e}`);
        }
    });
    offLoading();
}
const openDeleteReportsDialog= ()=>{
    openDialog(
        `
            <h3>답변완료된 모든 문의 삭제</h3>
            <p class="description">삭제된 문의내역은 복구되지 않습니다</p>
            <br/><br/>
            <span class="btn btn-alert" onclick="requestDeleteReports()">삭제</span>
        `
    );
}
const init= async ()=>{
    onLoading();

    while(reports.length!= 0) reports.pop();

    await myServer.report((result, data)=>{
        if(result){
            data.data.map((value)=>{
                reports.push(value);
            });

            if(unresolved){
                let exist= false;
                $("#unresolved").html(
                    `<table>
                        <tr>
                            <th>제목</th>
                            <th>업로드 날짜</th>
                            <th>답장 필요</th>
                        </tr>
                        ${reports.map((value)=>{
                            if(value.resolved=== 0){
                                exist= true;
                                return `<tr onclick="openDetailReportDialog('${value.idx}')"><td>${value.title}</td><td>${value.uploadDate}</td><td>${value.email? "Y": "N"}</td></tr>`;
                            }
                        }).join('')}
                    </table>
                    `
                );
                if(!exist) $("#unresolved").html('');
                        
            }
            if(resolved){
                let exist= false;
                $("#resolved").html(
                    `<table>
                        <tr>
                            <th>제목</th>
                            <th>업로드 날짜</th>
                            <th>답장 필요</th>
                        </tr>
                        ${reports.map((value)=>{
                            if(value.resolved=== 1){
                                exist= true;
                                return `<tr onclick="openDetailReportDialog('${value.idx}')"><td>${value.title}</td><td>${value.uploadDate}</td><td>${value.email? "Y": "N"}</td></tr>`;
                            }
                        }).join('')}
                    </table>
                    `
                );
                if(!exist) $("#resolved").html('');
            }
            
            let unresolved_counter= reports.length;
            reports.map((value)=>{
                if(value.resolved=== "1")
                    unresolved_counter--;
            });
            $("#unresolved_status").html(`${unresolved_counter}개의 미답변된 문의가 있습니다`);
            $("#resolved_status").html(`${reports.length- unresolved_counter}개의 답변된 문의가 있습니다`);
        }else{
            makeToast(`실패: ${data}`);
        }
    });
    offLoading();
}

$(document).ready(()=>{
    init();
});