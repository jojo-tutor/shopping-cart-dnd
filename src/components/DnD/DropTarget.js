import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'
import Types from './Types'

const target = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return
    }
    const { targetItem, onDrop } = props
    const sourceItem = monitor.getItem()
    onDrop(sourceItem, targetItem)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
})

const DndTarget = (props) => {
  // own props
  const { position, children, ...restProps } = props

  // injected props
  const { isOverCurrent, canDrop, connectDropTarget } = restProps
  const style = {}

  if (isOverCurrent) {
    Object.assign(style, {
      borderColor: 'green',
      borderWidth: '1px',
      borderStyle: 'solid'
    })
  }

  return connectDropTarget(children({ ...restProps, style }))
}

export default DropTarget(Types.PRODUCT_TO_CART, target, collect)(DndTarget)
