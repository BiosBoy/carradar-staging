import { ICarData } from '../../../interfaces/IStore'

const DATA: ICarData = {
  image: '/assets/exemple.webp',
  mainData: {
    brand: 'Porsche',
    model: '911',
    color: 'purple',
    vinCode: 'unknown',
    number: 'AT8760ET',
    manufacturedDate: '2009',
    info: 'Легковий Седан Базовий'
  },
  collectedData: [
    {
      icon: 'manufacture',
      title: 'Manufacture',
      data: 'BMW'
    },
    {
      icon: 'manufacturedDate',
      title: 'Manufactured Date',
      data: '05.02.2009'
    },
    {
      icon: 'color',
      title: 'Color',
      data: 'White'
    },
    {
      icon: 'gasType',
      title: 'Fuel Type',
      data: 'Gas'
    },
    {
      icon: 'price',
      title: 'Market Price',
      data: '$20,000'
    },
    {
      icon: 'lastOperation',
      title: 'Last Operation',
      data: '21.21.2020'
    },
    {
      icon: 'lastOperationType',
      title: 'Operation Type',
      data: 'ТСЦ 2641 [#12276]: Перереєстрація на нового власника за дог. купiвлi-продажу (сг) [#308]'
    }
  ]
}

export { DATA }
