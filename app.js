const express = require('express');
const app = express();


app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use('/boothstart', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/experience', (req, res) => {
  res.render('experience');
});
app.get('/education', (req, res) => {
    res.render('education');
  });

app.get('/skills', (req, res) => {
    res.render('skills');
  });







app.listen(8500, () => {
  console.log('Listening on port 8500...');
});