import express  from "express";
import dbInteract from "../dbInteract";

const db = new dbInteract();

const user = express.Router();

// create new user

user.post("/new", async (req, res) => {
    // get all element
    const username:string = req.body.username;
    const email:string = req.body.email;
    const password:string = req.body.email;
    // no verification here need to make this at the frontend

    if(username && email && password){
        // need to set up the api before this
    }else {
        res.sendStatus(400);
    };
});

export default user;
