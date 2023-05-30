import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { BlogsEntity } from '../entities/blogs';

class BlogsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(BlogsEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(BlogsEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,title_en,description_uz,description_ru,description_en,title2_uz,title2_ru,title2_en,image } = req.body

            const blogs = await AppDataSource.getRepository(BlogsEntity ).createQueryBuilder().insert().into(BlogsEntity ).values({title_uz,title_ru,title_en,description_uz,description_ru,description_en,title2_uz,title2_ru,title2_en,image }).returning("*").execute()

            res.json({
                status: 201,
                message: "blogs created",
                data: blogs.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,title_en,description_uz,description_ru,description_en,title2_uz,title2_ru,title2_en,image  } = req.body
            const { id } = req.params

            const blogs = await AppDataSource.getRepository(BlogsEntity ).createQueryBuilder().update(BlogsEntity )
                .set({ title_uz,title_ru,title_en,description_uz,description_ru,description_en,title2_uz,title2_ru,title2_en,image  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "blogs updated",
                data: blogs.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const blogs = await AppDataSource.getRepository(BlogsEntity ).createQueryBuilder().delete().from(BlogsEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "blogs deleted",
                data: blogs.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new BlogsController();