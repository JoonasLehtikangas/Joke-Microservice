import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { TestMessage } from './test.message';

@Injectable()
export class TestService {
    constructor(
    @Inject('JOKE_MICROSERVICE') private readonly jokeClientMicro: ClientProxy,
    @Inject('JOKE_USERSERVICE') private readonly jokeClientUser: ClientProxy,
    @Inject('JOKE_LOGSERVICE') private readonly jokeClientLog: ClientProxy) {}

    async handleMicroEventTest(): Promise<string> {
        this.jokeClientMicro.emit<any>('test_event', new TestMessage('Testing Microservice event operation'));
        return 'joke-microservice-api: Microservice test_event emitted';
    }
    async handleMicroMessageTest(): Promise<string> {
        const result$ = this.jokeClientMicro.send<any>({cmd: 'test_message'}, new TestMessage('Testing Microservice message operation'));
        const resultValue = await firstValueFrom(result$);
        console.log(`joke-microservice-api: Microservice test_message returned "${resultValue}"`);

        return resultValue;
    }

    async handleUserEventTest(): Promise<string> {
        this.jokeClientUser.emit<any>('test_event', new TestMessage('Testing Userservice event operation'));
        return 'joke-microservice-api: Userservice test_event emitted';
    }
    async handleUserMessageTest(): Promise<string> {
        const result$ = this.jokeClientUser.send<any>({cmd: 'test_message'}, new TestMessage('Testing Userservice message operation'));
        const resultValue = await firstValueFrom(result$);
        console.log(`joke-microservice-api: Userservice test_message returned "${resultValue}"`);

        return resultValue;
    }

    async handleLogEventTest(): Promise<string> {
        this.jokeClientLog.emit<any>('test_event', new TestMessage('Testing Logservice event operation'));
        return 'joke-microservice-api: Logservice test_event emitted';
    }
    async handleLogMessageTest(): Promise<string> {
        const result$ = this.jokeClientLog.send<any>({cmd: 'test_message'}, new TestMessage('Testing Logservice message operation'));
        const resultValue = await firstValueFrom(result$);
        console.log(`joke-microservice-api: Logservice test_message returned "${resultValue}"`);

        return resultValue;
    }
}
