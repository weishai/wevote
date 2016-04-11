import React, { Component, PropTypes } from 'react'

import {
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter
} from '../components/cell'

import {
  Progress,
  Button,
  ButtonArea
} from 'react-weui'

class VoteView extends Component {

  render(){
    return(
      <div>
        <CellsTitle><p className="voteview-cell-title">投票周几去聚会？超长字数测试哈哈哈哈超</p></CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              4.8 周五
              <div className="voteresult-progress">
                <Progress value={50} />
                <div className="voteresult-progress-text">
                  <span className="num">232 票</span><span className="percent">24%</span>
                </div>
              </div>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              4.9 周六
              <div className="voteresult-progress">
                <Progress value={20} />
                <div className="voteresult-progress-text">
                  <span className="num">32 票</span><span className="percent">89%</span>
                </div>
              </div>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              4.10 周日
              <div className="voteresult-progress">
                <Progress value={16} />
                <div className="voteresult-progress-text">
                  <span className="num">2 票</span><span className="percent">12%</span>
                </div>
              </div>
            </CellBody>
          </Cell>
        </Cells>
      </div>
    )
  }

}

export default VoteView