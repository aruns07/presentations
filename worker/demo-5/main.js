
if (Notification.permission !== 'granted') {
    Notification.requestPermission((permission) => {
        if (permission === 'granted') {
            new Notification('Hi there');
        }
    });
}


(function(){
    navigator.serviceWorker.register('sw.js', { 'scope': './'})
        .then((registration)=>{});

})();