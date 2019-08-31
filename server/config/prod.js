/*module.exports = {
  mongoURIProd: 'mongodb+srv://debashis25:abcd@cluster0-dfrfm.mongodb.net/test?retryWrites=true&w=majority',
  googleProdClientID: '814900203628-gldsdf0rfecf9p0jb7vop1l4bguabi14.apps.googleusercontent.com',
  googleProdClientSecret: '0_EMb4TwyaBaRW-NVpHOwKHX'
};*/

module.exports = {
  googleProdClientID: process.env.GOOGLE_CLIENT_ID,
  googleProdClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURIProd: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
