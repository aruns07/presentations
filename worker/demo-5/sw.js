self.addEventListener('push', (event) => {
    console.log(event);
    self.registration.showNotification('Chat App', {
        body: 'New message',
        icon: 'sample.png'
    });
});

self.addEventListener('notificationclick', (event) => {
    event.waitUntil(
        self.clients.matchAll()
        .then((clientList)=>{
            if (clientList[0]) {
                return clientList[0].focus();
            } else {
                return clients.openWindow('/worker/demo-5/index.html');
            }
        })
    );
})