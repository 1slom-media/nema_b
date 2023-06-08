import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";


@Entity({ name: "blogs" })
export class BlogsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    title_uz: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru: string

    @Column({ type: "varchar" })
    @IsString()
    title_en: string

    @Column({ type: "varchar",nullable:true })
    @IsString()
    title_tr: string

    @Column({ type: "text"})
    @IsString()
    description_uz: string

    @Column({ type: "text"})
    @IsString()
    description_ru: string

    @Column({ type: "text"})
    @IsString()
    description_en: string

    @Column({ type: "text",nullable:true})
    @IsString()
    description_tr: string

    @Column({ type: "varchar" })
    @IsString()
    title2_uz: string

    @Column({ type: "varchar" })
    @IsString()
    title2_ru: string

    @Column({ type: "varchar" })
    @IsString()
    title2_en: string

    @Column({ type: "varchar",nullable:true})
    @IsString()
    title2_tr: string

    @Column({ type: "text"})
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}