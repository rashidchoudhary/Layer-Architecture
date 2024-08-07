import productModel from "../models/productModel.js";

const productService = {
    get: async (query) =>{
        return productModel.aggregate([
            {
                $lookup: {
                    from: "comments", 
                    localField: "_id", 
                    foreignField: "productId", 
                    as: "comments"
                },
            },
        ]);
    },
    getById: async (id) =>{
        return productModel.findById(id);
    },
    create: async (data) =>{
        return productModel.create(data);
    },
    update: async (id, rest) =>{
        return productModel.findByIdAndUpdate(id,rest);
    },
    delete: async (id) =>{
        return productModel.findByIdAndDelete(id);
    },
};

export default productService;
