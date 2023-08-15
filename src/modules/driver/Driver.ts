import { Schema, model, Types } from "mongoose";


interface DriverI {
    driver_full_name: string,
    driver_birthday: string
    driver_phone: string
    status: boolean
}



const RestaurantSchema = new Schema<DriverI>({
    driver_full_name: {
        type: String,
        minlength: 5,
        required: true,

    },
    driver_birthday: {
        type: String,
        required: true
    },
    driver_phone: {
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


export default model('Restaurant', RestaurantSchema)