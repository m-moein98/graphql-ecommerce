import { Args, Mutation, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { CreateEcommerceDto } from "./dto/create-ecommerce.dto";
import { EcommerceService } from "./ecommerce.service";
import { EcommerceInput } from "./inputs/ecommerce.input";

@Resolver()
export class EcommerseResolver {
    constructor(
        private readonly ecommerceService: EcommerceService,
    ) { }

    @Query(() => [CreateEcommerceDto])
    async ecommerce() {
        return this.ecommerceService.findAll();
    }

    @Mutation(() => CreateEcommerceDto)
    async createEcommerce(@Args('input') input: EcommerceInput) {
        return this.ecommerceService.create(input);
    }
}