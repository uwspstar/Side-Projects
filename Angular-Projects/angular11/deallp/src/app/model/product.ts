
export class Product {
    constructor(
  
      public id: number,
      public src: string,
      public title : string,
      public desc: string,
      public price: number,
      public priceOriginal: number,
      public rate: number,
      public categories: Array<string>
  
    ){}
  }