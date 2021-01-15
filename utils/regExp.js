const urlRegExp = new RegExp(/^(https?:\/\/)?(w{3}.)?+([a-z\d]{0,}).([a-z\d]{2,})+([a-z0-9-._~:\/?#[\\\]@!\$&'()*+,;=]{1,})/gi);

module.exports = urlRegExp;