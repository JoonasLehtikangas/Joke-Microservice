import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { TestMessage } from './test.message';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService : TestService) {}

    @EventPattern('test_event')
    async handleTestEventRequest(data: TestMessage) {
        let status = await this.testService.handleTestEvent(data);
        console.log(`test_event handled with status ${status}`);
    }

    @MessagePattern({ cmd: 'test_message' })
    async handleTestMessageRequest(data: TestMessage) {
        let result = await this.testService.handleTestMessage(data);
        return result;
    }
}
