import { Body, Controller, Param, Post } from '@nestjs/common';
import { PushNotificationsService } from './push-notifications.service';

@Controller('push')
export class PushNotificationsController {
  constructor(
    private readonly pushNotificationsService: PushNotificationsService,
  ) {}

  @Post(':subscribeId')
  create(@Body() params: any, @Param('subscribeId') subscribeId: string) {
    console.log('params ', params);
    console.log('subscribeId ', subscribeId);
    return this.pushNotificationsService.push(params, subscribeId);
  }
}
