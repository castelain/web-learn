'use strict';

function parsePromised(){
    Promise.resolve(process.argv[2]).then(JSON.parse).catch(function(error){
        console.log(error.message);
    });
}
parsePromised();