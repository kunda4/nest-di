import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  SupplyPower(watts: number) {
    console.log(`Supplying ${watts} worth of power.`);
  }
}
