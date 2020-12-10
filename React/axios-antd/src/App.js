import React, { Component, useEffect, useState } from 'react';
import { Table } from 'antd'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    data: [],
    loading: true,
  }
  fetchData = async () => {
    const res = await axios.get("https://run.mocky.io/v3/c7a55023-ded8-439f-8452-d004d83c3354?mocky-delay=3000ms")
    this.setState(
      {
        data: res.data,
        loading: false
      }
    )
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {
    const columns = [
      {
        title: "ชื่อ",
        dataIndex: "name"
      },
      {
        title: "วันเกิด",
        dataIndex: "birthday"
      },
      {
        title: "บริษัท",
        dataIndex: "company"
      },
      {
        title: "เบอร์โทรศัพท์",
        dataIndex: "phoneNumber"
      }
    ]
    return (
      <div className="App">
        <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} />
      </div>
    );

  }
}
// function App() {
//   const [data, setData] = useState([])
//   useEffect(() => {
// axios.get("https://run.mocky.io/v3/c7a55023-ded8-439f-8452-d004d83c3354")
//   .then((res) => {
//     setData(res.data)
//   })
//   }, [])

// const columns = [
//   {
//     title: "ชื่อ",
//     dataIndex: "name"
//   },
//   {
//     title: "วันเกิด",
//     dataIndex: "birthday"
//   },
//   {
//     title: "บริษัท",
//     dataIndex: "company"
//   },
//   {
//     title: "เบอร์โทรศัพท์",
//     dataIndex: "phoneNumber"
//   }
// ];
// return (
//   <div className="App">
//     <Table columns={columns} dataSource={data} />
//   </div>
// );
// }

export default App;
