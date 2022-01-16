export interface DialogInterface {
  createdAt: string;
  id: number;
  lastMessage: string | null;
  lastMessageCreatedAt: string | null;
  lastMessageUpdatedAt: string | null;
  title: string;
  updatedAt: string;
  unreadCount: number;
}
