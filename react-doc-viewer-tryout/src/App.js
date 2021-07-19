import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

export default function App() {
  const docs = [
    { uri: 'http://localhost:3001/t_and_c.docx' }, // Local File
  ];

  return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
}
