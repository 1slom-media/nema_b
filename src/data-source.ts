import "reflect-metadata"
import { DataSource } from "typeorm"
import { FormEntity } from "./entities/forma"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { ServicesEntity } from "./entities/services"
import { SubSevicesEntity } from "./entities/sub_services"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1sU*DtM&9RfB",
    database: "nema_b",
    synchronize: true,
    logging: false,
    entities: [FormEntity,CategoryEntity,ProductsEntity,ServicesEntity,SubSevicesEntity],
    migrations: [],
    subscribers: [],
})
