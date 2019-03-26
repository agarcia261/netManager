const sshAPI = require("./ssh")
const db = require("../models")

module.exports = {
    inventoryCustomers: (req, res) => {

        Promise.all([
            sshAPI.show('portdesc'),
        ])
        .then(apiResponse => {

            for (let i=0; i<apiResponse[0].length; i++){

                Promise.all([
                    sshAPI.show('sapUsing', apiResponse[0][i].port),
                ])
                .then(resp => {

                    //Here I'll get the asn from the configuration in the router
                    //this is based on the service ID
                    Promise.all([sshAPI.show('adminBGPneighInfo', resp[0][0].serviceID)])
        
                    .then(resptoBGP => {

                        let cktID = resp[0][0].serviceID
                        
                        Promise.all([
                            sshAPI.show('serviceUsing',cktID),
                            sshAPI.show('serviceIDBase', cktID),
                            sshAPI.show('arp',cktID,undefined),
                            sshAPI.show('bgpsum',cktID,resptoBGP[0].asn),
                        ])
                        .then(ans => {

                            response = {
                                customerName:apiResponse[0][i].customerName,
                                routers:[{
                                    routerName:"ashb-eqx-r1",
                                    port:apiResponse[0][i].port,
                                    portUp:true,
                                    portRxdBm:-6,
                                    portTxdBm:-3,
                                    ipxAccess:apiResponse[0][i].ipxAccess,        
                                    services:[{
                                        sap:resp[0][0].sap,
                                        codification:ans[1].serviceCodification,
                                        serviceType:ans[0].serviceType,
                                        serviceID:ans[1].serviceCodification,
                                        serviceAdminStatus:resp[0][0].adminStatus,
                                        serviceOperatinalStatus:resp[0][0].operationalStatus,
                                        arp:ans[2].arp,
                                        bgp:ans[3],
                                        bgpRoutes:"",
                                        avrTraffiOut:15000,
                                        avrTrafficIn:10000,
                                        mirrored:true
                                    }],
                                }]
                            }
                            console.log(response)
                            db.Customers.findOneAndUpdate({ customerName: response.customerName }, response, {upsert: true})
                            .then(dbModel => console.log("Customer "+ apiResponse[0][i].customerName + " inventory complete"))
                            .catch(err => console.log(err))//res.status(422).json(err));

                        })
                    })
                })
            }

        })
        // res.send("OK")

            

        //})
    }
}