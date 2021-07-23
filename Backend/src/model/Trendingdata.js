
// Accessing monngose package
const mongoose = require('mongoose');

// Database connection (connecting server with database using mongoose package)
// mongoose.connect('mongodb://localhost:27017/libraryapp', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });

mongoose.connect('mongodb+srv://userone:userone@ictak-files.utn4t.mongodb.net/Techblog?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });


// Schema definition
const Schema=mongoose.Schema;

const TrendingSchema=new Schema({
    title:String,
    author:String,
    introduction:String,
    content:String,
    category:String,
    image:String
});

// Model Creation
var trendingdata=mongoose.model('trendingdata',TrendingSchema);

module.exports = trendingdata;