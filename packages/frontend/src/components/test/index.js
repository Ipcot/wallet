import { Button } from '@mui/material'
import { CustomSwitch } from './index.styled'

import TransactionModal from 'components/transactionModal/TransactionModal'
import { useState } from 'react'

const TestMUIComponents = () => {
  
  const [showModal, setShowModal] = useState(false);

  return <div style={{display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center'}}>
    <Button variant="text">Text</Button>
    <Button variant="contained" onClick ={() => setShowModal(true)} >Contained</Button>
    <Button color='secondary' variant="outlined">Outlined</Button>

    <CustomSwitch />


    <TransactionModal show={ showModal } close ={ () => setShowModal(false)}/>
  </div>
}

export default TestMUIComponents