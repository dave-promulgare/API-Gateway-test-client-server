import { Injectable } from '@nestjs/common';
import { TestCallDto } from './dto/test-call.dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {

    constructor(private readonly httpService: HttpService) {}

    async testCall(testCallDto: TestCallDto, clientPort: number, clientKey: string, clientEndoint: string): Promise<any> {

        var Url = clientEndoint + ':' + clientPort + '/server/test-call?key=' +  clientKey
        console.log("Make test call to ", Url)
        return await this.httpService.post(Url, {
            testValue: testCallDto.testValue
        }).pipe(map(x => x?.data));
    }

}
