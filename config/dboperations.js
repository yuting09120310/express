var  config = require('./db');
const  sql = require('mssql');




async  function  getOrders() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from AppLog");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// async  function  postOrders() {
//   try {
//     let  products = await  pool.request().query("INSERT INTO [AppLog]  from AppLog");
//     return  products.recordsets;
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  getOrders:  getOrders,
  // postOrders: postOrders,
}