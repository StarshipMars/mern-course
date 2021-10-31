import React, {useState , useEffect} from 'react';
import {Document , pdfjs, Page} from 'react-pdf';
import './App.css';
import file from './documents/file.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = ()=>{
  //const [base64 , setBase64] = useState('')

  /*useEffect(()=>{

    const readAndUploadFile = async ()=>{

      const result = await new Promise((resolve, reject)=>{
        const reader = new FileReader()
        const blob = new Blob([ file ], {type: `application/pdf`})
        
        reader.readAsDataURL(blob)
        
              reader.addEventListener('load', ()=>{
                  resolve({
                      body: reader.result,
                      isError: false
                  })
              })

              reader.addEventListener('error', ()=>{
                  reject({
                      body: reader.result,
                      isError: true,
                      
                  })
              })

      })
      setBase64(result.body)
    }
     readAndUploadFile()

  }, [])*/

  
  return (
    <div className='container'>
      {
                true  ? 
                  <Document
                    className={['document']}
                    renderMode='svg'
                    file={file}
                  >
                    <Page pageNumber={1}/>
                  </Document>
                          :
                  <div>Loading...</div>
           
      }
    </div>
  );
}

export default App;
