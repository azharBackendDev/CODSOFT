import * as mysql from 'mysql2'

export  const  db = (()=>{
    try {
      const db =   mysql.createConnection({
            host:"localhost",
            user:'root',
            password:"tiger",
            database:'php',
        });
     
    db.connect(()=>{
        console.log(`Database Connect Successfully`);
    });

     return db;
    
        
    } catch (error) {
        throw new Error("Internal Database Error: ",error);
    }
})();

