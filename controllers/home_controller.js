module.exports.home = function (req, res) {
  return res.end('<h1>Express is up for Codeial</h1>');
};
module.exports.actionName = function (req, res) {
  return res.end('<h1>This would be some action</h1>');
};
