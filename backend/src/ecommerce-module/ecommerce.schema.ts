import * as mongoose from 'mongoose';

export const EcommerceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});