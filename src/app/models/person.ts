/**
 * Created by baunov on 10/01/17.
 */

enum IsGoing
{
  YES,
  NO,
  MIGHT
}

export class Person
{
  public id:string = "";

  public name:string = "";
  public is_going:IsGoing = IsGoing.YES;
  public probability:number = 1;
  public eatIndex:number = 1;
  public drinkIndex:number = 1;
  public smokeIndex:number = 1;

  constructor(){

  }
}
