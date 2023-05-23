import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "./category";


@Entity({ name: "products" })
export class ProductsEntity {
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

    @ManyToOne(()=>CategoryEntity,(category)=>category.products,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    category:CategoryEntity
}