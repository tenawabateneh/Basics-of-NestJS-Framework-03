import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplayPower(watts: string) {
    console.log(`Supplying ${watts} worth of power`)
  }
}
