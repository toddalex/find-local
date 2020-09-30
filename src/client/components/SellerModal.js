import React from 'react'

const SellerModal = ({name, about, email, phone, closeModal}) => {
  return (
    <div>
      <div style={styles.modalContent}>
        <span style={styles.close} onClick={closeModal}>close</span>
        <h1>Seller:{name}</h1>
        <h4>Email:{email}</h4>
        <h4>Phone:{phone}</h4>
        <p>About:{about}</p>
      </div>
    </div>
  )
}

export default SellerModal

const styles = {
  modalContent: {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: '30%',
    fontFamily: 'Open Sans',
    color: '#333333'
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}
