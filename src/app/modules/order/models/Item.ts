import { IngredientList, Ingredients } from "./Ingredient";
import { ItemGroup } from "./ItemGroup";

export interface Item {
  id: string
  name: string
  ingredients: Ingredients
  itemGroup: ItemGroup
  price: number
}

export type Items = Item[]

export interface OrderItem extends Item {
  quantity: number
  subtotal: number
}

export interface OrderItems {
  entities: { [key: string]: OrderItem }
  ids: string[]
}
