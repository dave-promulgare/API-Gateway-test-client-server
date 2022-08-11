import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse,ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { SettingsDto } from './dto/settings.dto';
import { TestCallDto } from './dto/test-call.dto';
import { Observable } from 'rxjs';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    clientPort = 3000
    clientKey= 'AAAAA'
    clientEndpoint= '10.0.1.2'

    @Post('test-call')
    @ApiOperation({ summary: 'Client test call to server' })
    @ApiResponse({status: 200, description: 'Test status', type: String })
    testCall(@Body() testCallDto: TestCallDto): Observable<any> {
        console.log("test-call from controller")
        this.clientService.testCall(testCallDto, this.clientPort, this.clientKey, this.clientEndpoint).subscribe((res) => {
            console.log(res.data)
        })
        return 
    }


    @Post('settings')
    @ApiOperation({ summary: 'Client settings to communicate to server' })
    @ApiResponse({status: 200, description: 'Settings status', type: String })
    async settings(@Body() settingsDto: SettingsDto): Promise<String> {
        this.clientPort = settingsDto.port
        this.clientKey = settingsDto.key
        this.clientEndpoint = settingsDto.endpoint
        return "success"
    }

}
