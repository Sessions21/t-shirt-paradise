import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { ADD_TSHIRT } from '../utils/mutations';

function CreateTshirt() {
  const [addTshirt, { error }] = useMutation(ADD_TSHIRT);

  

  return (
    <div>CreateTshirt</div>
  )
}

export default CreateTshirt