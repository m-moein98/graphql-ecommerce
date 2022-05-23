import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateEcommerceDto {
    @Field(() => ID)
    id: string
    @Field()
    readonly name: string;
    @Field()
    readonly description: string;
    @Field(() => Int)
    readonly price: number;
}