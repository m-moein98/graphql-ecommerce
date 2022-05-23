import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EcommerceModule } from './ecommerce-module/ecommerce.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EcommerceModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/ecommerce'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
