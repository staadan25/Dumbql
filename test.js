function getgetshit(){
    return getshit();
}
console.log(getgetshit())

function getshit(){
    let r;
    var config = {
      server   : 'hula-sql\.database\.windows\.net',
      user     : 'CloudSA9c76dc93',
      password : 'Beansbeans1234',
      database: 'ExtraCredit',
      options:{
        encrypt:true
      }
    };
    
    const DB = require("mssql")
    DB.connect(config)
       .then((conn) => 
          conn.query("SELECT * FROM [dbo].[Resources]") 
          .then((v) => console.log(v))   
          .then((b) => {conn.close()
          return b}
          )
       )
    
}
    