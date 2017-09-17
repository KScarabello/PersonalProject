import React, {Component} from 'react';
import catInfo from './category_info';
import {GridList, GridTile} from 'material-ui/GridList';

export default class Categories extends Component{
    render(){


  const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                
            },
            gridList: {
                width: 600,
                height: 550,
                overflowY: 'auto',
            },
        };


        return(
            <div>

                    <h1>How would YOU like to help?</h1>

                    <div style={styles.root}>
                        <GridList
                        cellHeight={200}
                        cellWidth={300}
                        cols={5}
                        padding={15}
                        
                        > 

                            {catInfo.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.category}
                                >

                                <img src={tile.img} />
                                </GridTile>

                            ))}
                        </GridList> 
                    </div>        
              </div>
        )           
    }







}