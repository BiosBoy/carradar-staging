import { WS_SEND_MESSAGE } from '../../../constants';
import { CAR_ATTEMPT, CAR_ERROR, CAR_SAVED } from '../constants';

import { IType, IFetchAttempt, IFetchSaved } from '../interfaces/IController';

export const loadCarDataAttempt = (payload: string): IFetchAttempt & IType => ({
  carNumber: payload,
  type: CAR_ATTEMPT
});

export const loadCarDataSaved = (payload: object): IFetchSaved & IType => ({
  payload,
  type: CAR_SAVED
});

export const loadCarDataError = (): IType => ({
  type: CAR_ERROR
});

export const wsSendMessage = (payload: object): { payload: object; } & IType => ({
  payload,
  type: WS_SEND_MESSAGE
});
