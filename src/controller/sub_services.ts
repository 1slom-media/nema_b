import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { SubSevicesEntity } from '../entities/sub_services';

class SubServicesController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(SubSevicesEntity ).find({
            relations:{
                services:true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(SubSevicesEntity ).find({
            relations:{
                services:true
            },where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,title_en,description_uz,description_ru,description_en,description_uz2,description_ru2,description_en2,description_uz3,description_ru3,description_en3,img1,img2,img3,services } = req.body

            const sub_services = await AppDataSource.getRepository(SubSevicesEntity ).createQueryBuilder().insert().into(SubSevicesEntity ).values({title_uz,title_ru,title_en,description_uz,description_ru,description_en,description_uz2,description_ru2,description_en2,description_uz3,description_ru3,description_en3,img1,img2,img3,services }).returning("*").execute()

            res.json({
                status: 201,
                message: "sub_services created",
                data: sub_services.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,title_en,description_uz,description_ru,description_en,description_uz2,description_ru2,description_en2,description_uz3,description_ru3,description_en3,img1,img2,img3,services  } = req.body
            const { id } = req.params

            const sub_services = await AppDataSource.getRepository(SubSevicesEntity ).createQueryBuilder().update(SubSevicesEntity )
                .set({ title_uz,title_ru,title_en,description_uz,description_ru,description_en,description_uz2,description_ru2,description_en2,description_uz3,description_ru3,description_en3,img1,img2,img3,services  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "sub_services updated",
                data: sub_services.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const sub_services = await AppDataSource.getRepository(SubSevicesEntity ).createQueryBuilder().delete().from(SubSevicesEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "sub_services deleted",
                data: sub_services.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new SubServicesController();