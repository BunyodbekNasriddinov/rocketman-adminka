import { Schema, model, Types } from "mongoose";

enum Role {
    admin = "admin",
    superadmin = "superadmin",
}

interface AdminI {
    username: string,
    password: string,
    role: Role
}



const AdminSchema = new Schema<AdminI>({
    username: {
        type: String,
        minlength: 2,
        required: true,

    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    role: {
        type: String,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })


export default model('Admin', AdminSchema)