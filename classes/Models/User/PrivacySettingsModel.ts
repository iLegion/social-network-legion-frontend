import BaseModel from "~/classes/BaseModel";
import { PrivacySettingsInterface } from "~/interfaces/classes/Models/User/PrivacySettingsModelInterface";

export default class PrivacySettingsModel extends BaseModel {
  private _addFriendsMode: number = 0;
  private _createdAt: string = '';
  private _id: number = 0;
  private _messageWritingMode: number = 0;
  private _profileDisplayMode: number = 0;
  private _updatedAt: string = '';

  get addFriendsMode(): number {
    return this._addFriendsMode;
  }

  set addFriendsMode(value: number) {
    this._addFriendsMode = value;
  }

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

  get messageWritingMode(): number {
    return this._messageWritingMode;
  }

  set messageWritingMode(value: number) {
    this._messageWritingMode = value;
  }

  get profileDisplayMode(): number {
    return this._profileDisplayMode;
  }

  set profileDisplayMode(value: number) {
    this._profileDisplayMode = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor(data: PrivacySettingsInterface | null = null) {
    super();

    if (data) {
      this.fillData(data);
    }
  }

  protected fillData(data: PrivacySettingsInterface) {
    this.addFriendsMode = data.addFriendsMode;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.messageWritingMode = data.messageWritingMode;
    this.profileDisplayMode = data.profileDisplayMode;
    this.updatedAt = data.updatedAt;
  }
}
