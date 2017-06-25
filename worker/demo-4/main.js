(function() {
    const $nav = document.querySelector('nav');
    const $container = document.querySelector('main');
    
    $nav.addEventListener('click', navigate);

    function navigate(event) {
        const element = event.target;
        if (element.nodeName === 'BUTTON') {
            fetch(element.dataset.path)
                .then((response) => {
                    return response.text();
                })
                .then((data) => {
                    $container.innerHTML = data;
                })
                .catch(()=>{
                    $container.innerHTML = "Can't load resources.";
                })
        }
    }

})();

(function(){
    navigator.serviceWorker.register('sw.js', { 'scope': './'})
        .then((registration)=>{
            registration.active.postMessage('Hello SW');
            console.log('SW registered');
        });
    
    navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Message received by client :', event.data);
    });
})();