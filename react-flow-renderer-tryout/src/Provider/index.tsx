import React, { useState, MouseEvent } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  OnLoadParams,
  FlowElement,
  Connection,
  Edge,
  Elements,
  ConnectionMode,
} from 'react-flow-renderer';

import Sidebar from './Sidebar';

import './provider.css';

const onElementClick = (_: MouseEvent, element: FlowElement) => console.log('click', element);
const onLoad = (reactFlowInstance: OnLoadParams) => console.log('flow loaded:', reactFlowInstance);

const initialElements: Elements = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
];

const ProviderFlow = () => {
  const [elements, setElements] = useState<Elements>(initialElements);
  const onConnect = (params: Connection | Edge) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove: Elements) => setElements((els) => removeElements(elementsToRemove, els));

  return (
    <div className="providerflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper">
          <ReactFlow
            elements={elements}
            onElementClick={onElementClick}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            connectionMode={ConnectionMode.Loose}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default ProviderFlow;
