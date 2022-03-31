/* eslint-disable */
import React from 'react'

const Loader = ({ routeName }: { routeName: string }) => {
  const AppUI = require(`../routes/${routeName}/layout`).default

  return <AppUI />
}

export default Loader
