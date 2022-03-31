export type TKeydownEvent = React.KeyboardEvent<HTMLElement> | React.KeyboardEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>
export type TKeyTypes = 'enter' | 'esc' | 'tab' | 'space' | 'up' | 'left' | 'right' | 'down'

export interface IKeyTypes {
  enter: 'enter'
  esc: 'esc'
  tab: 'tab'
  space: 'space'
  up: 'up'
  left: 'left'
  right: 'right'
  down: 'down'
}

export interface IConfig {
  type: TKeyTypes
  isDisabled?: boolean
  isPreventBubbling?: boolean
  onEvent: (event: TKeydownEvent) => void
}

export interface IKeyDown {
  event: TKeydownEvent
  keysConfig: IConfig[]
}
