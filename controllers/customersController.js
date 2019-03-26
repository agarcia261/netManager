const sshAPI = require("./ssh")
const db = require("../models")

module.exports = {
    getCustomerStatus: (req, res) => {
        let cust = req.body.customerSearch;
        db.Customers.find({customerName:cust})
        .then(response => {
            console.log(response)
            res.json(response)
        })


        // Promise.all([
        //     sshAPI.show('arp','1030000001',undefined),
        //     sshAPI.show('bgpsum','1030000001',2222),
        //     sshAPI.show('portdesc'),
        //     sshAPI.show('sapUsing'),
        //     sshAPI.show('serviceUsing', '1030000001'),
        //     sshAPI.show('serviceIDBase', '1030000001')
        // ])
        // .then((apiResponse) => {
        //     // console.log(apiResponse[3])
        //     response = {
        //         customerName:apiResponse[2].customerName,
        //         routers:[{
        //         routerName:"ashb-eqx-r1",
        //         port:apiResponse[2].port,
        //         portUp:true,
        //         portRxdBm:-6,
        //         portTxdBm:-3,
        //         ipxAccess:apiResponse[2].ipxAccess,        
        //         services:[{
        //             sap:apiResponse[3][0].sap,
        //             codification:apiResponse[5].serviceCodification,
        //             serviceType:apiResponse[4].serviceType,
        //             serviceID:apiResponse[3][0].serviceID,
        //             serviceAdminStatus:apiResponse[3][0].adminStatus,
        //             serviceOperatinalStatus:apiResponse[3][0].operationalStatus,
        //             arp:apiResponse[0].arp,
        //             bgp:apiResponse[1],
        //             bgpRoutes:"",
        //             avrTraffiOut:15000,
        //             avrTrafficIn:10000,
        //             mirrored:true
        //         }],
        //         createdOn:new Date(),
        //         lastUpdatedOn: new Date()
        //         },
        //         {
        //         routerName:"nyk-60h-r1",
        //         port:"1/1/1",
        //         portUp:false,
        //         portRxdBm:-40,
        //         portTxdBm:-3,
        //         ipxAccess:3530002,        
        //         services:[{
        //             sap:"1/1/1:1501.*",
        //             codification:3570002,
        //             ies:false,
        //             iesInterface:"",
        //             vprn:"1040000001",
        //             macAddressLocal:"50:00:00:01:00:04",
        //             macAddressRemote:"",
        //             localIP:"172.16.0.1",
        //             remoteIP:"172.16.0.2",
        //             bgpSummary:"Open",
        //             bgpRoutes:"",
        //             avrTraffiOut:0,
        //             avrTrafficIn:0,
        //             mirrored:false
        //         }],
        //         createdOn:new Date(),
        //         lastUpdatedOn: new Date()
        //         }],
        //     }
        //     res.send(response)


        // })
    }
}