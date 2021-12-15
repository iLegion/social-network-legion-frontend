import { DialogInterface } from "~/interfaces/classes/Models/Dialog/DialogModelInterface";

export interface DialogResponseInterface {
  data: DialogInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}

export interface DialogStorePayloadInterface {
  title: string;
  users: number[];
}
