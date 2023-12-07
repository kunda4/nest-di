import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  computePower(a: number, b: number) {
    console.log('Draweing 10 watts of power from PowerServices');
    this.powerService.SupplyPower(10);
    return a + b;
  }
}
