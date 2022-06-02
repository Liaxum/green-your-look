import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Style } from 'src/styles/entities/style.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Category, Style])],
	controllers: [CategoriesController],
	providers: [CategoriesService]
})
export class CategoriesModule { }
