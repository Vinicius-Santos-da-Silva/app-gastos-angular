const proxy = [
    {
        context:"/user/login",
        target: 'http://jwt2.localhost',
        secure: false
    }
  ];
  module.exports = proxy;