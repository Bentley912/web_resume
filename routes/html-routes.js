var express = require('express');
var router = express.Router();


module.exports = function(app) {
app.get('/.well-known/acme-challenge/LvJEWuzySNP44XLzCQc62f0cnpaPPvFrgbBnEXLf7Qo', function(req, res) {
    res.send('LvJEWuzySNP44XLzCQc62f0cnpaPPvFrgbBnEXLf7Qo.9RBgWwWailffeQpT5-rDbUmo1eRcAr7zSmnXleleA4E')
  })

}