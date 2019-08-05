


const renderAds= (ads)=>{
    $("#ads").html(
        ads.map((value)=>{
            return `
                <div class="polaroid">
                    <img src="${value.image}" alt="">
                    <div class="contents">
                        <div class="title">
                            ${value.title}
                        </div>
                        <br/>
                        <a class="date" href="${value.link}">${value.link}</a>
                        <br/><br/>
                        <span class="btn btn-good" onclick="openUpdateAdDialog(${value.id})">수정</span>
                        <span class="btn btn-alert" onclick="openRemoveAdDialog(${value.id})">삭제</span>
                    </div>
                </div>
            `;
        })
    );
}


const requestCreateAd= ()=>{
    const title= $("#ad_title").val();
    const image= $("#ad_image").val();
    const link= $("#ad_link").val();

    if(!title || !image || !link){
        makeToast('입력칸을 모두 채워야 광고 등록이 가능합니다');
        return;
    }

    onLoading();
    createAd(title, image, link, (result, e)=>{
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

const requestUpdateAd= (id)=>{
    const title= $("#ad_title").val();
    const image= $("#ad_image").val();
    const link= $("#ad_link").val();

    if(!title || !image || !link){
        makeToast('입력칸을 모두 채워야 광고 등록이 가능합니다');
        return;
    }

    onLoading();
    updateAd(id, title, image, link, (result, e)=>{
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

const requestRemoveAd= (id)=>{
    onLoading();
    removeAd(id, (result, e)=>{
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

const requestRemoveAllAd= ()=>{
    onLoading();
    removeAllAd((result, e)=>{
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

const openUpdateAdDialog= async (id)=>{
    onLoading();
    await getAd(id, (result, data)=>{
        openDialog(
            `
            <h2>광고 정보 수정</h1>
            <br/><br/>
            <span class="input-label">광고 제목</span>
            <input type="text" id="ad_title" placeholder="title" value="${data.ad.title}"><br/>
            <span class="input-label">광고 이미지 주소</span>
            <input type="text" id="ad_image" placeholder="image link" value="${data.ad.image}"><br/>
            <span class="input-label">광고 클릭시 이동할 링크</span>
            <input type="text" id="ad_link" placeholder="link" value="${data.ad.link}"><br/>
            <br/><br/>
            <span class="btn btn-good" onclick="requestUpdateAd(${id})">수정</span>
            `
        );
    });
    offLoading();
}

const openRemoveAdDialog= (id)=>{
    openDialog(
        `
        <h2>선택된 광고 삭제</h1>
        <br/>
        <h4>삭제된 데이터는 되돌릴 수 없습니다. 삭제하시겠습니까?</h4>
        <br/><br/>
        <span class="btn btn-alert" onclick="requestRemoveAd(${id})">삭제</span>
        `
    );
}
const openRemoveAllAdDialog= ()=>{
    openDialog(
        `
        <h2>등록된 모든 광고 삭제</h1>
        <br/><br/>
        <span class="btn btn-alert" onclick="requestRemoveAllAd()">삭제</span>
        `
    );
}
const openCreateAdDialog= ()=>{
    openDialog(
        `
        <h2>신규 광고 등록</h2>
        <br/><br/>
        <span class="input-label">광고 제목</span>
        <input type="text" id="ad_title" placeholder="title"><br/>
        <span class="input-label">광고 이미지 주소</span>
        <input type="text" id="ad_image" placeholder="image link"><br/>
        <span class="input-label">광고 클릭시 이동할 링크</span>
        <input type="text" id="ad_link" placeholder="link"><br/>
        <br/><br/>
        <span class="btn btn-good" onclick="requestCreateAd()">생성</span>
        `
    );
}
const init= ()=>{
    onLoading();

    getAds((result, data)=>{
        offLoading();
        if(result){
            renderAds(data.ads);
            $("#ads_status").html(`${data.ads.length}개의 광고가 게시중입니다`);
        }else{
            makeToast(data.toString());
        }
    });
}
$(document).ready(()=>{
    init();
});

