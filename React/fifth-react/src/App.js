import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: '/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function App() {
  return <div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: '#222222', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    {/* <Calculator /> */}
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  </div>;
}

export default App;
