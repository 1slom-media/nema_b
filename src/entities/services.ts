import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";
import { SubSevicesEntity } from "./sub_services";


@Entity({ name: "services" })
export class ServicesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    @IsString()
    services_name_uz: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    services_name_ru: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    services_name_en: string

    @Column({ type: "varchar", length: 300,nullable:true })
    @IsString()
    services_name_tr: string

    @Column({ type: "text" })
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @OneToMany(()=>SubSevicesEntity,(sub_services)=>sub_services.services,
    {onDelete:"CASCADE",onUpdate:"CASCADE",cascade:["soft-remove"]})
    sub_services:SubSevicesEntity[]
}