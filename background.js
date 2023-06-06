const userId = 682795079;
const token = 'h334q8v9eo355he1gktbebddkp39yu';
const clientID = 'dvzkv1xj36k2pntmjqglqflbeqf5hx';
const twitchUrl = 'https://www.twitch.tv/whiteakitout789';

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const headers = {
    'Authorization' : `Bearer ${token}`,
    'Client-ID': clientID
}


var LiveIsOn = false;

const cb = function (json) {
    if (json.data.length && !LiveIsOn){
        setIcon('css/images/live_on.png');
        chrome.notifications.create('liveOn', {
            title: 'Whiteakitout est en Live!',
            iconUrl: 'css/images/get_started48.png',
            message: 'Viens me rejoindre en Stream :D !',
            type: 'basic'
        });
        LiveIsOn = true;
    } else {
        setIcon('css/images/live_off.png');
        LiveIsOn = false;
        
    }
}

function fetchTwitchApi(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((reponse) => {
        return reponse.json();
    }).then((json) => cb(json));
}

function setIcon(path){
    chrome.action.setIcon({ path: path });
}
fetchTwitchApi(url, headers, cb);

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twitchUrl
    })
});

chrome.alarms.create({ periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchApi(url, headers, cb)
});


