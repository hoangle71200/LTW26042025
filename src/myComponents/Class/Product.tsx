import { SellType } from './SellType'
import { ProductGroup } from './ProductGroup'
import { ProductDepartment } from './ProductDepartment'


export class Product {
  private id: number;
  private name: string;
  private description: string;
  private timeCreated: string;
  private timeUpdated: string;
  private price: number;
  private quantity: number;
  private image: string;
  private video: string;
  private note: string;
  private rating: number;
  private status: string;
  private sellType: SellType;
  private productGroup: ProductGroup;
  private productDepartment: ProductDepartment;

  constructor(id: number, name: string, description: string, timeCreated: string, timeUpdated: string, price: number, quantity: number, image: string, video: string, note: string, rating: number, status: string, sellType: SellType, productGroup: ProductGroup, productDepartment: ProductDepartment) {
    this.id = id
    this.name = name
    this.description = description
    this.timeCreated = timeCreated
    this.timeUpdated = timeUpdated
    this.price = price
    this.quantity = quantity
    this.image = image
    this.video = video
    this.note = note
    this.rating = rating
    this.status = status
    this.sellType = sellType
    this.productGroup = productGroup
    this.productDepartment = productDepartment
  }
}