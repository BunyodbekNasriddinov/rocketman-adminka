import { Schema, model, Types } from "mongoose";


interface OrderI {
    sub_product: Types.ObjectId,
    count: number
    location: string,
    phone: string,
    driver: Types.ObjectId
    created_at: string
}



const OrderSchema = new Schema<OrderI>({
    sub_product: [
        {
            type: Types.ObjectId,
            ref: "SubProduct"
        }
    ],
    count: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    driver: [
        {
            type: Types.ObjectId,
            ref: "Driver"
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


export default model('Order', OrderSchema)