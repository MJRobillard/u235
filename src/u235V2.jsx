import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'U-235' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Ba-139' },
    position: { x: 0, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Kr-95' },
    position: { x: 200, y: 100 },
  },
  {
    id: '4',
    data: { label: 'La-139' },
    position: { x: 0, y: 200 },
  },
  {
    id: '5',
    data: { label: 'Ce-139' },
    position: { x: 0, y: 300 },
  },
  {
    id: '6',
    data: { label: 'Pr-139' },
    position: { x: 0, y: 400 },
  },
  {
    id: '7',
    data: { label: 'Nd-139' },
    position: { x: 0, y: 500 },
  },
  {
    id: '8',
    data: { label: 'Y-95' },
    position: { x: 200, y: 200 },
  },
  {
    id: '9',
    data: { label: 'Zr-95' },
    position: { x: 200, y: 300 },
  },
  {
    id: '10',
    data: { label: 'Nb-95' },
    position: { x: 200, y: 400 },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'n' },
  { id: 'e1-3', source: '1', target: '3', label: 'n' },
  { id: 'e2-4', source: '2', target: '4', label: 'β-' },
  { id: 'e4-5', source: '4', target: '5', label: 'β-' },
  { id: 'e5-6', source: '5', target: '6', label: 'β-' },
  { id: 'e6-7', source: '6', target: '7', label: 'β-' },
  { id: 'e3-8', source: '3', target: '8', label: 'β-' },
  { id: 'e8-9', source: '8', target: '9', label: 'β-' },
  { id: 'e9-10', source: '9', target: '10', label: 'β-' },
];

const FissionReactionDiagram = () => {
  const [nodesState, setNodesState] = useState(nodes);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onNodeDragStop = (event, node) => {
    setNodesState((prevNodes) =>
      prevNodes.map((n) => {
        if (n.id === node.id) {
          return { ...n, position: node.position };
        }
        return n;
      })
    );
  };

  return (
    <div style={{ height: 700, width: 400 }} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodesState}
        edges={edges}
        onNodeDragStop={onNodeDragStop}
        nodesDraggable={true}
      >
        <Background variant="lines" />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FissionReactionDiagram;