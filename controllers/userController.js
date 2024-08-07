import userService from "../services/userService.js";

const userController = {
    get: async (req,res) =>{
        try {
            const data = await userService.get(req.query);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    getById: async (req,res) =>{
        try {
        const data = await userService.getById(req.params.id);
        res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    create: async (req,res) =>{
        try {
            const data = await userService.create(req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    update: async (req,res) =>{
        try {
            console.log(req.params.id);
            const data = await userService.update(req.params.id,req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    delete: async (req,res) =>{
        try {
            const data = await userService.delete(req.params.id);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
};

export default userController;