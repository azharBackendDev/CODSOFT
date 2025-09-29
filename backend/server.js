import { app } from "./app.js";
import { db } from "./config/db-config.js";

app.get("/", (req, res) => {
  res.send("hello azhar");
});

app.post("/api/submit", (req, res) => {
  const { name, email, msg } = req.body;
  const q = `INSERT INTO query (name,email,msg) VALUES (?,?,?)`;

  try {
    if (!(name && email && msg)) {
      res.status(400).json({ Messgae: "Bad Request" });
    }
    db.query(q, [name, email, msg], (err, data) => {
      if (err) {
        throw err;
      }

      res.end("data insert");
    });
  } catch (error) {}
});

app.use((err,req,res,next)=>{
    res.status(500).json({msg:"something went wrong",err})
})

app.listen(8000, () => {
  console.log(`server is listenning on PORT:8000`);
});
