import { RoleInterface } from "~/interfaces/classes/Models/User/RoleModelInterface";
import { PrivacySettingsInterface } from "~/interfaces/classes/Models/User/PrivacySettingsModelInterface";

export interface UserInterface {
  avatar: string;
  createdAt: string;
  email: string;
  friendsCount: number;
  hasDialogWithMe: boolean;
  id: number;
  isMyFriend: boolean;
  name: string;
  postsCount: number;
  privacySettings: PrivacySettingsInterface;
  roles: RoleInterface[];
  updatedAt: string;
}
