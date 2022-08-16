import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
@Entity({name: 'files'})
export class FilesEntity {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    title: String;

    @Column()
    content: String;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
}