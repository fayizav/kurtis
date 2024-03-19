const bcrypt = require('bcrypt')
const { user } = require("../../model/connection");
const db = require('../../model/connection')
const {ObjectId}  = require("mongodb") 
const { ObjectID } = require("bson")

const { log } = require('debug/src/node')








exports.dologin=(userData)=>{  
  console.log(userData,'bodyy'); 
    return new Promise (async(resolve,reject)=>{
        try{
          let user = await db.user
        .findOne({ email: userData.email });
      if (user) {
        if (user.blocked == false) {
          bcrypt.compare(userData.password, user.Password).then((status) => {
            if (status) {
              let username = user.username;
              resolve({ loggedInStatus: true, username, user });
            } else {
              console.log('password not compare');
              resolve({ loggedInStatus: false });
            }
          });
        } else {
          resolve({ loggedInStatus: false,blockedStatus: true });
        }
      } else {
        console.log('usernaheeeeeee');
        resolve({ loggedInStatus: false });
        }
      }
        catch(err){
            console.log(err);
        }

        }) 
    

}

  