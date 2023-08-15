import { Schema, model, Types } from "mongoose";


interface CategoryI {
    category_name: string,
    count: string
    created_at: string
}



const CategorySchema = new Schema<CategoryI>({
    category_name: {
        type: String,
        minlength: 2,
        required: true,

    },
    count: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })


export default model('Category', CategorySchema)