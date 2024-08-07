import commentModel from "../models/commentModel.js";

const commentService = {
    get: async (query) =>{
        return commentModel.aggregate([
            {
                $lookup: {
                    from: "products", 
                    localField: "productId", 
                    foreignField: "_id", 
                    as: "products"
                },
            },
            {
                $lookup: {
                    from: "users", 
                    localField: "userId", 
                    foreignField: "_id", 
                    as: "users"
                },
            },
        ]);
    },
    getById: async (id) =>{
        return commentModel.findById(id);
    },
    create: async (data) =>{
        return commentModel.create(data);
    },
    update: async (id, rest) =>{
        return commentModel.findByIdAndUpdate(id,rest);
    },
    delete: async (id) =>{
        return commentModel.findByIdAndDelete(id);
    },
};

export default commentService;
