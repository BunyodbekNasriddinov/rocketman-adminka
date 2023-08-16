import { Schema, model, Types } from "mongoose";


interface ProductI {
    product_name: string,
    count: number
    status: boolean
    sub_category: Types.ObjectId
    created_at: string
}

const ProductSchema = new Schema<ProductI>({
    product_name: {
        type: String,
        minlength: 2,
        required: true,

    },
    count: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    sub_category: [
        {
            type: Types.ObjectId,
            ref: "SubCategory"
        }
    ],
    created_at: {
        type: String,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })


export default model('Product', ProductSchema)