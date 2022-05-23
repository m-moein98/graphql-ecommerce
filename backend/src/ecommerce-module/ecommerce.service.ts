import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcommerceInput } from './inputs/ecommerce.input';
import { EcommerceModel } from './interfaces/ecommerce.interface';



@Injectable()
export class EcommerceService {
    constructor(
        @InjectModel('Ecommerce') private readonly ecommerceModel: Model<EcommerceModel>,
    ){}
    async create(createEcommerceDto: EcommerceInput): Promise<EcommerceModel> {
        const createdEcommerce = new this.ecommerceModel(createEcommerceDto);
        return await createdEcommerce.save();
    }
    async findAll(): Promise<EcommerceModel[]> {
        return await this.ecommerceModel.find().exec();
    }
}