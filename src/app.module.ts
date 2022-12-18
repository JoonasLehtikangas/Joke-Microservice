import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import clientConfig from './client-config';
import { TestModule } from './test/test.module';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JOKE_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.microserviceOptions.host,
          port: clientConfig.microserviceOptions.port
        }
      },
      {
        name: 'JOKE_USERSERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.userserviceOptions.host,
          port: clientConfig.userserviceOptions.port
        }
      },
      {
        name: 'JOKE_LOGSERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.logserviceOptions.host,
          port: clientConfig.logserviceOptions.port
        }
      }
    ]),
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ClientsModule]
})
export class AppModule {}
