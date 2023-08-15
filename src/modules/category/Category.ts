import { Schema, model, Types } from "mongoose";


interface CategoryI {
    category_name: string,
    count: number
    created_at: string
    status:boolean
}



const CategorySchema = new Schema<CategoryI>({
    category_name: {
        type: String,
        minlength: 2,
        required: true,

    },
    count: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })


export default model('Category', CategorySchema)