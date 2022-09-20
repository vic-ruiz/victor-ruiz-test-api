export default class ProductsDTO {
  constructor({ name, price, code, description, thumbnail, stock }) {
    this.name = name;
    this.price = price;
    this.code = code;
    this.description = description;
    this.thumbnail = thumbnail;
    this.stock = stock
  }
}

export function activarDTO(param) {
  if (Array.isArray(param)) {
    return param.map(
      (item) => new ProductsDTO(item.id, item.name, item.price, item.code)
    );
  } else if (param) {
    return new ProductsDTO(param.id, param.name, param.price, param.code);
  }
}
