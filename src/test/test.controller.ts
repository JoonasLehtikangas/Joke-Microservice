import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService){}

    @Get('')
    async getHandler(): Promise<String> {
        return `Endpoints for testing: 
        \n ../test/event-micro 
        \n ../test/message-micro
        \n ../test/event-user
        \n ../test/message-user
        \n ../test/event-log
        \n ../test/message-log`;
    }
    @Get('event-micro')
    async getMicroEventHandler(): Promise<String> {
        const status = await this.testService.handleMicroEventTest();
        return status;
        
    }

    @Get('message-micro')
    async getMicroMessageHandler(): Promise<String> {
        const status = await this.testService.handleMicroMessageTest();
        return status;
    }

    @Get('event-user')
    async getUserEventHandler(): Promise<String> {
        const status = await this.testService.handleUserEventTest();
        return status;
        
    }

    @Get('message-user')
    async getUserMessageHandler(): Promise<String> {
        const status = await this.testService.handleUserMessageTest();
        return status;
    }

    
    @Get('event-log')
    async getLogEventHandler(): Promise<String> {
        const status = await this.testService.handleLogEventTest();
        return status;
        
    }

    @Get('message-log')
    async getLogMessageHandler(): Promise<String> {
        const status = await this.testService.handleLogMessageTest();
        return status;
    }
}
