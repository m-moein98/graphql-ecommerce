import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class EcommerceInput {
    @Field()
    name: string;
    @Field()
    description: string;
    @Field(() => Int)
    price: number;
}

