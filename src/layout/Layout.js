import React from 'react';
import Aux from '../hoc/Aux';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
        <h1 className={classes.Content}>To Do App</h1>
            <main className={classes.body}>
                {props.children}
            </main>
    </Aux>
);
export default layout;