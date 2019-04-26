import  React from 'react';
import classes from './List.module.css';
import Draggable from 'react-draggable';
import ReactDragListView from 'react-drag-sortable';

class  List extends React.Component {
    
    delete = (e) => {
        this.props.removeItems(e);
    }
    render () {
        return (
            <div>
       <ul className={classes.block}>
            {
                this.props.items.map((item, index) => 
                <Draggable axis="y"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <li><button className={classes.button} onDoubleClick={()=> this.props.removeItem(index)}>{item} </button></lis>
                </Draggable>
                )
            }
        </ul>
        </div>
        )
       }
    }

export default List;