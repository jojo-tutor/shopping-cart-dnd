import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
  const { children, ...restProps } = props

  // injected props
  const { connectDropTarget } = restProps

  return connectDropTarget(children(restProps))
}

DndTarget.propTypes = {
  children: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
}

export default DropTarget(Types.PRODUCT_TO_CART, target, collect)(DndTarget)
