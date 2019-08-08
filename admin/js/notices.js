



const requestCreateNotice= ()=>{
    const title= $("#notice_title").val();
    const content= $("#notice_content").val();

    if(!title || !content){
        makeToast('입력칸을 모두 채워야 공지사항 등록이 가능합니다');
        return;
    }

    onLoading();
    createNotice(title, content, (result, e)=>{
        offLoading();
        if(result){
            closeDialog();
            makeToast('등록 완료');
            init();
        }else{
            makeToast(`실패: ${e}`);
        }
    });
}

const requestUpdateNotice= (id)=>{
    const title= $("#notice_title").val();
    const content= $("#notice_content").val();

    if(!title || !content){
        makeToast('입력칸을 모두 채워야 공지사항 등록이 가능합니다');
        return;
    }

    onLoading();
    updateNotice(id, title, content, (result, e)=>{
        offLoading();
        if(result){
            closeDialog();
            makeToast('수정 완료');
            init();
        }else{
            makeToast(`실패: ${e}`);
        }
    });
}
const requestRemoveNotice= (id)=>{
    onLoading();
    removeNotice(id, (result, e)=>{
        offLoading();
        if(result){
            closeDialog();
            makeToast('삭제되었습니다');
            init();
        }else{
            makeToast(`실패: ${e}`);
        }
    });
}

const requestRemoveAllNotice= ()=>{
    onLoading();
    removeAllNotice((result, e)=>{
        offLoading();
        if(result){
            closeDialog();
            makeToast('삭제되었습니다');
            init();
        }else{
            makeToast(`실패: ${e}`);
        }
    });
}

const openRemoveNoticeDialog= (id)=>{
    openDialog(
        `
        <h2>선택된 공지사항 삭제</h1>
        <br/>
        <h4>삭제된 데이터는 되돌릴 수 없습니다. 삭제하시겠습니까?</h4>
        <br/><br/>
        <span class="btn btn-alert" onclick="requestRemoveNotice(${id})">삭제</span>
        `
    );
}
const openRemoveAllNoticeDialog= ()=>{
    openDialog(
        `
        <h2>등록된 모든 공지사항 삭제</h1>
        <br/><br/>
        <span class="btn btn-alert" onclick="requestRemoveAllNotice()">삭제</span>
        `
    );
}
const openCreateNoticeDialog= ()=>{
    openDialog(
        `
        <h2>신규 공지사항 등록</h1>
        <br/><br/>
        <span class="input-label">공지사항 제목</span>
        <input type="text" id="notice_title" placeholder="title"><br/>
        <span class="input-label">공지사항 내용</span>
        <textarea autofocus id="notice_content" placeholder="content"></textarea><br/>
        <br/><br/>
        <span class="btn btn-good" onclick="requestCreateNotice()">생성</span>
        `
    );
}

const openUpdateNoticeDialog= async (id)=>{
    onLoading();
    await getNotice(id, (result, data)=>{
        if(result){
            openDialog(
                `
                <h2>공지사항 수정</h1>
                <br/><br/>
                <span class="input-label">공지사항 제목</span>
                <input type="text" id="notice_title" placeholder="title" value="${data.notice.title}"><br/>
                <span class="input-label">공지사항 내용</span>
                <textarea id="notice_content" autofocus placeholder="content" value="${data.notice.content}"></textarea><br/>
                <br/><br/>
                <span class="btn btn-good" onclick="requestUpdateNotice(${id})">수정</span>
                `
            );
        }else{
            makeToast(`실패: ${data}`);
        }
    });
    offLoading();
}

const renderNotices= (notices)=>{
    $("#notices").html(
        notices.map((value)=>{
            return `
                <div class="polaroid">
                    <div class="contents">
                        <div class="title">
                            ${value.title}
                        </div>
                        <div class="date">
                            ${value.createdAt}
                        </div>
                        <br/>
                        <div class="content">${value.content}</div>
                        <br/><br/>
                        <span class="btn btn-good" onclick="openUpdateNoticeDialog(${value.id})">수정</span>
                        <span class="btn btn-alert" onclick="openRemoveNoticeDialog(${value.id})">삭제</span>
                    </div>
                </div>
            `;
        })
    );

    $("#notices_status").html(`${notices.length}개의 공지사항이 게시중입니다`);
}


const init= async ()=>{
    onLoading();
    await getNotices((result, data)=>{
        if(result){
            renderNotices(data.notices);
        }else{
            makeToast(`실패: ${data}`);
        }
    });

    offLoading();
};

$(document).ready(()=>{
    init();
});