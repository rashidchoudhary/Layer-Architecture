import commentService from "../services/commentService.js";

const commentController = {
    get: async (req,res) =>{
        try {
            const data = await commentService.get(req.query);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    getById: async (req,res) =>{
        try {
        const data = await commentService.getById(req.params.id);
        res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    create: async (req,res) =>{
        try {
            const data = await commentService.create(req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    update: async (req,res) =>{
        try {
            const data = await commentService.update(req.params.id,req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    delete: async (req,res) =>{
        try {
            const data = await commentService.delete(req.params.id);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
};

export default commentController;