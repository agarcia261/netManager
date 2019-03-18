
const Client = require('ssh2').Client;
const db = require('../models')
const fs = require('fs')
const customerController = require("./customersController")
// path = require('path')
// node_ssh = require('node-ssh')
// ssh = new node_ssh()

module.exports = {
    show : (show, vprn, asn, cb) =>{
        let result, command, regex;
        console.log("getting the value")

        switch(show) {
            case "arp":
                result = [];
                command = "show router " + vprn +" arp"
                regex = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[^\r]*/g
               
                break;
            case "bgpsum":
                result = {};
                command = "show router " + vprn +" bgp summary"
                const expr = asn+"[^\r]*";
                regex = new RegExp(expr,"g")  
              break;
            default:
              // code block
          }
        
        // function returnFunction(input){
        //     return cb(result)
        // }            
        const conn = new Client();
        conn.on('ready', () => {
            console.log('Client :: ready');
    
            conn.shell((err, stream) =>{
                let datatobSent=""
                if (err) throw err;

                stream.on('close', () => {
                    console.log('Stream :: close');
                    conn.end();

                    let resu = datatobSent.match(regex)

                    function splitArrays (array){
                        for (let i=0; i<array.length; i++){
                            let tempArray = array[i].split(" ")
                            tempArray = tempArray.filter(function (el) {
                                return el != '';
                            })
                            switch(show) {
                                case "arp":
                                    result.push({
                                        ipAddress:tempArray[0],
                                        macAddress:tempArray[1],
                                        expires:tempArray[2],
                                        type:tempArray[3],
                                        interface:tempArray[4]
                                    })                                  
                                    break;
                                case "bgpsum":
                                    result = {
                                        asn:tempArray[0],
                                        PktRcvd:tempArray[1],
                                        UpDown:tempArray[3],
                                        state:tempArray[4],
                                        familyAddr:tempArray[5]
                                    }                                  
                                    break;
                                default:
                                  // code block
                              }

                        }
                    }
                    splitArrays(resu)
                    return cb(result)
                    // console.log(result)
                    // returnFunction(result)
                })

                .on('data', data => {
                    datatobSent = datatobSent + data;
                })
                .stderr.on('data', data => {
                    console.log('STDERR: ' + data);
                });

                stream.end(command+'\nexit\n');
            });

        })
        .connect({
            host: '10.0.0.240' || process.env.ROUTER_HOSTNAME,
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