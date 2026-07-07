import { app,transporter } from "./app.js";

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/contact",async (req, res) => {
 try {
      const { email,name,message } = req.body;
  if (!email)
    return res
      .status(400)
      .json({ status: false, Message: "Email not provided" });
  const mailOption = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Form Submitted Successfully",
    text: `Hello ${name},\n\nThanks for contacting me !\n\nThis is azhar, proficient in Backend Development \n\n We recieved your Query: \n "${message}",\n\nI’ll get back to you shortly with more details.\n\nRegards,\nTeam Azhar`,
  };
 const result = await  transporter.sendMail(mailOption);
 console.log(`result:${JSON.stringify(result)}`);
 
    res.status(200).json({ success: true, message: "Email sent successfully!"});


 } catch (error) {
    console.error(error);
    res.status(500).json({msg:"Something went wrong"});
 }
});

app.all('/search',async(req,res)=>{

  if(req.method !== 'QUERY') return req.status(404).json({msg:"invalid requerst"})
  const {name,product} = req.body;
  console.log(`name:${name},product:${product}`);
  
})

app.listen(5000, () => {
  console.log("server is listenning on 5000");
});
