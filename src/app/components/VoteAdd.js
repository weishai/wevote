import React, { Component, PropTypes } from 'react'

import {
  Form,
  FormCell,
  TextArea,
  Radio,
  Input
} from '../components/form'

import Label from '../components/label'

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

class VoteAdd extends Component {

  render(){
    return(
      <div>
        <CellsTitle>投票问题</CellsTitle>
        <Form>
          <FormCell>
            <CellBody>
              <TextArea placeholder="请输入你的问题描述" rows="2" maxlength="140"></TextArea>
            </CellBody>
          </FormCell>
        </Form>

        <CellsTitle>选项类型</CellsTitle>
        <Form radio>
          <FormCell radio>
            <CellBody>单选</CellBody>
            <CellFooter>
              <Radio name="radio1" value="1" defaultChecked/>
            </CellFooter>
          </FormCell>
          <FormCell radio>
            <CellBody>多选</CellBody>
            <CellFooter>
              <Radio name="radio1" value="2"/>
            </CellFooter>
          </FormCell>
        </Form>

        <CellsTitle>选项</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>选项1</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="描述"/>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>选项2</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="描述"/>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>选项3</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="描述"/>
            </CellBody>
            <CellFooter>
              <Button className="voteadd-btn-delopt" type="default" size="small">删除</Button>
            </CellFooter>
          </FormCell>
        </Form>
        <Button className="voteadd-btn-addopt" type="default" size="small">添加选项</Button>
        <ButtonArea>
          <Button className="voteadd-btn-submit">提 交</Button>
        </ButtonArea>
      </div>
    )
  }

}

export default VoteAdd