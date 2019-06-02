import React, { Component } from 'react'

import ExampleComponent from 'palet-selector'

export default class App extends Component {
  render () {

    return (
      <div>
        <ExampleComponent 
            text='Modern React component module' 
            // paletteInfo={imageUrlArray}
            // paletteInfo={buildingArray}
            paletteInfo={pairArray}
            />
      </div>
    )
  }
}
const imageUrlArray = [
  {
    positionTitle: 'Front View',
    positionId: 'front',
    textureTitle: 'Gray',
    textureId: 'gray',
    imageUrl1: '../images/gray.png',
    imageUrl2: '../images/gray.png'
  },
  {
    positionTitle: 'Front View',
    positionId: 'front',
    textureTitle: 'Green',
    textureId: 'green',
    imageUrl1: '../images/green.png',
    imageUrl2: '../images/green.png'
  },
  {
    positionTitle: 'Front View',
    positionId: 'front',
    textureTitle: 'Magenta',
    textureId: 'magenta',
    imageUrl: '../images/magenta.png'
  }
]
const pairArray = [
  {
    positionTitle: 'Centre',
    positionId: 'center',
    textureId: 'white',
    textureTitle: 'White',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
  },
  {
    positionTitle: 'Centre',
    positionId: 'center',
    textureId: 'green',
    textureTitle: 'Green',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
    imageUrl2: '../images/jpg/pairs/center/green.png'
  },
  {
    positionTitle: 'Centre',
    positionId: 'center',
    textureId: 'magenta',
    textureTitle: 'Magenta',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
    imageUrl2: '../images/jpg/pairs/center/magenta.png'
  },
  {
    positionTitle: 'Border',
    positionId: 'border',
    textureId: 'gray',
    textureTitle: 'Gray',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
  },
  {
    positionTitle: 'Border',
    positionId: 'border',
    textureId: 'green',
    textureTitle: 'Green',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
    imageUrl2: '../images/jpg/pairs/border/green.png'
  },
  {
    positionTitle: 'Border',
    positionId: 'border',
    textureId: 'magenta',
    textureTitle: 'Magenta',
    imageUrl1: '../images/jpg/pairs/center/gray.jpg',
    imageUrl2: '../images/jpg/pairs/border/magenta.png'
  }
]
const buildingArray = [
  {
    positionTitle: 'Borders',
    positionId: 'border',
    textureId: 'gray',
    textureTitle: 'Gray',
    imageUrl: '../images/jpg/gray.jpg'
  },
  {
    positionTitle: 'Borders',
    positionId: 'border',
    textureId: 'green',
    textureTitle: 'Green',
    imageUrl: '../images/jpg/green.jpg'
  },
  {
    positionTitle: 'Borders',
    positionId: 'border',
    textureId: 'green2',
    textureTitle: 'Dark Green',
    imageUrl: '../images/jpg/green2.jpg'
  },
  {
    positionTitle: 'Borders',
    positionId: 'border',
    textureId: 'magenta',
    textureTitle: 'Magenta',
    imageUrl: '../images/jpg/magenta.jpg'
  },
  {
    positionTitle: 'Body',
    positionId: 'body',
    textureId: 'magenta',
    textureTitle: 'Magenta',
    imageUrl: '../images/jpg/magenta-2.jpg'
  },
  {
    positionTitle: 'Central Plate',
    positionId: 'central-plate',
    textureId: 'greenR',
    textureTitle: 'Dark Green',
    imageUrl: '../images/jpg/green-R.jpg'
  },
  // {
  //   positionTitle: 'Body',
  //   positionId: 'body',
  //   textureId: 'white',
  //   textureTitle: 'White',
  //   imageUrl: '../images/jpg/white.jpg'
  // }
]