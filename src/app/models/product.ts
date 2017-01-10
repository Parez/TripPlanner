import {Taker} from './taker';
/**
 * Created by baunov on 10/01/17.
 */

enum Category
{
  OTHER,
  DRINK,
  FOOD,
  SMOKING,
  ALCOHOL,
  EQUIPMENT
}

export class Product
{
  public id:string = "";

  public name:string;
  public whoIsTaking:Taker[];
  public priority:number = 1;
  public comment:string = "";
  public category:Category = Category.FOOD;
  public amount_required:number = 0;

  constructor(){

  }

}
