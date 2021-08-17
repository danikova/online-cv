import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TreeItem, TreeView } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        pointerEvents: 'none',
        marginBottom: '10px'
    },
});

export function StaticRecursiveTreeView({data, ...props}) {
    const classes = useStyles();
    const ids = [];

    const renderTree = (nodes) => {
        if (!nodes.id) nodes.id = uuidv4();
        ids.push(nodes.id);
        return (
            <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children)
                    ? nodes.children.map((node) => renderTree(node))
                    : null}
            </TreeItem>
        );
    };

    let roots = [];
    if (Array.isArray(data)) roots = data;
    else if (typeof data === 'object') roots = [data];

    return roots.map((root, i) => {
        return (
            <TreeView
                key={`root-${i}`}
                className={classes.root}
                defaultCollapseIcon={'-'}
                defaultExpanded={ids}
                {...props}
            >
                {renderTree(root || {})}
            </TreeView>
        );
    });
}
