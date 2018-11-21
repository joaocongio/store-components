import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ImageZoom from './ImageZoom'

/**
 * Selected Image component.
 * Display an image.
 */
export default class SelectedImage extends Component {
  static propTypes = {
    /** Image to be displayed */
    image: PropTypes.shape({
      /** URL of the image */
      imageUrl: PropTypes.string.isRequired,
      /** Text that describes the image */
      imageText: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    children: img => img,
  }

  state = {
    showZoom: false,
  }

  handleMouseEnterImage = () => {
    this.setState({ showZoom: true })
  }

  handleMouseLeaveZoom = () => {
    this.setState({ showZoom: false })
  }

  stripUrl = url => url.replace(/^https?:/, '')

  render() {
    const {
      image: { imageUrl, imageText },
    } = this.props
    const { showZoom } = this.state

    return (
      <div className="w-100 relative overflow-hidden">
        <div className="vtex-product-image__selected-image">
          <img
            className="vtex-product-image__img-responsive w-100 h-100"
            onMouseEnter={this.handleMouseEnterImage}
            src={this.stripUrl(imageUrl)}
            alt={imageText}
          />
        </div>
        <div className="vtex-product-image__image-zoom-container absolute">
          {showZoom && (
            <ImageZoom
              src={this.stripUrl(imageUrl)}
              alt={imageText}
              onMouseLeaveZoom={this.handleMouseLeaveZoom}
            />
          )}
        </div>
      </div>
    )
  }
}
