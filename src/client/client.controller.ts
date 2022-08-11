import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { SettingsDto } from './dto/settings.dto';
@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    client.port = 3000
    client.key= 'AAAAA'
    client.endpoint= '10.0.1.2'

    @Post('settings')
    @ApiOperation({ summary: 'Client settings to communicate to server' })
    @ApiResponse({status: 200, description: 'Settings status', type: String })
    async settings(@Body() settingsDto: SettingsDto): Promise<String> {
        this.client.port = settingsDto.port
        this.client.key = settingsDto.key
        this.client.endpoint = settingsDto.endpoint
        return "success"
    }

}
