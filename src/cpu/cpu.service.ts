import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) { }

  ComputerModule(a: number, b: number) {
    console.log("Drawing 20 watts of power from Power Service")
    this.powerService.supplayPower(20)
    return a + b
  }
}
