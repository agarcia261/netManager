const sshAPI = require("./ssh")
const axios = require('axios')


module.exports = {
    getCustomerStatus: (req, res) => {

        cb = input =>{
            console.log("callback :")

            return input
        }
        // if (test) {
        //     console.log("I got something")
        //     console.log(test)

        // }
        // else{
            sshAPI.show('bgpsum','1030000001',2222, cb)
            // sshAPI.show('arp','1030000001',undefined, cb)

            // axios({
            //     method:'get',
            //     url:'http://localhost:3001/api/ssh/'
            //   })
            //   .then(resp => {
            //     //   console.log(resp)
            //   })
        // }
        // console.log(arp)
        //sshAPI.bgpSummary('bgpsum','1030000001', 2222)

        sampleCustomer = {
            name:"Customer A",
            routers:[{
            routerName:"ashb-eqx-r1",
            port:"1/2/3",
            portUp:true,
            portRxdBm:-6,
            portTxdBm:-3,
            ipxAccess:3530001,        
            services:[{
                sap:"1/2/3:1500.*",
                codification:3570001,
                ies:false,
                iesInterface:"",
                vprn:"1030000001",
                macAddressLocal:"50:00:00:01:00:04",
                macAddressRemote:"50:00:00:01:00:03",
                localIP:"172.16.0.1",
                remoteIP:"172.16.0.2",
                bgpSummary:"4/4/8",
                bgpRoutes:"",
                avrTraffiOut:15000,
                avrTrafficIn:10000,
                mirrored:true
            }],
            createdOn:new Date(),
            lastUpdatedOn: new Date()
            },
            {
            routerName:"nyk-60h-r1",
            port:"1/1/1",
            portUp:false,
            portRxdBm:-40,
            portTxdBm:-3,
            ipxAccess:3530002,        
            services:[{
                sap:"1/1/1:1501.*",
                codification:3570002,
                ies:false,
                iesInterface:"",
                vprn:"1040000001",
                macAddressLocal:"50:00:00:01:00:04",
                macAddressRemote:"",
                localIP:"172.16.0.1",
                remoteIP:"172.16.0.2",
                bgpSummary:"Open",
                bgpRoutes:"",
                avrTraffiOut:0,
                avrTrafficIn:0,
                mirrored:false
            }],
            createdOn:new Date(),
            lastUpdatedOn: new Date()
            }],
        }
        res.send(sampleCustomer)
    }
}