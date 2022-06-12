import './index.css'

const ImagesItems = props => {
  const {imageDetails, topValue} = props
  const {id, thumbnailUrl, category} = imageDetails
  const initialImgId = topValue.imgId

  const onClickImage = () => {
    const {onClickedImage} = props
    onClickedImage(id, initialImgId)
  }

  return (
    <li className="image-list-item">
      <button type="button" className="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          category="Fruits"
          className="thumbnail-images"
        />
      </button>
    </li>
  )
}

export default ImagesItems
