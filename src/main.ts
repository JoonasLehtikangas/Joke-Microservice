import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (AppModule, {
    transport: Transport.TCP,
    options: config.microserviceOptions
  });
console.log(`joke-microservice is listening on ${config.microserviceOptions.port}...press ctrl+c to stop`);

  await app.listen();
}
bootstrap();
