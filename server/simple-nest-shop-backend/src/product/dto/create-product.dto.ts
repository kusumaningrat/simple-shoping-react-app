import { IsBoolean, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(50)
    product_name: string;

    @IsNumber()
    quantity: number;

    @IsString()
    @MaxLength(255)
    price: string;

    @IsBoolean()
    checked: boolean;
}