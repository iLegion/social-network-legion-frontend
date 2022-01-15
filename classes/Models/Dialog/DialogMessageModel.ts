import BaseModel from "~/classes/BaseModel";
import { DialogMessageInterface } from "~/interfaces/classes/Models/Dialog/DialogMessageModelInterface";

export default class DialogMessageModel extends BaseModel {
  private _createdAt: string = '';
  private _dialogId: number = 0;
  private _id: number = 0;
  private _readAt: string | null = null;
  private _text: string = '';
  private _updatedAt: string = '';
  private _userName: string = '';

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get dialogId(): number {
    return this._dialogId;
  }

  set dialogId(value: number) {
    this._dialogId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get readAt(): string | null {
    return this._readAt;
  }

  set readAt(value: string | null) {
    this._readAt = value;
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

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  constructor(data: DialogMessageInterface) {
    super();

    this.fillData(data);
  }

  protected fillData(data: DialogMessageInterface): void {
    this.createdAt = data.createdAt;
    this.dialogId = data.dialogId;
    this.id = data.id;
    this.readAt = data.readAt;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
    this.userName = data.userName;
  }
}
