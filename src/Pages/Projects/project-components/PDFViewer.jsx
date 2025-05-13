import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function MyPDFViewer (props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='pt-10 w-[100vw] h-[84vh] overflow-clip sm:w-[95vw]'>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={props.pdfLink} plugins={[defaultLayoutPluginInstance]}/>
      </Worker>
    </div>
  );
};


