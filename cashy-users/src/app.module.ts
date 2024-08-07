import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsertypesController } from './usertypes/usertypes.controller';
import { UsertypesService } from './usertypes/usertypes.service';
import { UsertypesModule } from './usertypes/usertypes.module';

@Module({
  imports: [UsertypesModule],
  controllers: [AppController, UsertypesController],
  providers: [AppService, UsertypesService],
})
export class AppModule {}
