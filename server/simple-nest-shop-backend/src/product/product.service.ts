import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';
import { identity } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    const checkExistingData = await this.prismaService.product.findFirst({
      where: {
        product_name: data.product_name,
      },
    });

    if (checkExistingData) {
      throw new HttpException('Data Already Exist', 400);
    }

    const result = await this.prismaService.product.create({
      data,
    });

    return {
      id: result.id,
      product_name: result.product_name,
      quantity: result.quantity,
      price: result.price,
      checked: result.checked,
    };
  }

  async getAll(): Promise<{ total: number; data: Product[] }> {
    const [products, total] = await Promise.all([
      await this.prismaService.product.findMany(),
      await this.prismaService.product.count(),
    ]);
    const dataList = products.map((product) => ({
      ...product,
    }));

    return {
      total,
      data: dataList,
    };
  }

  async update(data: UpdateProductDto, id: number): Promise<Product> {
    const checkExistingData = await this.prismaService.product.findFirst({
      where: {
        product_name: data.product_name,
      },
    });

    if (!checkExistingData) {
      throw new HttpException('Data Not Found', 404);
    }

    return await this.prismaService.product.update({
      where: {
        id
      },
      data: {
        product_name: data.product_name,
        quantity: data.quantity,
        price: data.price,
        checked: data.checked
      }
    });
  }

  async destroy(id: number) {
    const checkExistingData = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!checkExistingData) {
      throw new HttpException('Data tidak ada, gagal menghapus', 4044);
    }

    await this.prismaService.product.delete({ where: { id } });
  }
}
