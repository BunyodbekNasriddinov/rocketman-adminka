import { Schema, model, Types } from "mongoose";


interface SubCategoryI {
    sub_category_name: string,
    count: number
    location: string
    long: string
    lang: string
    category: Types.ObjectId
    status: boolean
    created_at: string
}



const SubCategorySchema = new Schema<SubCategoryI>({
    sub_category_name: {
        type: String,
        minlength: 2,
        required: true,

    },
    count: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    category: [
        {
            type: Types.ObjectId,
            ref: "Category"
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


export default model('SubCategory', SubCategorySchema)