import supertest from "supertest";
import chai from "chai";
const request = supertest("http://localhost:8080/products");
const expect = chai.expect;

let productId;

describe("Test api Products", () => {
  describe("List all products", () => {
    it("Debería retornar un status 200", async () => {
      const response = await request.get("/");
      expect(response.status).to.eql(200);
    });
    it("Debería retornar un objeto como data", async () => {
      const response = await request.get("/");
      expect(response).to.be.an("object");
    });
  });

  describe("Create product", async () => {
    it("Debería retornar un status 201 ", async () => {
      const response = await request.post("/").send({
        name: "Supertest name",
        price: 200,
        code: "Supertest code",
        thumbnail: "lol",
        description: "Supertest description",
        stock: 1,
      });
      console.log(response.body);
      productId = response.body.product._id;
      expect(response.status).to.eql(201);
      expect(response.body.product).include.keys(
        "name",
        "description",
        "code",
        "thumbnail",
        "price",
        "stock",
        "_id"
      );
      expect(response.body.product.name).to.eql("Supertest name");
      expect(response.body.product.description).to.eql("Supertest description");
      expect(response.body.product.code).to.eql("Supertest code");
      expect(response.body.product.thumbnail).to.eql("lol");
      expect(response.body.product.price).to.eql(200);
      expect(response.body.product.stock).to.eql(1);
    });
  });

  describe("Update product", async () => {
    it("Debería retornar un status 200 y modificar un producto", async () => {
      console.log(productId);
      let response = await request.put(`/${productId}`).send({
        name: "Supertest name updated",
        price: 200,
        code: "Supertest code updated",
        thumbnail: "lol",
        description: "Supertest description updated",
        stock: 1,
      });
      expect(response.status).to.eql(200);
      expect(response.body).include.keys("message", "id");
    });
  });

  describe("Delete product", async () => {
    it("Debería retornar un status 200 y borrar un producto", async () => {
      let response = await request.delete(`/${productId}`);
      expect(response.status).to.eql(200);
      expect(response.body).include.keys("message", "id");
    });
  });
});
