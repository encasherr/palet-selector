import React, { Component } from 'react';

class PaletteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPalette: props.paletteInfo[0],
            positionArray: [],
            textureArray: [],
            selectedPositionId: props.paletteInfo[0].positionId,
            selectedTextureId: props.paletteInfo[0].textureId
        };
    }

    RenderImageByPosition = (position) => {
        let { currentPalette } = this.state;
        let cpalet = this.props.paletteInfo.filter((item, index) => {
            return item.positionId === position.positionId 
                    && item.textureId === currentPalette.textureId;
        });
        if(cpalet && cpalet.length > 0) {
            this.RenderImage(cpalet[0]);
        }
        else {
            console.log("no match", position.positionId + ':' + currentPalette.textureId);
            let filteredPaletsByPosition = this.props.paletteInfo.filter((item, index) => {
                return item.positionId === position.positionId;
            });
            if(filteredPaletsByPosition && filteredPaletsByPosition.length > 0) {
                this.RenderImage(filteredPaletsByPosition[0], position.positionId);
            }
        }
    }

    RenderImageByTexture = (texture) => {
        let { currentPalette } = this.state;
        let cpalet = this.props.paletteInfo.filter((item, index) => {
            return item.textureId === texture.textureId
                    && item.positionId === currentPalette.positionId;
        });
        if(cpalet && cpalet.length > 0) {
            console.log("match found", texture.textureId + ':' + currentPalette.positionId);
            this.RenderImage(cpalet[0]);
        }
        else {
            console.log("no match", texture.textureId + ':' + currentPalette.positionId);
            this.RenderImage(currentPalette);
        }
    }

    RenderImage = (item, positionId) => {
        let filteredTextures = this.props.paletteInfo.filter((palet, index) => {
            if(positionId){
                return palet.positionId === positionId; 
            }
            return palet.positionId === item.positionId; 
        });
        console.log('filteredTextures',filteredTextures);
        this.setState({
            currentPalette: item,
            selectedPositionId: item.positionId,
            selectedTextureId: item.textureId,
            textureArray: filteredTextures
        });
    }

    getDistinctPositions = (paletteInfo) => {
        let positionArray = [];
        paletteInfo.map((item, index) => {
            let filteredItems = positionArray.filter((positionItem, index) => {
                                    return item.positionId === positionItem.positionId;
                                });
            if(filteredItems && filteredItems.length > 0) {
            }
            else{
                positionArray.push({
                    positionId: item.positionId,
                    positionTitle: item.positionTitle
                });
            }
        });

        return positionArray;
    }

    getDistinctTexturesByPosition = (paletteInfo) => {
        let textureArray = [];
        let { currentPalette } = this.state;
        
        paletteInfo.map((item, index) => {
            let addedItems = textureArray.filter((textureItem, index) => {
                                    return item.textureId === textureItem.textureId;
                                });
            if(addedItems && addedItems.length > 0) {
            }
            else{
                let matchedTextures = paletteInfo.filter((palet, id) => {
                    return palet.positionId === currentPalette.positionId
                    && palet.textureId === item.textureId;
                });
                if(matchedTextures && matchedTextures.length > 0){
                    textureArray.push({
                        textureId: item.textureId,
                        textureTitle: item.textureTitle
                    });
                }
            }
        });

        return textureArray;
    }

    componentDidMount = () => {
        const { paletteInfo } = this.props;
        let positionArray = this.getDistinctPositions(paletteInfo);
        let textureArray = this.getDistinctTexturesByPosition(paletteInfo);
        this.setState({
            positionArray: positionArray,
            textureArray: textureArray
        });
    }

    render = () => {
        const { currentPalette, positionArray, textureArray, selectedPositionId, selectedTextureId } = this.state;
        console.log("currentPalette", currentPalette);
        return  (
            <div className="container-fluid" style={styles.maindiv}>
                <div className="row">
                    <div className="col-8">
                        <div className="">
                            <img className="img-fluid imgA1"  
                                style={styles.img}
                                src={currentPalette.imageUrl1} alt={currentPalette.positionTitle} />
                            {currentPalette.imageUrl2 && 
                            <img className="img-fluid imgB1"  
                                style={styles.img}
                                src={currentPalette.imageUrl2} alt={currentPalette.positionTitle} />
                            }
                        </div>
                    </div>
                    <div className="col-3" style={{marginLeft: '2%'}}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Position</div>
                                <div className="list-group">
                                    {positionArray && positionArray.map((item, index) => {
                                        return (
                                            <a key={item.positionId} href="#" onClick={() => this.RenderImageByPosition(item)} 
                                                className={selectedPositionId === item.positionId ?
                                                    'list-group-item bg-primary text-white' :
                                                    'list-group-item bg-dark text-white'}>
                                                {item.positionTitle}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Texture</div>
                                <div className="list-group">
                                    {textureArray && textureArray.map((item, index) => {
                                        return (
                                            <a key={item.textureId} href="#" 
                                                onClick={() => this.RenderImageByTexture(item)} 
                                                className={selectedTextureId === item.textureId ?
                                                            'list-group-item bg-primary text-white' :
                                                            'list-group-item bg-dark text-white'}>
                                                {item.textureTitle}    
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PaletteComponent;
const styles = {
    selected: {
        backgroundColor: '#f04'
    },
    maindiv: {
        marginTop: '2%',
    },
    img: {
        transition: 'opacity 5s ease-in-out 3s'
    }
}