var express = require('express'),
    app = express(),
    server  = require('http').createServer(app),
    cheerio = require('cheerio'),
    request = require('request');
     
app.set('port', (3000));
app.listen(app.get('port'), function() { 
  console.log('Node app running on port', app.get('port')) 
});

app.use(express.static('./client'));

app.get('/quoteofday', function(req,res){
  var url = "http://www.brainyquote.com/quotes_of_the_day.html"

  request(url, function(err, response, body){
    if (err) console.log('Error in /quoteofday');
    else {
      $ = cheerio.load(body);
      var quote = $("#qt_109160").text()
      var author = $('#qa_109160').text()
      res.send({quote:quote, auth:author})
    }
  })

})

