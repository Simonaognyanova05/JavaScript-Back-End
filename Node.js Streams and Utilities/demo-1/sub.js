const observer = require('./observer');

function subscribe(){
    observer.on('alert', (data) => {
        console.log('Inside second subsciber');
        console.log(data);
    })
}

subscribe();