import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const connIns = await mongoose.connect(`${process.env.MONGOOSE_URL}/imageshare`)
        console.log("mongodb connection succesfull::",connIns.connection.host);
        return connIns
    } catch (error) {
        console.log("mongodb connection failed->",error);
        process.exit(1)
    }
}

export {connectDB}