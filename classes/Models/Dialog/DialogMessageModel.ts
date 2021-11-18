import BaseModel from "~/classes/BaseModel";
import { DialogMessageInterface } from "~/interfaces/classes/Models/Dialog/DialogMessageModelInterface";

export default class DialogMessageModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _text: string = '';
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

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor(data: DialogMessageInterface) {
    super();

    this.fillData(data);
  }

  protected fillData(data: DialogMessageInterface): void {
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
  }
}
