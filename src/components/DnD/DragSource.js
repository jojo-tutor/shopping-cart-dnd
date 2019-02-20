import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import Types from './Types'

const source = {
  beginDrag({ dragItem }) {
    return dragItem
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

const DndSource = (props) => {
  const {
    handle
    , children
    , hideHandle
    , isDragging
    , dropEffect
    , customStyle
    , connectDragSource
    , connectDragPreview
    , ...restProps
  } = props

  const opacity = isDragging ? 0.4 : 1
  const style = {
    backgroundColor: 'green',
    width: '1rem',
    height: '1rem',
    display: 'inline-block',
    marginRight: '0.75rem',
    cursor: 'move'
  }

  if (hideHandle) {
    const handleStyle = {
      cursor: 'move',
      width: '100%',
      position: 'relative',
      zIndex: '5',
      display:'inline-block'
    }
    return connectDragSource(
      <div className='draggable__wrapper' style={handleStyle}>
        {children({ ...restProps, style })}
      </div>
    )
  }

  return connectDragPreview(
    <div style={{ ...customStyle, opacity }}>
      {children({ ...restProps, style, connectDragSource }, { dropEffect })}
    </div>
  )
}

DndSource.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(Types.PRODUCT_TO_CART, source, collect)(DndSource)
