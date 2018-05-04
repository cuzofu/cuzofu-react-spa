
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Spin, Form, Input, Table } from 'antd'
import {
  fetchHouseDetail,
} from '../../actions/house'

if (process.env.NODE_ENV === 'development') {
  console.log('development');
}

const FormItem = Form.Item;

@Form.create({})

@connect((state, props) => ({ config: state.config, houseDetailResult: state.houseDetailResult }))
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      },
    };
  }

  componentDidMount() {
    console.log(this.props.params.id);
    this.props.dispatch(fetchHouseDetail({ id: this.props.params.id }, (respose) => {
      console.log(respose);
    }));
  }

  render() {
    const { houseDetailResult } = this.props;
    console.log(houseDetailResult);
    return (
      <div className="page">
        <table>
          <tr>
            <td>建筑物地址</td>
            <td>{houseDetailResult.address}</td>
          </tr>
          <tr>
            <td>行政区划</td>
            <td>{houseDetailResult.division}</td>
          </tr>
          <tr>
            <td>管辖单位</td>
            <td>{houseDetailResult.institutions}</td>
          </tr>
          <tr>
            <td>管辖警员</td>
            <td>{houseDetailResult.policeName}</td>
          </tr>
          <tr>
            <td>房屋状态</td>
            <td>{houseDetailResult.houseStatus}</td>
          </tr>
          <tr>
            <td>地址属性</td>
            <td>{houseDetailResult.addressType}</td>
          </tr>
        </table>
      </div>
    )
  }
}
