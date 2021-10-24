import { RoleInterface } from "~/interfaces/classes/Models/User/RoleModelInterface";
import { PrivacySettingsInterface } from "~/interfaces/classes/Models/User/PrivacySettingsModelInterface";

export interface UserInterface {
  createdAt: string;
  email: string;
  id: bigint;
  name: string;
  privacySettings: PrivacySettingsInterface;
  roles: RoleInterface[];
  updatedAt: string;
}
