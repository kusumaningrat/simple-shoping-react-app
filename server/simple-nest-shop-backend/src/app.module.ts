import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProductModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
