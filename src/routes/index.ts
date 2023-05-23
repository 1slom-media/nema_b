import { Router } from "express";
import form from "../controller/form";
import category from "../controller/category";
import products from "../controller/products";
import services from "../controller/services";
import sub_services from "../controller/sub_services";

const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);

// category
router.get("/category",category.Get);
router.get("/category/:id",category.GetId);
router.post("/category",category.Post);
router.put("/category/:id",category.Put);
router.delete("/category/:id",category.Delete);

// products
router.get("/products",products.Get);
router.get("/products/:id",products.GetId);
router.post("/products",products.Post);
router.put("/products/:id",products.Put);
router.delete("/products/:id",products.Delete);

// services
router.get("/services",services.Get);
router.get("/services/:id",services.GetId);
router.post("/services",services.Post);
router.put("/services/:id",services.Put);
router.delete("/services/:id",services.Delete);

// sub_services
router.get("/sub_services",sub_services.Get);
router.get("/sub_services/:id",sub_services.GetId);
router.post("/sub_services",sub_services.Post);
router.put("/sub_services/:id",sub_services.Put);
router.delete("/sub_services/:id",sub_services.Delete);


export default router;