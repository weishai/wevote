import React, { Component, PropTypes } from 'react'

import {
  Form,
  FormCell,
  TextArea,
  Radio,
  Input,
  Checkbox
} from '../components/form'

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
  Button,
  ButtonArea
} from 'react-weui'

class VoteView extends Component {

  render(){
    return(
      <div>
        <CellsTitle><p className="voteview-cell-title">投票周几去聚会？超长字数测试哈哈哈哈超</p></CellsTitle>
        <Form radio>
          <FormCell radio>
            <CellBody>4.8 周五</CellBody>
            <CellFooter>
              <Radio name="radio1" value="1"/>
            </CellFooter>
          </FormCell>
          <FormCell radio>
            <CellBody>4.9 周六</CellBody>
            <CellFooter>
              <Radio name="radio1" value="2"/>
            </CellFooter>
          </FormCell>
          <FormCell radio>
            <CellBody>4.10 周日</CellBody>
            <CellFooter>
              <Radio name="radio1" value="3"/>
            </CellFooter>
          </FormCell>
        </Form>

        <CellsTitle><p className="voteview-cell-title">投票周几去聚会？多选超长字数测试哈哈哈哈超</p></CellsTitle>
        <Form checkbox>
          <FormCell checkbox>
            <CellHeader>
              <Checkbox name="checkbox1" value="1"/>
            </CellHeader>
            <CellBody>标题文字</CellBody>
          </FormCell>
          <FormCell checkbox>
            <CellHeader>
              <Checkbox name="checkbox2" value="2"/>
            </CellHeader>
            <CellBody>标题文字</CellBody>
          </FormCell>
        </Form>
        <ButtonArea>
          <Button className="voteadd-btn-submit">提 交</Button>
        </ButtonArea>
      </div>
    )
  }

}

export default VoteView