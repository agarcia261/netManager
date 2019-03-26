const sshAPI = require("./ssh")
const db = require("../models")

module.exports = {
    inventoryCustomers: (req, res) => {
<<<<<<< HEAD
=======

>>>>>>> 89e448955bf63ae1360e2d2e2ac0b7156c7e35b9
        Promise.all([
            sshAPI.show('portdesc'),
        ])
        .then(apiResponse => {
<<<<<<< HEAD

            for (let i=0; i<apiResponse[0].length; i++){
=======
            //console.log(apiResponse[0][0].port)
            // console.log("########## PORT DESC ##############")
            // console.log(apiResponse)

            for (let i=0; i<apiResponse[0].length; i++){
                //console.log("first index is :" +i)
                //console.log(apiResponse[0][i].port)
>>>>>>> 89e448955bf63ae1360e2d2e2ac0b7156c7e35b9
                Promise.all([
                    sshAPI.show('sapUsing', apiResponse[0][i].port),
                ])
                .then(resp => {
<<<<<<< HEAD
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
                            db.Customers.findOneAndUpdate({ customerName: response.customerName }, response, {upsert: true})
                            .then(dbModel => console.log("Customer "+ apiResponse[0][i].customerName + " inventory complete"))
                            .catch(err => console.log(err))//res.status(422).json(err));

                        })
                    })
                })
            }

=======
                    // console.log("############SAP USING############")
                    // console.log(resp)

                    let cktID = resp[0][0].serviceID
                    Promise.all([
                        sshAPI.show('serviceUsing',cktID),
                        sshAPI.show('serviceIDBase', cktID),
                        sshAPI.show('arp',cktID,undefined)
                        // sshAPI.show('bgpsum',cktID,2222),
                    ])
                    .then(ans => {

                      //  console.log("third index is :" +i)

                    //     console.log("###### SERV-USING #### BASE ###### ARP ########")
                        console.log(ans)
                    //    console.log("########################")
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
                                bgp:apiResponse[1],
                                bgpRoutes:"",
                                avrTraffiOut:15000,
                                avrTrafficIn:10000,
                                mirrored:true
                            }],
                        }]
                    }
                    //console.log(response)
                    db.Customers.findOneAndUpdate({ customerName: response.customerName }, response, {upsert: true})
                    .then(dbModel => console.log(dbModel))
                    .catch(err => console.log(err))//res.status(422).json(err));

                    })



                })
            }



            
            // return  Promise.all([sshAPI.show('arp','1030000001',undefined),0
            // sshAPI.show('bgpsum','1030000001',2222),1
            // sshAPI.show('serviceUsing', '1030000001'),4
            // sshAPI.show('serviceIDBase', '1030000001')5
            // ])
>>>>>>> 89e448955bf63ae1360e2d2e2ac0b7156c7e35b9
        })
        res.send("OK")

            

        //})
    }
}