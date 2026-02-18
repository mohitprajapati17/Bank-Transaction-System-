// 3ONMYX7CJ6eDohBg
// mohitprajapati2444_db_user

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mohitprajapati2444_db_user:3ONMYX7CJ6eDohBg@127.0.0.1:3306/bank_transaction_db");
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};

export default connectDB;