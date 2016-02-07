exports.whoami = function(req, res, next) {
  var userAgent = req.headers['user-agent'];
  var os = /\((.+?)\)/.exec(userAgent)[1];
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    operating_system: os
  });
};
