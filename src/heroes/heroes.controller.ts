import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroesController {
    @GrpcMethod('HeroesService','FindOne')
    findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
      const items = [{
        id: 1, name: "John"
      }]  

    }
}
