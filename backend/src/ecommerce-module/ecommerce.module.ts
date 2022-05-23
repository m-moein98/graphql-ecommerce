import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EcommerseResolver } from "./ecommerce.resolver";
import { EcommerceSchema } from "./ecommerce.schema";
import { EcommerceService } from "./ecommerce.service";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Ecommerce', schema: EcommerceSchema }]),
    ],
    controllers: [],
    providers: [
        EcommerseResolver,
        EcommerceService
    ],
})
export class EcommerceModule { }