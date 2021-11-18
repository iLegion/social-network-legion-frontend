import { DialogMessageInterface } from "~/interfaces/classes/Models/Dialog/DialogMessageModelInterface";

export interface DialogMessageResponseInterface {
  data: DialogMessageInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}
