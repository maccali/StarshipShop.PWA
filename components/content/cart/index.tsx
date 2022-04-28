
import React, { useEffect, useState } from 'react'

import * as yup from "yup";
import YupHelper from '../../../helpers/YupHelper'
import ErrorHelper from '../../../helpers/ErrorHelper'

import CartHelper from '../../../helpers/CartHelper'
import CartCard from '../../cards/cart'

import styles from './cartcontent.module.css'
import Button from '../../utils/button'
import Input from '../../utils/input'
import Modal from '../../utils/modal'


const AdressSchema = yup.object().shape({
  email: yup
    .string()
    .email('Value is not a e-mail')
    .required('Type an Email'),
});

function CartContent() {

  const [items, setItems] = useState<Array<ComicFace>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);


  const [load, setLoad] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  function clear() {
    setTotalPrice(0)
    setTotalQuantity(0)
  }

  function getTotals() {
    setTotalPrice(CartHelper.getTotalPrice())
    setTotalQuantity(CartHelper.getTotalQuantity())
  }

  function getData() {
    setItems(CartHelper.getCart())
  }

  function run() {
    clear()
    getData()
    getTotals()
  }

  function handleSubmit() {
    setLoad(true)

    console.log('😁😁')
    console.log(email)
    AdressSchema.validate({
      email
    }, { abortEarly: false })
      .then((_data) => {
        console.log('😘 Dados válidos')
        // sendRequest(data)
        setEmailError(false)
        setModal(true)
        setLoad(false)
        // set modal open
      })
      .catch(function (err) {
        console.log('😥 Dados inválidos')

        var errors = YupHelper.errorTreatment(err)

        errors.map((item) => {
          if (item.field === "email") {
            setEmailError(true)
            setEmailErrorMsg(item.message)
          }
        })
        setLoad(false)
      });
  }

  useEffect(() => {
    run()
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container p-0">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.title}>Shopping Cart</h1>
            </div>
          </div>
          {(items !== null) && (items.length > 0) ?
            <>
              <div className="row">
                <div className="col-12">
                  <h3 className={styles.subtitle}>Purchase Items</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  {items.map(item =>
                    <CartCard
                      title={item.title}
                      imgUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      price={item.prices[0].price}
                      quantity={item.quantity}
                      total={item.total}
                      addFunction={() => {
                        CartHelper.addToCart(item)
                        run()
                      }}
                      minusFunction={() => {
                        CartHelper.removeToCart(item.id)
                        run()
                      }}
                      removeFunction={() => {
                        CartHelper.removeToCart(item.id, true)
                        run()
                      }}
                    />
                  )}
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className="row">
                <div className="col-12">
                  <h3 className={styles.subtitle}>
                    Purchase Summary
                  </h3>
                </div>
              </div>
              <div className="row">
                < div className="col-xs-12">
                  <div className={styles.totals}>
                    <div className={styles.totalnode}>
                      <p>Total</p>
                      <span>${totalPrice}</span>
                    </div>
                    <div className={styles.totalnode}>
                      <p>Quantity</p>
                      <span>{totalQuantity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.separator}></div>
              <div className="row">
                <div className="col-12">
                  <h3 className={styles.subtitle}>
                    Shipping Address
                  </h3>
                </div>
              </div>
              <div className="row">
                < div className="col-xs-12 col-md-4">
                </div>
                < div className="col-xs-12 col-md-4">
                  <Input
                    title='Email'
                    label='email'
                    type="text"
                    value={email}
                    onChange={(event: any) => { setEmail(event.target.value) }}
                  />
                  {(emailError ? <p className="text-danger">{emailErrorMsg}</p> : '')}

                </div>
                < div className="col-xs-12 col-md-4">
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className="row">
                <div className="col-xs-12">
                  <div className={styles.checkout}>
                    <Button
                      title="Checkot"
                      action={() => { handleSubmit() }}
                      load={load}
                      textOnly
                    >
                      <span>Checkout</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles.separator}></div>
            </>
            :
            <div className="row">
              <div className="col-12">
                <div className={styles.empitycont}>
                  <div className={styles.empity}>
                    Cart Empity
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Modal
        open={modal}
        setClose={() => { 
          CartHelper.removeAll()
          window.location.href = '/'
        }}
      >
        <div className={styles.fullcenter}>
          <h1>🎇 Successful Purchase ✨</h1>
          <p>After the purchase is approved, we will send the keys to the informed Email</p>
        </div>
      </Modal>

    </>
  )
}

export default CartContent