import React, { useState } from 'react';

import { useEffect } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Connection, Edge, Elements } from 'react-flow-renderer';

const initialElements: Elements = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

const HiddenFlow = () => {
  const [elements, setElements] = useState<Elements>(initialElements);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const onConnect = (params: Connection | Edge) => setElements((els) => addEdge(params, els));

  useEffect(() => {
    setElements((els) =>
      els.map((e) => {
        e.isHidden = isHidden;
        return e;
      })
    );
  }, [isHidden]);

  return (
    <ReactFlow elements={elements} onConnect={onConnect}>
      <MiniMap />
      <Controls />

      <div style={{ position: 'absolute', left: 10, top: 10, zIndex: 4 }}>
        <div>
          <label htmlFor="ishidden">
            isHidden
            <input
              id="ishidden"
              type="checkbox"
              checked={isHidden}
              onChange={(event) => setIsHidden(event.target.checked)}
              className="react-flow__ishidden"
            />
          </label>
        </div>
      </div>
    </ReactFlow>
  );
};

export default HiddenFlow;
