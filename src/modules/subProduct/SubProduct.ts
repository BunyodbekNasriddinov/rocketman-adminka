import { Schema, model, Types } from "mongoose";


interface SubProductI {
    sub_product_name: string,
    description: string
    status:boolean
    price:number
    image:string
    product:Types.ObjectId
    created_at: string
}



const SubProductSchema = new Schema<SubProductI>({
    sub_product_name: {
        type: String,
        minlength: 2,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    status: {
        type:Boolean,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    product: [
        {
            type:Types.ObjectId,
            ref:"Product"
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


export default model('SubProduct', SubProductSchema)