import productService from "../services/productService.js";

const productController = {
    get: async (req,res) =>{
        try {
            const data = await productService.get(req.query);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    getById: async (req,res) =>{
        try {
        const data = await productService.getById(req.params.id);
        res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    create: async (req,res) =>{
        try {
            const data = await productService.create(req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    update: async (req,res) =>{
        try {
            const data = await productService.update(req.params.id,req.body);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
    delete: async (req,res) =>{
        try {
            const data = await productService.delete(req.params.id);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
          }
    },
};

export default productController;