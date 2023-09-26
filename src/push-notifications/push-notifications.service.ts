import { Injectable } from '@nestjs/common';
import { Novu, PushProviderIdEnum } from '@novu/node';

const API_KEY = '8f21640b28fa30971c0fdd39eea8cea9';
const WORK_FLOW_INDENTIFIER = 'desig-wallet';

@Injectable()
export class PushNotificationsService {
  async setCredentials(subscriberId: string, deviceTokens: string[]) {
    try {
      const novu = new Novu(API_KEY);

      await novu.subscribers.setCredentials(
        subscriberId,
        PushProviderIdEnum.EXPO,
        {
          deviceTokens,
        },
      );
    } catch (er: any) {}
  }

  async push(params: any, subscriberId: string) {
    try {
      const novu = new Novu(API_KEY);
      const rs = await novu.trigger(WORK_FLOW_INDENTIFIER, {
        to: {
          subscriberId,
        },
        payload: params,
      });
      console.log('success: ', rs);
      // return JSON.stringify(rs);
    } catch (er: any) {
      console.log('error: ', er.message);
      return er.message;
    }
  }
}
