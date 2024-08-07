import userModel from "../models/userModel.js";

const userService = {
    get: async (query) => {
        return userModel.aggregate([
            {
                $lookup: {
                    from: "products", 
                    localField: "_id", 
                    foreignField: "userId", 
                    as: "products"
                }
            }
        ]);
    },
    getById: async (id) =>{
        return userModel.findById(id);
    },
    create: async (body) =>{
        return userModel.create(body);
    },
    update: async (id, rest) =>{
        return userModel.findByIdAndUpdate(id,rest);
    },
    delete: async (id) =>{
        return userModel.findByIdAndDelete(id);
    },
};

export default userService;