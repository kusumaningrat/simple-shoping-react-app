import { Controller, Post, Body, HttpCode, Get, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { SuccessResponseWith } from 'src/common/response';
import { Product } from '@prisma/client';

@Controller('/api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: CreateProductDto) {
    const product = await this.productService.create(data);
    return SuccessResponseWith('Product added successfully', product);
  }

  @Get()
  @HttpCode(200)
  async getAll() {
    const product = await this.productService.getAll();
    return SuccessResponseWith('Products loaded successfully', product);
  }

  @Delete(':id')
  @HttpCode(200)
  async destroy(@Param('id') id: string) {
    await this.productService.destroy(parseInt(id));
    return SuccessResponseWith('Product deleted successfully', true);
  }
}
