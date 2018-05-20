//Models/Post.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;//to import User.js schema
var PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  keyword: {
    type: String,
    required: true,
  },

  createdat: {
    type: Date, 
    default: Date.now,
    required: true
  },

  img: {
   type: String ,
    required: true,
  },
 
  user:{
    type: Schema.Types.ObjectId,
    required:true,
  ref: 'User'
  },
});

module.exports = mongoose.model('Post', PostSchema);