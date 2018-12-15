var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            console.log("Wait");
            var phone ="i am done";
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

     }
);


function ar (){
    console.log("i am ar");
    
}

var askMom = function () {
    willIGetNewPhone
    .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
         // ar();
        });
 ar();
        // .catch(function (error) {
        //     // oops, mom don't buy it
        //     console.log(error.message);
        //  // output: 'mom is not happy'
        // });
};

askMom();
