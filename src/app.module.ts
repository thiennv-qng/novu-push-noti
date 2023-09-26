import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PushNotificationsModule } from './push-notifications/push-notifications.module';

@Module({
  imports: [PushNotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
