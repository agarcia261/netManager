const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    routers:[{
        routerName:{
            type:String,
        },
        port:{
            type:String,
        },
        portUp:{
            type:Boolean
        },
        portRxdBm:{
            type:Number
        },
        portTxdBm:{
            type:Number
        },
        ipxAccess:{
            type:Number,
            require:true
        },        
        services:[{
            sap:{
                type:String,
            },
            codification:{
                type:Number
            },
            ies:{
                type:Boolean,
                default:false
            },
            vprn:{
                type:Number
            },
            macAddressLocal:{
                type:String
            },
            macAddressRemote:{
                type:String
            },
            localIP:{
                type:String
            },
            remoteIP:{
                type:String
            },
            bgpSummary:{
                type:String
            },
            bgpRoutes:{
                type:String
            },
            avrTraffiOut:Number,
            avrTrafficIn:Number,
            mirrored:{
                type:Boolean,
                default:false
            }
        }]

    }],
    createdOn:{
        type:Date,
        default:Date.now
    },
    lastUpdatedOn:{
        type:Date,
        default:Date.now
    }

});

//Creating the model from the schema above
const Customers = mongoose.model('customers', CustomerSchema)
//export the Mirror Model
module.exports = Customers