


const requestCreateLocation= async ()=>{
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

const openCreateLocationDialog= ()=>{
    
    openDialog(
        `
        <h2>위치 추가</h2>
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

const typeFilter= (level)=>{
    switch(level){
        case -1:
            return '경찰서';
        case -2:
            return 'CCTV';
        case -3:
            return '여성안심지킴이집';
        case -4:
            return '여성안심택배함';
        default: 
            return level;
    }
}

const infras= [];
const findInfra= (level, idx, lat, lng)=>{
    let search= null;
    infras.map((value)=>{
        if(value.level== level && value.idx== idx && value.lat== lat && value.lng== lng){
            search= value;
        }
    });
    return search;
}
let currentInfra= null;


const Map= {
    mapView: null,
    init: ()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
    
        Map.mapView= new kakao.maps.Map(container, options);
    },
    marker: null,
    marking: (lat, lng)=>{
        if(Map.marker)
            Map.marker.setMap(null);
        
        Map.marker = new kakao.maps.Marker({
            map: Map.mapView,
            position: new kakao.maps.LatLng(lat, lng)
        });
        Map.moveCamera(lat, lng);
        Map.marker.setMap(Map.mapView);
        Map.marker.setDraggable(true);


        kakao.maps.event.addListener(Map.marker, 'dragend', (e)=>{
            const lat= Map.marker.getPosition().Ga;
            const lng= Map.marker.getPosition().Ha;

            openDialog(
                `
                <h3>위치 변경</h3>
                <p class="description">${currentInfra.name}</p>
                <br/><br/>
                <h4>해당 마커 위치로 위치를 변경하시겠습니까</h4>
                <br/><br/>
                <span class="btn btn-good"  onclick="(()=>{makeToast('개발중'); closeDialog()})()">변경</span>
                <span class="btn btn-alert" onclick="(()=>{Map.marking(${currentInfra.lat}, ${currentInfra.lng}); closeDialog()})()">취소</span>
                `
            , true);
        });
    },
    moveCamera: (lat, lng)=>{
        Map.mapView.setCenter(new kakao.maps.LatLng(lat, lng));
    },
    buildLatlng: (lat, lng)=>{
        return new kakao.maps.LatLng(lat, lng);
    },
}

const init= async ()=>{
    onLoading();
    Map.init();

    await myServer.getAll((result, data)=>{
        if(result){
            const htmls= data.map((value, idx)=>{
                infras.push(value);

                return `
                    <tr onclick="(()=>{Map.marking(${value.lat}, ${value.lng}); currentInfra= findInfra(${value.level}, ${value.idx}, ${value.lat}, ${value.lng})})()">
                        <td>${value.name}</td>
                        <td>${typeFilter(value.level)}</td>
                        <td>${value.addr}</td>
                    </tr>
                `;
            }).join(''); 
            $("#locations").html(
                `
                    <table>
                        <tr>
                            <th>이름</th>
                            <th>타입</th>
                            <th>주소</th>
                        </tr>
                        ${htmls}
                    </table>
                `
            );
            $("#locations_status").html(`${data.length}개의 장소가 저장되어 있습니다`);
        }else{
            makeToast(`실패: ${data}`);
        }
    });

    offLoading();
};

$(document).ready(()=>{
    init();
    makeToast(`이 페이지 로딩은 오래 걸릴 수 있습니다.<br/>최대 1분정도 소요됩니다`);
});

const testcode= ()=>{

    myServer.cctv((result, data)=>{
        let interval= 0;
        data.data.map((value, idx)=>{
            window.setTimeout(()=>{
                createLocation(value.lat, value.lng, value.name, -2, 
                    (result, data)=>{
                        console.log(`${result? '등록됨': data}`);   
                    });
                    
                console.log(`${idx}번째 데이터 처리중`);
            }, interval);
            interval+= 70;
        });
    });


    getLocations((result, data)=>{
        data.locations.map((value, idx)=>{
            if(value.level!= -2)
                return;
            let interval= 0;
            window.setTimeout(()=>{
                removeLocation(value.id, (r, d)=>{
                    console.log(`${r? 'success': 'fail'}: ${idx}`);
                });
            }, interval);
            interval+= 100;
        });
    });
}