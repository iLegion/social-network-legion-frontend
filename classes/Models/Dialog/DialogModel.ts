import BaseModel from "~/classes/BaseModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";
import { DialogInterface } from "~/interfaces/classes/Models/Dialog/DialogModelInterface";

export default class DialogModel extends BaseModel {
  private _createdAt: string = '';
  private _id: number = 0;
  private _lastMessage: string = '';
  private _lastMessageCreatedAt: string = '';
  private _lastMessageUpdatedAt: string = '';
  private _title: string = '';
  private _updatedAt: string = '';
  private _unreadCount: number = 0;
  private _messages: DialogMessageModel[] = [];

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

  get lastMessage(): string {
    return this._lastMessage;
  }

  set lastMessage(value: string) {
    this._lastMessage = value;
  }

  get lastMessageCreatedAt(): string {
    return this._lastMessageCreatedAt;
  }

  set lastMessageCreatedAt(value: string) {
    this._lastMessageCreatedAt = value;
  }

  get lastMessageUpdatedAt(): string {
    return this._lastMessageUpdatedAt;
  }

  set lastMessageUpdatedAt(value: string) {
    this._lastMessageUpdatedAt = value;
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

  get unreadCount(): number {
    return this._unreadCount;
  }

  set unreadCount(value: number) {
    this._unreadCount = value;
  }

  get messages(): DialogMessageModel[] {
    return this._messages;
  }

  set messages(value: DialogMessageModel[]) {
    this._messages = value;
  }

  constructor(data?: DialogInterface) {
    super();

    if (data) {
      this.fillData(data);
    }
  }

  protected fillData(data: DialogInterface): void {
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.lastMessage = data.lastMessage;
    this.lastMessageCreatedAt = data.lastMessageCreatedAt;
    this.lastMessageUpdatedAt = data.lastMessageUpdatedAt;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.unreadCount = data.unreadCount;
  }
}
