import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getData(@Param('id') id: string) {
    return this.appService.getData(id);
  }
}
