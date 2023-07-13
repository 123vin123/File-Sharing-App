// for validation of schema
import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required:true,
    },
    downloadCount: {
        type: Number,
        required:true,
        default : 0,
    }
})

const File = mongoose.model('file', fileSchema);
export default File;