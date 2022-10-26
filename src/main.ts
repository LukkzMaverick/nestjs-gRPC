import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC as number,
    options: {
      port: 3000,
      package: 'hero',
      protoPath: join(__dirname, 'heroes/hero.proto'),
    },
  });
  await app.listen()
}
bootstrap();
