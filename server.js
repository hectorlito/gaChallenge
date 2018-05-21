var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
// body parser wasn't declared therefore it couldnt find the module. first write the line on line 5 and then npm i or npm install to make sure all the missing packages are installed. Beyond that check the package.json to make sure it installed.

const PORT = process.env.PORT || 3000;
// needed to host locally as well as on Heroku

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));
//line 10 was missing a closing parentheses


app.get('/favorites', function(req, res){
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});
// missing a closing curly bracket on line 18

app.get('favorites', function(req, res){
  if(!req.body.name || !req.body.oid){
    res.send("Error");
    return

  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}});
// missing another closing curly bracket on line 31

app.listen(PORT, function(){
  console.log("Listening on port 3000");
});
//app.list isnt a function. Have to spell out app.listen
