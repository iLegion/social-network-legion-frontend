import BaseModel from "~/classes/BaseModel";
import { RoleInterface } from "~/interfaces/classes/Models/User/RoleModelInterface";

export default class RoleModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _title: string = '';
  private _updatedAt: string = '';

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor(data: RoleInterface | null = null) {
    super();

    if (data) {
      this.fillData(data);
    }
  }

  protected fillData(data: RoleInterface) {
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}
