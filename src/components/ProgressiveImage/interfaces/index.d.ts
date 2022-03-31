export interface IProps {
  image: {
    path: string
    alt: string
    customClass?: string
  }
  preloader?: {
    color: 'black' | 'white'
    type: 'circle'
  }
}
