const express    = require('express');        // call express
const app        = express();                 // define our app using express
const cors = require('cors');
const mongoose = require('mongoose');
const MovieModel = require('./models/movie');

// configure app to do body parsing
app.use(express.json());
// this will let us get the data from a POST

app.use(cors());
const port = process.env.PORT || 3000;        // set our port

const getPing = (req,res) => {
	// req contains all data about clinet
	// res provides functions related to response
	res.send('server is running on port - ' + port);
}

// create connection with mongoose on app start

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true});

const getFromMongo = async (req,res) => {
// 	const small = new MovieModel({ name: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
	//
	const data = await MovieModel.find({});
	res.json(data);
};

// routes
app.get('/ping', getPing);
app.get('/', getPing);
app.get('/mongo',getFromMongo);

// router
const apiRouter = express.Router();
require('./routes/kafka/kafka.routes')(apiRouter);
app.use('/test', apiRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server is running - ' + port);