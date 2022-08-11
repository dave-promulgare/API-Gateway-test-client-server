import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ServerModule } from './server/server.module';

@Module({
  imports: [ClientModule, ServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
