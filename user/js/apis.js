const buildHeader= (_token)=>{
    return {
        authorization: `Bearer ${_token? _token: token}`
    }
};

const buildUrl= (path)=>{
    return `http://15.164.190.194${path}`
}

const signin= (id, pw, callback)=>{

    return axios.request({
        method: 'POST',
        url: buildUrl('/auth/signin'),
        headers: buildHeader(),
        data: {
            id: id,
            password: pw,
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const signup= (id, pw, name, callback)=>{

    return axios.request({
        method: 'POST',
        url: buildUrl('/auth/signup'),
        headers: buildHeader(),
        data: {
            id: id,
            password: pw,
            name: name
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}


const getUser= (user, callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/users/${user.id? user.id: uid}`),
        headers: buildHeader(user.token),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const getUsers= (callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/users`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const getAds= (callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl('/ads'),
        headers: buildHeader()
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const getAd= (id, callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/ads/${id}`),
        headers: buildHeader()
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const createAd= (title, image, link, callback)=>{
    return axios.request({
        method: 'POST',
        url: buildUrl('/ads'),
        headers: buildHeader(),
        data: {
            title: title,
            image: image,
            link: link 
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const updateAd= (id, title, image, link, callback)=>{
    return axios.request({
        method: 'PUT',
        url: buildUrl('/ads/'+ id),
        headers: buildHeader(),
        data: {
            title: title,
            image: image,
            link: link 
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const removeAd= (id, callback)=>{
    return axios.request({
        method: 'DELETE',
        url: buildUrl(`/ads/${id}`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const removeAllAd= (callback)=>{
    return axios.request({
        method: 'DELETE',
        url: buildUrl(`/ads`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const getAppVersion= (callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/app`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const updateAppVersion= (latest, stable, callback)=>{
    return axios.request({
        method: 'PUT',
        url: buildUrl(`/app`),
        headers: buildHeader(),
        data:{
            latest: latest,
            stable: stable
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const getNotices= (callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/notices`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
};

const getNotice= (id, callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/notices/${id}`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
};
const updateNotice= (id, title, content, callback)=>{
    return axios.request({
        method: 'PUT',
        url: buildUrl(`/notices/${id}`),
        headers: buildHeader(),
        data: {
            title: title,
            content: content,
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
};

const createNotice= (title, content, callback)=>{
    return axios.request({
        method: 'POST',
        url: buildUrl(`/notices`),
        headers: buildHeader(),
        data:{
            title: title,
            content: content,
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}


const removeAllNotice= (callback)=>{
    return axios.request({
        method: 'DELETE',
        url: buildUrl(`/notices`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}


const removeNotice= (id, callback)=>{
    return axios.request({
        method: 'DELETE',
        url: buildUrl(`/notices/${id}`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const getLocations= (callback)=>{
    return axios.request({
        method: 'GET',
        url: buildUrl(`/locations`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const createLocation= (lat, lng, name, level, callback)=>{
    
    return axios.request({
        method: 'POST',
        url: buildUrl(`/locations`),
        headers: buildHeader(),
        data:{
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            name: name,
            level: level,
        }
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}
const removeLocation= (id, callback)=>{
    return axios.request({
        method: 'DELETE',
        url: buildUrl(`/locations/${id}`),
        headers: buildHeader(),
    }).then(response=>{
        console.log(response.data);
        callback(true, response.data);
    }).catch(e=>{
        callback(false, e);
        console.log(e);
    });
}

const myServer= {
    police: (callback)=>{
        return axios.request({
            method: 'GET',
            url: `http://cpsp.site/security-guard/police.php`,
        }).then(response=>{
            console.log(response.data);
            callback(true, response.data);
        }).catch(e=>{
            callback(false, e);
            console.log(e);
        });
    },
    cctv: (callback)=>{
        return axios.request({
            method: 'GET',
            url: `http://cpsp.site/security-guard/cctv.php`,
        }).then(response=>{
            console.log(response.data);
            callback(true, response.data);
        }).catch(e=>{
            callback(false, e);
            console.log(e);
        });
    },
    safehome: (callback)=>{
        return axios.request({
            method: 'GET',
            url: `http://cpsp.site/security-guard/safehome.php`,
        }).then(response=>{
            console.log(response.data);
            callback(true, response.data);
        }).catch(e=>{
            callback(false, e);
            console.log(e);
        });
    },
    logistics: (callback)=>{
        return axios.request({
            method: 'GET',
            url: `http://cpsp.site/security-guard/logistics.php`,
        }).then(response=>{
            console.log(response.data);
            callback(true, response.data);
        }).catch(e=>{
            callback(false, e);
            console.log(e);
        });
    },
    getAll: async (callback)=>{
        
        const arr= [];
        await myServer.police((result, data)=>{
            data.data.map(value=>{
                value.level= -1;
                arr.push(value);
            });
        });
        console.log('police end');
        await myServer.cctv((result, data)=>{
            data.data.map(value=>{
                value.level= -2;
                arr.push(value);
            });
        });
        console.log('cctv end');
        await myServer.safehome((result, data)=>{
            data.data.map(value=>{
                value.level= -3;
                arr.push(value);
            });
        });
        console.log('safehome end');
        await myServer.logistics((result, data)=>{
            data.data.map(value=>{
                value.level= -4;
                arr.push(value);
            });
        });
        console.log('logistics end');
        
        callback(true, arr);
    }
}