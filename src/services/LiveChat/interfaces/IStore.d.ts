export interface IStore {
  showChat: boolean;
  isOpen: boolean;
  isPendingRequest: boolean;
  isConnectionError: boolean;
  newMessagesCount: number;
  currentMessage: string;
  messages: string[];
}
