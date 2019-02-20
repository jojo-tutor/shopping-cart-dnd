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
  itemType: monitor.getItemType(),
  sourceItem: monitor.getItem()
})

const DndTarget = (props) => {
  // own props
  const { position, children, ...restProps } = props


  // injected props
  const { isOverCurrent, canDrop, connectDropTarget } = restProps

  console.log('Dndtarget retst', restProps, props)
  
  return connectDropTarget(children({ ...restProps, isOverCurrent }))
}

export default DropTarget(Types.PRODUCT_TO_CART, target, collect)(DndTarget)
