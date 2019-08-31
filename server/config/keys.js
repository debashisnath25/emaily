if(process.env.NODE_ENV === 'production'){
  // Pass the production data
  module.exports = require('./prod');
}else{
  // Pass the development data
  module.exports = require('./dev');
}
