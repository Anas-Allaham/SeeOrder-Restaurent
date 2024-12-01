import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DeliveryModule } from './delivery/delivery.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, RestaurantsModule, DeliveryModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
