import BaseModel from "~/classes/BaseModel";
import { CommentInterface } from "~/interfaces/classes/Models/CommentModelInterface";
import UserModel from "~/classes/Models/User/UserModel";

export default class CommentModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _text: string = '';
  private _updatedAt: string = '';
  private _user: UserModel | null = null;

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

  get user(): UserModel | null {
    return this._user;
  }

  set user(value: UserModel | null) {
    this._user = value;
  }

  constructor(data: CommentInterface) {
    super();

    this.fillData(data);
  }

  protected fillData(data: CommentInterface): void {
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
    this.user = data.user ? new UserModel(data.user) : null;
  }
}
