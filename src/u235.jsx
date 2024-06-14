import React, { useState, useEffect } from 'react';
import ReactFlow, { removeElements, addEdge, Controls, Background } from 'react-flow-renderer';

const FissionReactionDiagram = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const initialElements = [
      {
        id: 'U235',
        type: 'input',
        data: { label: 'U235' },
        position: { x: 0, y: 0 },
      },
      {
        id: 'Xe139',
        data: { label: 'Xe139 (6.3s)' },
        position: { x: 200, y: 0 },
      },
      {
        id: 'Cs139',
        data: { label: 'Cs139 (9.5m)' },
        position: { x: 400, y: 0 },
      },
      {
        id: 'Ba139',
        data: { label: 'Ba139 (82.9m)' },
        position: { x: 600, y: 0 },
      },
      {
        id: 'La139',
        data: { label: 'La139 (1.7h)' },
        position: { x: 800, y: 0 },
      },
      {
        id: 'Ce139',
        data: { label: 'Ce139 (stable)' },
        position: { x: 1000, y: 0 },
      },
      {
        id: 'e1',
        source: 'U235',
        target: 'Xe139',
        label: 'β-',
      },
      {
        id: 'e2',
        source: 'Xe139',
        target: 'Cs139',
        label: 'β-',
      },
      {
        id: 'e3',
        source: 'Cs139',
        target: 'Ba139',
        label: 'β-',
      },
      {
        id: 'e4',
        source: 'Ba139',
        target: 'La139',
        label: 'β-',
      },
      {
        id: 'e5',
        source: 'La139',
        target: 'Ce139',
        label: 'β-',
      },
    ];
    setElements(initialElements);
  }, []);

  return (
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} nodesConnectable={false} nodesDraggable={false}>
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default FissionReactionDiagram;