import BaseModel from "~/classes/BaseModel";
import { PostInterface } from "~/interfaces/classes/Models/PostModelInterface";

export default class PostModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _likesCount: number = 0;
  private _text: string = '';
  private _title: string = '';
  private _updatedAt: string = '';
  private _viewsCount: number = 0;

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

  get likesCount(): number {
    return this._likesCount;
  }

  set likesCount(value: number) {
    this._likesCount = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
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

  get viewsCount(): number {
    return this._viewsCount;
  }

  set viewsCount(value: number) {
    this._viewsCount = value;
  }

  constructor(data: PostInterface) {
    super();

    this.fillData(data);
  }

  protected fillData(data: PostInterface): void {
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.likesCount = data.likesCount;
    this.text = data.text;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.viewsCount = data.viewsCount;
  }
}
