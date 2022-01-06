import BaseModel from "~/classes/BaseModel";
import UserModel from "~/classes/Models/User/UserModel";
import { PostInterface } from "~/interfaces/classes/Models/PostModelInterface";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";

export default class PostModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _likesCount: number = 0;
  private _text: OutputBlockData[] | null = null;
  private _title: string = '';
  private _author: UserModel | null = null;
  private _updatedAt: string = '';
  private _viewsCount: number = 0;
  private _commentsCount: number = 0;

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

  get text(): OutputBlockData[] | null {
    return this._text;
  }

  set text(value: OutputBlockData[] | null) {
    this._text = value;
  }

  get author(): UserModel | null {
    return this._author;
  }

  set author(value: UserModel | null) {
    this._author = value;
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

  get commentsCount(): number {
    return this._commentsCount;
  }

  set commentsCount(value: number) {
    this._commentsCount = value;
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
    this.author = data.author ? new UserModel(data.author) : null;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.viewsCount = data.viewsCount;
    this.commentsCount = data.commentsCount;
  }
}
