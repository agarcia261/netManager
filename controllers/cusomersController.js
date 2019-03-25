
module.exports = {
    getCustomerStatus: (req, res) => {
        sampleCustomer = {
                "_id" : "5c9439c4e291fd7d7d53200d",
                "customerName" : "USA/AVR",
                "__v" : 0,
                "routers" : [ 
                    {
                        "portUp" : true,
                        "portRxdBm" : -6,
                        "portTxdBm" : -3,
                        "ipxAccessCSS" : "",
                        "_id" : "5c943e4fc854ee50ee1aa36d",
                        "routerName" : "asytr-eqx-r1",
                        "port" : "1/1/4",
                        "ipxAccess" : 3444479,
                        "services" : [ 
                            {
                                "arp" : {
                                    "source" : {
                                        "ipAddress" : "10.20.20.1",
                                        "macAddress" : "50:00:00:01:00:04",
                                        "expires" : "00h00m00s",
                                        "type" : "Oth[I]",
                                        "interface" : "vprn-USA/CUSTA-3570001"
                                    },
                                    "destination" : {
                                        "arpStatus" : true,
                                        "ipAddress" : "10.20.20.2",
                                        "macAddress" : "50:00:00:08:00:01",
                                        "expires" : "03h34m55s",
                                        "type" : "Dyn[I]",
                                        "interface" : "vprn-USA/CUSTA-3570001",
                                        "arpDestStatusCSS" : ""
                                    }
                                },
                                "bgp" : {
                                    "bgpRoutes" : {
                                        "received" : "",
                                        "active" : "",
                                        "advertised" : ""
                                    },
                                    "peerASN" : 0,
                                    "pktRcvd" : 0,
                                    "summary" : "Test1",
                                    "familyAddr" : "",
                                    "bgpStatusCSS" : ""
                                },
                                "sap" : "1/1/4:1601.*",
                                "codification" : 3570001,
                                "serviceType" : "VPRN",
                                "serviceID" : 3570001,
                                "serviceAdminStatus" : "Up",
                                "serviceOperationalStatus" : "",
                                "sapStatusCSS" : "",
                                "mirrored" : true,
                                "_id" : "5c943e4fc854ee50ee1aa36e",
                                "avrTraffiOut" : 15000,
                                "avrTrafficIn" : 10000
                            }
                        ]
                    },
                    {
                        "portUp" : true,
                        "portRxdBm" : -6,
                        "portTxdBm" : -3,
                        "ipxAccessCSS" : "",
                        "_id" : "5c943e4fc854ee50ee1aa36d",
                        "routerName" : "ashb-eqx-r1",
                        "port" : "1/1/4",
                        "ipxAccess" : 3570001,
                        "services" : [ 
                            {
                                "arp" : {
                                    "source" : {
                                        "ipAddress" : "10.20.20.1",
                                        "macAddress" : "50:00:00:01:00:04",
                                        "expires" : "00h00m00s",
                                        "type" : "Oth[I]",
                                        "interface" : "vprn-USA/CUSTA-3570001"
                                    },
                                    "destination" : {
                                        "arpStatus" : true,
                                        "ipAddress" : "10.20.20.2",
                                        "macAddress" : "50:00:00:08:00:01",
                                        "expires" : "03h34m55s",
                                        "type" : "Dyn[I]",
                                        "interface" : "vprn-USA/CUSTA-3570001",
                                        "arpDestStatusCSS" : ""
                                    }
                                },
                                "bgp" : {
                                    "bgpRoutes" : {
                                        "received" : "",
                                        "active" : "",
                                        "advertised" : ""
                                    },
                                    "peerASN" : 0,
                                    "pktRcvd" : 0,
                                    "summary" : "Test0",
                                    "familyAddr" : "",
                                    "bgpStatusCSS" : ""
                                },
                                "sap" : "1/1/4:1601.*",
                                "codification" : 3570001,
                                "serviceType" : "VPRN",
                                "serviceID" : 3570001,
                                "serviceAdminStatus" : "Up",
                                "serviceOperationalStatus" : "",
                                "sapStatusCSS" : "",
                                "mirrored" : true,
                                "_id" : "5c943e4fc854ee50ee1aa36e",
                                "avrTraffiOut" : 15000,
                                "avrTrafficIn" : 10000
                            }
                        ]
                    }

                ]
        }
        res.send(sampleCustomer)
    },
    findCustomer:(req, res) =>{}
}