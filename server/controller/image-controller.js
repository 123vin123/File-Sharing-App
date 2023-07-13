import File from "../models/file.js";

export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name:req.file.originalname,
   }
    try {
        const file = await File.create(fileObj);
        res.status(200).json({ path: `127.0.0.1:8000/file/${file._id}` });
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
}

export const downloadImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId); // this will find from mongoDB File 
        file.downloadCount++;
        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}