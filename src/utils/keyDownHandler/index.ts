import { IKeyDown, IConfig, TKeyTypes } from './interfaces'
import { KEY_CODES, KEY_TYPES } from './constants'

/**
 *  @name keyDownHandler
 *  @author 3p-sviat
 *  @version 1.1.0
 *  @description helps handle keyboard event in an easy way.
 *
 *  @param {object} data - object with two main properties
 *  @param {object} data.event - main event object received from event handler.
 *  @param {object[]} data.keysConfig - controller object with data for processing.
 *
 *  @typedef IKeyDown
 *
 *  @readonly
 *
 *
 *  @copyright Copyright (c) Carradar, LTD.
 */

const keyDownHandler = ({ event, keysConfig = [] }: IKeyDown): void => {
  if (!event || Object.keys(event).length === 0) {
    console.error('Event config is invalided: ', event)

    return
  }

  const preventBubbling = (isPrevent: boolean) => {
    if (isPrevent) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const emitKeyCodeEvent = (config: IConfig) => {
    if (!config || Object.keys(config).length === 0) {
      console.error('Some error inside the keyDown config: ', config)

      return
    }

    const { type, onEvent, isPreventBubbling = false, isDisabled = false } = config || {}

    if (!type || KEY_CODES[type] !== event.keyCode || isDisabled || !onEvent) {
      !onEvent && console.error('You forgot to throw the event handler: ', config)
      !type && console.error('You forgot to throw the event type key: ', config)

      return
    }

    preventBubbling(isPreventBubbling)
    onEvent(event)
  }

  const runWatcher = () => {
    if (!keysConfig || keysConfig.length === 0) {
      console.error('Some error inside the keyConfigs: ', keysConfig)

      return
    }

    keysConfig.forEach((config: IConfig) => emitKeyCodeEvent(config))
  }

  runWatcher()
}

export { KEY_CODES, KEY_TYPES, TKeyTypes }

export default keyDownHandler
