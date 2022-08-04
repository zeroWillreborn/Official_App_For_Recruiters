import ReviewModel from '../models/Review.js'
import SupportModel from '../models/Support.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
  // adding reviews in db
  static addReviews = async (req, res) => {
    try {
      // console.log(req.body);
      const {username,message,rating} = req.body
      // console.log({username,message,rating});
      let d = await ReviewModel.findOne({username})
      if(d==null){
          const doc = new ReviewModel({
            username: username,
            message: message,
            rating:rating
          })
          await doc.save()
          let data = await ReviewModel.findOne({username})
          res.send({data});
      }else{
          res.send({msg:'UserName already exist.'})
      }
    } catch (error) {
     res.send(error) 
     console.log(error);
    }
  }

  // getting/updating support count from/in db
  static addSupportCount = async (req, res) => {
    try {
      const {supportCount} = req.body;
      let prevs = await SupportModel.find({})
      await SupportModel.findByIdAndUpdate('62eb57edf35869a22496d862',{supportCount:Number(supportCount) + Number(prevs[0].supportCount)})
      let data = await SupportModel.findById(
      '62eb57edf35869a22496d862'
      )
      res.send({totalSupporter: data})
    } catch (error) {
     res.send(error) 
     console.log(error);
    }
  }
  static getDetails = async (req, res) => {
    try {
      let resp = await ReviewModel.find({});
      let resp2 = await SupportModel.find({});
      res.status(200).send({resp,resp2});
    } catch (error) {
     res.send(error) 
     console.log(error);
    }
  }
}

export default UserController