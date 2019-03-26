
const Client = require('ssh2').Client;

module.exports = {
    show : (show, vprn, asn) =>{
        return new Promise((resolve,reject) => {
            let result, command, regex;

            switch(show) {
                case "adminBGPneighInfo":
                command = "admin display-config | match "+vprn+" context all | match bgp context children | match neighbor context children "
                regex = /peer-as \d*/
                break
                case "arp":
                    command = "show router " + vprn +" arp"
                    regex = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[^\r]*/g
                
                    break;
                case "bgpsum":
                    command = "show router " + vprn +" bgp summary"
                    const expr = asn+"[^\r]*";
                    regex = new RegExp(expr,"g") 
                break;
                case "portdesc":
                    command = "show port description"
                    regex = /[1-7]\/[1-7]*\/[1-9]*[ ]*[c][n]*[^\r]*/g
                break;
                case "sapUsing":
                    command = "show service sap-using | match " +vprn
                    // regex =/[1-7]\/[1-7]*\/[1-9]*\:[0-9|*]*\.\*[^\r]/
                    regex=/[1-7]\/[1-7]*\/[1-9]*\:[0-9|*]*[.][*]*[^\r]*/g
                break;
                case "serviceUsing":
                    const exp = vprn + "[^\r]*"
                    regex= new RegExp(exp,"g")
                    command = "show service service-using"
                break
                case "serviceIDBase":
                    regex =/Description*[^\r]*/g
                    command="show service id " + vprn +" base "
                break
                default:
                // code block
            }
           
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

                         splitArrays = array => {
                            for (let i=0; i<array.length; i++){
                                let tempArray = array[i].split(" ")
                                tempArray = tempArray.filter( el => {
                                    return el != '';
                                })
                                switch(show) {
                                    case "adminBGPneighInfo":
                                    result = {
                                        asn:tempArray[1]
                                    }
                    
                                    break;
                                    case "arp":
                                        if (i==0){
                                            result = {
                                                arp:{
                                                    source:{
                                                        ipAddress:tempArray[0],
                                                        macAddress:tempArray[1],
                                                        expires:tempArray[2],
                                                        type:tempArray[3],
                                                        interface:tempArray[4]
                                                    },
                                                    destination:{
                                                        macReceived:false,
                                                        macAddress:"No MAC received",
                                                        arpStatusCSS:"red"
                                                    }
                                                }
                                            }
                                        }
                                        else{
                                            result.arp.destination.ipAddress=tempArray[0]; 
                                            result.arp.destination.macAddress=tempArray[1];
                                            result.arp.destination.expires=tempArray[2];
                                            result.arp.destination.type=tempArray[3];
                                            result.arp.destination.interface=tempArray[4];
                                            result.arp.destination.macReceived=true;
                                            result.arp.destination.arpStatusCSS="";
                                        }                                   
                                        break;
                                    case "bgpsum":
                                        let bgpCSS=""
                                        if (/\d*\/\d*\/\d*/.test(tempArray[4])){
                                            console.log("It's a matched!!!")
                                        }
                                        else{
                                            console.log("It does NOT match")
                                            bgpCSS="red"

                                        }

                                        result = {
                                            peerASN:tempArray[0],
                                            pktRcvd:tempArray[1],
                                            upDown:tempArray[3],
                                            summary:tempArray[4],
                                            familyAddr:tempArray[5],
                                            bgpStatusCSS:bgpCSS
                                        }                                  
                                        break;
                                    case "portdesc":
                                    custName= tempArray[1].match(/[c][n][=][A-Z]*\/[A-Z]*/g).toString().slice(3)
                                    ipxAccess = tempArray[1].match(/[A|B][#]\d*/).toString().slice(2)  
                                    if (i==0){
                                        result = [{
                                            customerName:custName,
                                            port:tempArray[0],
                                            ipxAccess:ipxAccess
                                        }]
                                    }
                                    else{
                                        result.push({
                                            customerName:custName,
                                            port:tempArray[0],
                                            ipxAccess:ipxAccess
                                        })
                                    }
                                    break
                                    case "sapUsing":
                                    if (i==0){
                                        result= [{
                                            sap:tempArray[0],
                                            serviceID:tempArray[1],
                                            inQoS:tempArray[2],
                                            ingressFilter:tempArray[3],
                                            egressQoS:tempArray[4],
                                            egressFilter:tempArray[5],
                                            adminStatus:tempArray[6],
                                            operationalStatus:tempArray[7]
                                        }]
                                    }
                                    else{
                                        result.push({
                                            sap:tempArray[0],
                                            serviceID:tempArray[1],
                                            inQoS:tempArray[2],
                                            ingressFilter:tempArray[3],
                                            egressQoS:tempArray[4],
                                            egressFilter:tempArray[5],
                                            adminStatus:tempArray[6],
                                            operationalStatus:tempArray[7]
                                        })
                                    }

                                    break
                                    case "serviceUsing":
                                        result = {
                                            serviceType:tempArray[1]
                                        }                                        
                                    break
                                    case "serviceIDBase":
                                        result = {
                                            serviceCodification:tempArray[2]
                                        }
                                    break
                                    default:
                                    console.log(show + " command did not match any criteria")
                                }

                            }
                            
                        }
                        splitArrays(resu)
                        
                        resolve(result)

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
                host: process.env.ROUTER_HOSTNAME,
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
        })
    }

}