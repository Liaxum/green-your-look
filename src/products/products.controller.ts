import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Roles } from 'src/security/roles.decorator';
import { Role } from 'src/security/roles.enum';
import { RolesGuard } from 'src/security/roles.guard';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) { }

	@UseGuards(RolesGuard)
	@Roles(Role.Admin)
	@Post()
	create(@Body() createProductDto: CreateProductDto) {
		return this.productsService.create(createProductDto);
	}

	@Get()
	findAll() {
		return this.productsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productsService.findOne(+id);
	}

	@UseGuards(RolesGuard)
	@Roles(Role.Admin)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
		return this.productsService.update(+id, updateProductDto);
	}

	@UseGuards(RolesGuard)
	@Roles(Role.Admin)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productsService.remove(+id);
	}
}
