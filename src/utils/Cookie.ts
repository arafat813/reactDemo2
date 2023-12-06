function setCookie(key: any, value: any, maxAge=365*24*60*60*1000) {
    var d = new Date();
    d.setTime(d.getTime()+(maxAge));
    var expires = "expires="+d.toGMTString();
    document.cookie = key + "=" + value + "; " + expires;
}
//
function getCookie(key: any, defaultValue?: any) {
    var name = key + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return defaultValue;
}

function existCookie(key: any) {
    return getCookie(key) !== null;
}

function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

export {
    setCookie,
    getCookie,
    existCookie,
    clearAllCookie
}