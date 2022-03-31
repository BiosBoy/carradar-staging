import { REGISTRATION_ATTEMPT, REGISTRATION_SAVED, REGISTRATION_ERROR, REGISTRATION_INPUT } from '../constants'

import { IRegistrationInput, IType, IFetchError } from '../interfaces/IController'

export const loadRegistrationDataAttempt = (): IType => ({
  type: REGISTRATION_ATTEMPT
})

export const loadRegistrationDataSaved = (): IType => ({
  type: REGISTRATION_SAVED
})

export const loadRegistrationDataError = (error: string): IFetchError & IType => ({
  error,
  type: REGISTRATION_ERROR
})

export const setRegistrationInput = ({ id, value }: IRegistrationInput): IRegistrationInput & IType => ({
  id,
  value,
  type: REGISTRATION_INPUT
})
