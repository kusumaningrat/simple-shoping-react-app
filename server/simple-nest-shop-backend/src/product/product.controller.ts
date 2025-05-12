import { Controller, Post, Body, HttpCode, Get, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { SuccessResponseWith } from 'src/common/response';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

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

  @Put(':id')
  @HttpCode(200)
  async update(@Body() data: UpdateProductDto, @Param('id') id: string) {
    const product = await this.productService.update(data, parseInt(id));
    return SuccessResponseWith('Product updated successfully', product);
  }

  @Delete(':id')
  @HttpCode(200)
  async destroy(@Param('id') id: string) {
    await this.productService.destroy(parseInt(id));
    return SuccessResponseWith('Product deleted successfully', true);
  }
}
