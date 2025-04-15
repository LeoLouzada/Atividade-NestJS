import { Injectable } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private readonly repository: Repository<Estudante>) {}

  create(dto: CreateEstudanteDto){
    const Estudante = this.repository.create(dto);
    return this.repository.save(Estudante);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateEstudanteDto) {
    const Estudante = await this.repository.findOneBy({ id });
    if (!Estudante) return null;
    this.repository.merge(Estudante, dto);
    return this.repository.save(Estudante);
  }

  async remove(id: string) {
    const Estudante = await this.repository.findOneBy({ id });
    if (!Estudante) return null;
    return this.repository.remove(Estudante);
  }
}
