import { Injectable } from '@nestjs/common';
import { TestMessage } from './test.message';

@Injectable()
export class TestService {
    async handleTestEvent(data: TestMessage) {
        console.log(`handleTestEvent: payload ${JSON.stringify(data)}`);
        return 0;
    }

    async handleTestMessage(data: TestMessage) {
        console.log(`handleTestMessage: payload ${JSON.stringify(data)}`);
        return `echo: "${data.text}"`;
    }
}
