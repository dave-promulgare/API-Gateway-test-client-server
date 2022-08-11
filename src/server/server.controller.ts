import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse,ApiTags } from '@nestjs/swagger';
import { ServerService } from './server.service';
import { TestCallDto } from './dto/test-call.dto';
import { Observable } from 'rxjs';


@Controller('server')
export class ServerController {
    constructor(private readonly serverService: ServerService) {}

    @Post('test-call')
    @ApiOperation({ summary: 'Client test call from client' })
    @ApiResponse({status: 200, description: 'Test status', type: String })
    testCall(@Body() testCallDto: TestCallDto): String {
        return this.serverService.testCall(testCallDto)
    }

}
