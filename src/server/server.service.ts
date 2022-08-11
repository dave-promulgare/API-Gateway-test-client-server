import { Injectable } from '@nestjs/common';
import { TestCallDto } from './dto/test-call.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {

    testCall(testCallDto: TestCallDto): String {

        return testCallDto.testValue
    }


}
