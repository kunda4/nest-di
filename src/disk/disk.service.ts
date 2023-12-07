import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  get() {
    console.log('Drawing some amout of power in power supply');
    this.powerService.SupplyPower(20);
    return 'data';
  }
}
