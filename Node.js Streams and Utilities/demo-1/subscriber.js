const observer = require('./observer');

function subscribe(){
    observer.on('alert', (data) => {
        console.log('Event reveiced');
        console.log(data);
    })
}

subscribe();