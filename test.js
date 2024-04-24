async function getgetshit(){
    r = await getshit("SELECT * FROM Resources")
    console.log(r.recordset)
    return r
  }
  
  
  getgetshit();
  
  async function getshit(query){
     let r;
     var config = {
       server   : 'DESKTOP-MKVCJRF',
       database: 'ExtraCredit',
       user:'admin',
       password:'password',
       trustServerCertificate: true,
       options:{
         trustedConnection: true
     }};
     
     const sql = require("mssql")
     var conn = await sql.connect(config)
         .then((success)=>{
             //console.log(success)
         },(fail)=>{
             console.log("failed to connect")
             //console.log(fail)
         })
  
     await sql.query(query)
         .then((success)=>{
             //console.log(success)
             r = success
         },(fail)=>{
             console.log("failed query")
             //console.log(fail)
         });
     sql.close()
     return r;
     }