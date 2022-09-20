import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/products";

let id;

async function testAxios() {
  await testListAllProducts();
  await testAxiosPostProduct();
  await testAxiosUpdateProduct();
  await testAxiosDeleteProduct();
}

async function testListAllProducts() {
  try {
    const res = await axios.get("/");
    if (Array.isArray(res.data)) {
      console.log("Get Method successful, listed all products");
      console.log(res.data);
    } else {
      console.log("Could not read Products");
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

async function testAxiosPostProduct() {
  try {
    const res = await axios.post("/", {
      name: "axios name test",
      price: 200,
      code: "axios code test",
      thumbnail: "lol",
      description: "axios description test",
      stock: 1,
    });
    const { name, price, code, description, thumbnail, stock, _id } =
      res.data.product;
    if (name && description && code && price && thumbnail && stock && _id) {
      id = _id;
      console.log("Post Method succesful, created new Product");
      console.log(res.data.product);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.error("Product create was not succesful!");
  }
}

async function testAxiosUpdateProduct() {
  try {
    const res = await axios.put(`/${id}`, {
      name: "axios name updated test",
      price: 200,
      code: "axios code updated test",
      thumbnail: "lol",
      description: "axios description updated test",
      stock: 1,
    });

    console.log(res.data);
    console.log("Put Method succesful, product updated");
  } catch (error) {
    console.error("Product update failed", error.message);
  }
}

async function testAxiosDeleteProduct() {
  try {
    const res = await axios.delete(`/${id}`);
    console.log(res.data);
    console.log("Delete Method succesful, Product was deleted succesfully");
  } catch (error) {
    console.error("Product delete failed", error.message);
  }
}
testAxios();
