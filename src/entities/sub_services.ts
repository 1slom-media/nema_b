import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";
import { ServicesEntity } from "./services";


@Entity({ name: "sub_services" })
export class SubSevicesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 500 })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    title_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    title_en: string

    @Column({ type: "text"})
    @IsString()
    description_uz: string

    @Column({ type: "text"})
    @IsString()
    description_ru: string

    @Column({ type: "text"})
    @IsString()
    description_en: string

    @Column({ type: "text"})
    @IsString()
    description_uz2: string

    @Column({ type: "text"})
    @IsString()
    description_ru2: string

    @Column({ type: "text"})
    @IsString()
    description_en2: string


    @Column({ type: "text"})
    @IsString()
    description_uz3: string

    @Column({ type: "text"})
    @IsString()
    description_ru3: string

    @Column({ type: "text"})
    @IsString()
    description_en3: string

    @Column({ type: "text"})
    @IsString()
    img1: string

    @Column({ type: "text"})
    @IsString()
    img2: string

    @Column({ type: "text"})
    @IsString()
    img3: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>ServicesEntity,(services)=>services.sub_services,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    services:ServicesEntity
}