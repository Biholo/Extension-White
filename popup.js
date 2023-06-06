 const userId = 682795079;
const token = 'h334q8v9eo355he1gktbebddkp39yu';
const clientID = 'dvzkv1xj36k2pntmjqglqflbeqf5hx';

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const headers = {
    'Authorization' : `Bearer ${token}`,
    'Client-Id': clientID
}

const ytbPop =  document.getElementById('pop-youtube')
const twtPop =  document.getElementById('pop-twitch')
const bg =  document.getElementById('bg')
const bm =  document.getElementById('bm')
const youtube =  document.getElementById('youtube')
const twitch =  document.getElementById('twitch')
const off =  document.getElementById('off')
const on =  document.getElementById('on')



twtPop.addEventListener("click", ()=> {
    ytbPop.classList.remove("active");
    twtPop.classList.add("active")
    bg.classList.remove("h-active")
    bm.classList.add("h-active")
    youtube.classList.add("switch");
    twitch.classList.remove("switch");
})

ytbPop.addEventListener("click", ()=> {
    ytbPop.classList.add("active");
    twtPop.classList.remove("active")
    bm.classList.remove("h-active")
    bg.classList.add("h-active")
    youtube.classList.remove("switch");
    twitch.classList.add("switch");
})

const cb = function (json) {
    if (json.data.length) {
        
        on.classList.remove('switch')
        off.classList.add('switch')
    } else  {
        on.classList.add('switch')
        off.classList.remove('switch')
    }
}

function fetchTwitchApi(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((reponse) => {
        return reponse.json();
    }).then((json) => cb(json));
}


fetchTwitchApi(url, headers, cb)
 



