
const Client = require('ssh2').Client;
fs = require('fs')
// path = require('path')
// node_ssh = require('node-ssh')
// ssh = new node_ssh()

module.exports = {
    adminDisplay : (req, res) =>{
 
        const conn = new Client();
        conn.on('ready', () => {
            console.log('Client :: ready');
    
            conn.shell((err, stream) =>{
                let datatobSent=""
                if (err) throw err;

                stream.on('close', () => {
                    console.log('Stream :: close');
                    conn.end();

                    const regex = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[^\r]*/g
                    let resu = datatobSent.match(regex)
                    let result = [];            

                    function splitArrays (array){
                        for (let i=0; i<array.length; i++){
                            let tempArray = array[i].split(" ")
                            tempArray = tempArray.filter(function (el) {
                                return el != '';
                            })
                            result.push({
                                ipAddress:tempArray[0],
                                macAddress:tempArray[1],
                                expires:tempArray[2],
                                type:tempArray[3],
                                interface:tempArray[4]
                            })
                        }
                    }
                    splitArrays(resu)
                    res.send(result)

                })

                .on('data', data => {
                    datatobSent = datatobSent + data;
                })
                .stderr.on('data', data => {
                    console.log('STDERR: ' + data);
                });

                stream.end('show router arp\nexit\n');
            });

        })
        .connect({
            host: '10.0.0.240',
            port: 22,
            username: process.env.ROUTER_USERNAME,
            password: process.env.ROUTER_PASSWORD,
            algorithms: {
                kex:['diffie-hellman-group1-sha1'],
                },
                // debug: function (output){
                //     console.log(output)
                // }
        });
    }

}