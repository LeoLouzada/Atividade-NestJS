import { Injectable } from '@nestjs/common';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly repository: Repository<Uf>) {}

  create(dto: CreateUfDto){
    const Uf = this.repository.create(dto);
    return this.repository.save(Uf);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateUfDto) {
    const Uf = await this.repository.findOneBy({ id });
    if (!Uf) return null;
    this.repository.merge(Uf, dto);
    return this.repository.save(Uf);
  }

  async remove(id: string) {
    const Uf = await this.repository.findOneBy({ id });
    if (!Uf) return null;
    return this.repository.remove(Uf);
  }
}
