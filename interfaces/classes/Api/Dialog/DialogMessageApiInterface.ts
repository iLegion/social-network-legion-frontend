import { DialogMessageInterface } from "~/interfaces/classes/Models/Dialog/DialogMessageModelInterface";

export interface DialogMessagesResponseInterface {
  data: DialogMessageInterface[];
  pagination: {
    count: number;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
}

export interface DialogMessageResponseInterface {
  data: DialogMessageInterface;
}

export interface DialogMessageStorePayloadInterface {
  text: string;
}
