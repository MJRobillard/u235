import React, { useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap, useNodesState, useEdgesState } from 'react-flow-renderer';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'U-235' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Ba-139' },
    position: { x: 0, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Kr-95' },
    position: { x: 200, y: 150 },
  },
  {
    id: '4',
    data: { label: 'La-139' },
    position: { x: 0, y: 300 },
  },
  {
    id: '5',
    data: { label: 'Ce-139' },
    position: { x: 0, y: 450 },
  },
  {
    id: '6',
    data: { label: 'Pr-139' },
    position: { x: 0, y: 600 },
  },
  {
    id: '7',
    data: { label: 'Nd-139' },
    position: { x: 0, y: 750 },
  },
  {
    id: '8',
    data: { label: 'Pm-139' },
    position: { x: 0, y: 900 },
  },
  {
    id: '9',
    data: { label: 'Sm-139' },
    position: { x: 0, y: 1050 },
  },
  {
    id: '10',
    data: { label: 'Eu-139' },
    position: { x: 0, y: 1200 },
  },
  {
    id: '11',
    data: { label: 'Gd-139' },
    position: { x: 0, y: 1350 },
  },
  {
    id: '12',
    data: { label: 'Y-95' },
    position: { x: 200, y: 300 },
  },
  {
    id: '13',
    data: { label: 'Zr-95' },
    position: { x: 200, y: 450 },
  },
  {
    id: '14',
    data: { label: 'Nb-95' },
    position: { x: 200, y: 600 },
  },
  {
    id: '15',
    data: { label: 'Mo-95' },
    position: { x: 200, y: 750 },
  },
  {
    id: '16',
    data: { label: 'Tc-95' },
    position: { x: 200, y: 900 },
  },
  {
    id: '17',
    data: { label: 'Ru-95' },
    position: { x: 200, y: 1050 },
  },
  {
    id: '18',
    data: { label: 'Rh-95' },
    position: { x: 200, y: 1200 },
  },
  {
    id: '19',
    data: { label: 'Pd-95' },
    position: { x: 200, y: 1350 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'n', type: 'straight' },
  { id: 'e1-3', source: '1', target: '3', label: 'n', type: 'straight' },
  { id: 'e2-4', source: '2', target: '4', label: 'β-', type: 'straight' },
  { id: 'e4-5', source: '4', target: '5', label: 'β-', type: 'straight' },
  { id: 'e5-6', source: '5', target: '6', label: 'β-', type: 'straight' },
  { id: 'e6-7', source: '6', target: '7', label: 'β-', type: 'straight' },
  { id: 'e7-8', source: '7', target: '8', label: 'β-', type: 'straight' },
  { id: 'e8-9', source: '8', target: '9', label: 'β-', type: 'straight' },
  { id: 'e9-10', source: '9', target: '10', label: 'β-', type: 'straight' },
  { id: 'e10-11', source: '10', target: '11', label: 'β-', type: 'straight' },
  { id: 'e3-12', source: '3', target: '12', label: 'β-', type: 'straight' },
  { id: 'e12-13', source: '12', target: '13', label: 'β-', type: 'straight' },
  { id: 'e13-14', source: '13', target: '14', label: 'β-', type: 'straight' },
  { id: 'e14-15', source: '14', target: '15', label: 'β-', type: 'straight' },
  { id: 'e15-16', source: '15', target: '16', label: 'β-', type: 'straight' },
  { id: 'e16-17', source: '16', target: '17', label: 'β-', type: 'straight' },
  { id: 'e17-18', source: '17', target: '18', label: 'β-', type: 'straight' },
  { id: 'e18-19', source: '18', target: '19', label: 'β-', type: 'straight' },
];

const FissionReactionDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div style={{ height: 1500, width: 400 }} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeMouseEnter={(event, node) => {
          console.log('mouse enter:', node);
        }}
        onNodeMouseLeave={(event, node) => {
          console.log('mouse leave:', node);
        }}
        nodesDraggable={true}
      >
        <Background variant="lines" />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FissionReactionDiagram;