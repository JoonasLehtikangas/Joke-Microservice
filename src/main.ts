import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (AppModule, {
    transport: Transport.TCP,
    options: config.logserviceOptions
  });
console.log(`joke-logservice is listening on ${config.logserviceOptions.port}...press ctrl+c to stop`);

  await app.listen();

}
bootstrap();
