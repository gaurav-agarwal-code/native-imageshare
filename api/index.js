import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import userRoutes from './routes/user.js'
import { connectDB } from './src/dbconnect.js'

const app = express();
const port = 8000;

//Routes
app.use('/user', userRoutes)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const start = async()=>{
    try {

        const mongodbConnect = await connectDB()

        app.listen(port, (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(`Server running on http://localhost:8000`);
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}

start()