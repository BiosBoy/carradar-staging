import React from 'react'

export interface IWithControllerInit {
  loader: JSX.Element | Element
  root: string
  subroot: string
}

export interface IProps {
  routeName: string
  preloader?: any
}

export interface IState {
  component: React.ClassType<any, any, any> | JSX.Element | Element
}

class Loader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      component: null
    }
  }

  componentDidMount() {
    this._loadResources()
  }

  _loadResources = async () => {
    const { component } = this.state
    const { routeName } = this.props

    const { default: RouteLoader } = await import(`../routes/${routeName}/layout`)

    if (component) {
      return
    }

    this.setState({
      component: RouteLoader
    })
  }

  render() {
    const { component: ControllerLoader } = this.state
    const { preloader: Preloader } = this.props

    if (!ControllerLoader) {
      return <Preloader />
    }

    return <ControllerLoader />
  }
}

export default Loader
