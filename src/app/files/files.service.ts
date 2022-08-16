import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilesDto } from './dto/create-files.dto';
import { FilesEntity } from './files.entity';

@Injectable()
export class FilesService {

    constructor(
        @InjectRepository(FilesEntity)
        private readonly filesRepository: Repository<FilesEntity>
    ) {}

    async findAll(){
        return await this.filesRepository.find({
            select: ['id', 'title', 'content', 'createdAt']
        })
    }

    async store(data: CreateFilesDto){
        const user = await this.filesRepository.create(data)
        return await this.filesRepository.save(user)
    }

    async findById(id: string){
        try {
            return await this.filesRepository
            .createQueryBuilder('files')
            .where('files.id = :id', {id: id})
            .getOneOrFail();
        } catch(error) {
            throw new NotFoundException(error.message)
        }
    }

    async destroy(id: string){
        await this.findById(id);
        await this.filesRepository
        .createQueryBuilder('files')
        .where('files.id = :id', {id: id})
        .delete()
        .execute()
    }

}