import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Product from '../model/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { addToCart } from '../redux/features/CartSlice';


type Props = {
  product: Product
}
export default function ProductCard(props: Props) {
  let { id, title, image, description, price } = props.product;
  const dispatch = useAppDispatch();
  return (
    <div className='col-md-4 my-2'>
      <Card style={{ width: '80%' }}>
        <Link to={`/details/${id}`}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          ${price}
          &nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
          &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} 
          onClick={() => dispatch(addToCart(props.product))}
          color='blue' />
        </Card.Footer>
      </Card>
    </div>
  )
}
