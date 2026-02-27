import Router from "express";
const authrouter = Router();

authrouter.get("/", (req, res) => {
    res.send("Hello World");
});


export default authrouter;