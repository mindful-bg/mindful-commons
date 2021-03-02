import { Module  } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
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