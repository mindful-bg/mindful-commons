import { Module  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { MindfulLogger } from './mindful-logger';


@Module({
    imports: [
        ClientsModule
    ],
    providers: [
 
          MindfulLogger
    ],
    exports: [
        MindfulLogger
    ]
})
export class LoggerModule {}