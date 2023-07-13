import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGO_URL = `mongodb+srv://vineet:vineet@cluster0.u6jknu3.mongodb.net/?retryWrites=true&w=majority`
    try {
       await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully!');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
 }
}
export default DBConnection;