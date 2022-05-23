import { Document } from "mongoose";

export interface EcommerceModel extends Document {
    readonly name: string;
    readonly description: string;
    readonly price: number;
}