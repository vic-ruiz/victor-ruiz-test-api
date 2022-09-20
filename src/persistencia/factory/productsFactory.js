import dotenv from "dotenv";
import { MongoProducts } from "../daos/products/productsMongo.js";
dotenv.config();

export default class ProductsFactory{
    static getDao(){
        return new MongoProducts()
    }
}