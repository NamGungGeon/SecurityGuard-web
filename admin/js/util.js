const openDialog= (body)=>{

    $("body").append(
        `
        <div class="dialog-wrapper" onclick="closeDialog()">
            <div class="dialog" id="dialog">
                ${body}
            </div>
        </div>
        `
    );
    $("#dialog").click(e=>{
       e.stopPropagation(); 
    });
};


const closeDialog= ()=>{
    $(".dialog-wrapper").remove();
}


const randomStr= ()=>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 30; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}


const onLoading= ()=>{
    if($("#loading").length>1){
        print('Already loading is progressed');
        return;
    }
    const loading= `<div id="loading"><div class="lds-roller" id="loadingAnimaion"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;
    $("body").append(loading);
}

const offLoading= ()=>{
    $("#loading").remove();
}


const makeToast= (text)=>{
    let wrapper= $("#toaster");
    if(wrapper.length== 0){
        $("body").append(`<div class="toast-wrapper" id="toaster"></div>`);
        wrapper= $("#toaster");
    }

    const rand= randomStr();
    wrapper.append(`<div class="toast" id="toast_${rand}">${text}</div>`);
    
    console.log(text);

    window.setTimeout(()=>{
        $(`#toast_${rand}`).fadeOut('slow', ()=>{
            $(`#toast_${rand}`).remove();
        });
    }, 1500);
}



const getUrlParams= () =>{
    let qs= document.location.search;
    qs = qs.split('+').join(' ');

    let params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}
