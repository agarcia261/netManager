const path = require("path");

const distanceInWords = require("date-fns/distance_in_words");
const format = require("date-fns/format");
const getTimeDiff = require("date-fns/difference_in_milliseconds");

const compareDesc = require("date-fns/compare_desc");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const passport = require('passport')
const {ensureAuthenticated} = require('./authHelpers')

const db = require('../models')

// const mirror = mongoose.model('mirror')
// const User = mongoose.model('users')


module.exports = {
getMirrors: (req, res) => {
    db.Mirror.find({})
    .then(mirrors => {
      const today = format(
        new Date(),
        'MM/DD/YYYY'
      )
       const currentMirrors = mirrors

      for (let i=0; i<mirrors.length; i++ ){
        const dateComparison = compareDesc(
          today,
          new Date(mirrors[i].expiration)
        )
        if (!dateComparison){
          currentMirrors[i].expires="Today"
        }
        else if (dateComparison==-1){
          currentMirrors[i].expires="Expired"


        }
        else{

          const result = distanceInWords(
            new Date(),
            new Date(mirrors[i].expiration)
          )
          currentMirrors[i].expires=`in ${result}`

    
        }
      }

      res.json(currentMirrors);

    })
},
addMirror: (req, res) => {
    console.log("getting here")
    console.log(req.body)
    //grab object that was sent from the front end:
    const newMirror={
        router:req.body.router,
        sap:req.body.sap,
        expiration:req.body.expiration
      }
      //create a new mirror
      db.Mirror.create(newMirror)
      .then(mirrorResult => {
        //now we need to create a timeout function so the mirror is deleted automatically once it expires
        //first we get the total time the program will wait before deleting it
        const refDateInMilliseconds = getTimeDiff(new Date(mirrorResult.expiration),new Date())
  
        //now we create the function that will delete the mirror:
        const deleteMirror = id => {
          db.Mirror.deleteOne({_id:id}, err => {
            if (err){
              console.log("Mirror Could not be deleted")
            } else {
              console.log("Mirror Deleted Successfully")
            }
          });
        }

        // here we create the timeout with the ref time calculated above
        // i wanted to save the instance so in the future we can reload it if
        // if the program reboots for any reason as all instances will be lost 
        // it will probably make sense to store it in the db and have the backend 
        // reload all instances when it starts
        const timeOutInstance = setTimeout(deleteMirror, refDateInMilliseconds, mirrorResult._id)
        console.log(timeOutInstance)

        //###this answer below may need to change... this redirect should be done by react!#####
        res.json(mirrorResult)
      }) 
},
removeMirror: (req, res) => {
    console.log("getting to delete")
    console.log(req.params.id)

    db.Mirror.deleteOne({_id:req.params.id}, err => {
        if (err) {
          return res.status(404).end();
        }
        return res.status(200).end();
      });
}


}