import PropTypes from 'prop-types'
// import defaulImage from '../images/book-default.jpg'

type Props = {
    id?: number, 
    image?: string, 
    title?: string, 
    price?: number
}

const Book = ({image, title, price}: Props) => {
  return (
    <div>
        <h2>{title || "Default názov"}</h2>
        <img src={image || "book-default.jpg"} alt="kniha" />
        <p>{price || 1000}</p>
    </div>
  )
}

Book.propTypes = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

// Defaultné hodnoty
// Book.defaultProps = {
// image: "book-default.jpg",
// title: "Default názov",
// price: 1000
//}

export default Book