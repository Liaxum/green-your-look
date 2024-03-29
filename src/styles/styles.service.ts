import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';
import { Repository, DeleteResult } from 'typeorm';
import { Style } from './entities/style.entity';

@Injectable()
export class StylesService {
	constructor(@InjectRepository(Style) private data: Repository<Style>) { }

	create(dto: CreateStyleDto) {
		const defaultCat = dto.categories.filter(el => el.id === 1);
		if (!defaultCat.length) dto.categories.push({ id: 1, name: 'Waiting', styles: [] });
		return this.data.save(dto);
	}

	findAll(): Promise<Style[]> {
		return this.data.find({ relations: ['categories'] });
	}

	findOne(id: number): Promise<Style> {
		return this.data.findOneOrFail({ where: { id: id }, relations: ['categories'] });
	}

	async update(id: number, dto: UpdateStyleDto): Promise<Style> {
		const done = await this.data.update(id, dto);
		if (done.affected != 1) throw new NotFoundException(id);
		return this.findOne(id);
	}

	async remove(id: number) {
		const done: DeleteResult = await this.data.delete(id);
		if (done.affected !== 1) throw new NotFoundException(id);
	}
}
