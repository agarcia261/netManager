
const Client = require('ssh2').Client;
fs = require('fs')
// path = require('path')
// node_ssh = require('node-ssh')
// ssh = new node_ssh()

module.exports = {
    adminDisplay : function (req, res){
 
var conn = new Client();
conn.on('ready', function() {
    console.log('Client :: ready');
    conn.shell(function(err, stream) {
        let datatobSent=""
        if (err) throw err;
        stream.on('close', function() {
            console.log('Stream :: close');
            conn.end();

            const regex = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[^\r]*/g
            let resu = datatobSent.match(regex)
            let newArray=[]
            let filteredArray=[]            

            // console.log(resu)
            function splitArrays (array){
                for (let i=0; i<array.length; i++){

                    newArray.push(array[i].split(" "))

                    for (let j=0; j<newArray[i].length; j++){
                        console.log(newArray[i].filter(function (el) {
                                     return el != null;
                               }))
                    }

                    console.log(newArray)
                    console.log("############################")

                    // for (let j=0; j<newArray.length; j++){
                    //     console.log(newArray[j])
                    //     // if (newArray[j]==''){
                    //         console.log("entering here")
                    //         // newArray.splice(j, 1);
                    // //         let filteredArray1 = newArray[j].filter(function (el) {
                    // //         return el != null;
                    // //   });
                    // //   filteredArray.push(filteredArray1)
                    //     // }
                    // }
                }
            }
            splitArrays(resu)

            
            let result = [{
                //ipAddresxs:datatobSent.substring(index, index+11),
                macAddress:[],
                expires:[],
                interface:[],
            }]
            //JSON.parse(datatobSent)
            // console.log(datatobSent)
             res.send(datatobSent)

        })
        .on('data', function(data) {
            // console.log(""+data)
            datatobSent = datatobSent + data;

        }).stderr.on('data', function(data) {
            console.log('STDERR: ' + data);
        });
        stream.end('show router arp\nexit\n');
    });
}).connect({
  host: '10.0.0.240',
  port: 22,
  username: 'admin',
  password:'admin',
  algorithms: {
    kex:['diffie-hellman-group1-sha1'],
    },
    // debug: function (output){
    //     console.log(output)
    // }
});
    }

}