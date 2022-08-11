import { Injectable } from '@nestjs/common';
import { TestCallDto } from './dto/test-call.dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

    constructor(private readonly httpService: HttpService) {}

    testCall(testCallDto: TestCallDto, clientPort: number, clientKey: string, clientEndoint: string): Observable<any> {

        var Url = clientEndoint + ':' + clientPort + '/server/test-call?key=' +  clientKey
        console.log("Make test call to ", Url)
        return this.httpService.post(Url, {
            testValue: testCallDto.testValue
        });
    }

}
