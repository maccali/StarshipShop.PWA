
import React, { useEffect, useState, useRef } from 'react'

import * as Yup from "yup";
import YupHelper from '../../../helpers/YupHelper'
import { Form } from "@unform/web";
import { SubmitHandler, FormHandles } from "@unform/core";

import CartHelper from '../../../helpers/CartHelper'
import CartCard from '../../cards/cart'

import styles from './cartcontent.module.css'
import Button from '../../utils/button'
import Modal from '../../utils/modal'

import Input from '../../../components/inputs/input'
import { InputMasked } from '../../../components/inputs/InputMasked'

// const AdressSchema = yup.object().shape({

//   cpf: yup.string().required("CPF é Necessário"),
//   email: yup.string().email().required("Email é Necessário"),
//   password: yup.string().min(8).required("Senha é Necessária"),
//   zipCode: yup.string().required("CEP é Necessário"),
//   address: yup.string().required("Endereço é Necessário"),
//   number: yup.string().required("Número é Necessário"),
// });

function CartContent() {
  const formRef = useRef<FormHandles>(null);

  const [items, setItems] = useState<Array<ProductFaceCart>>([]);
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

  const handleSubmit: SubmitHandler = async () => {
    setLoad(true);

    const data = formRef.current.getData()

    if (!formRef.current) {
      throw new Error();
    }

    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        zipCode: Yup.string().required("CEP é Necessário"),
        address: Yup.string().required("Endereço é Necessário"),
        number: Yup.string().required("Número é Necessário"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      // sendData(data);
      // setEmailError(false)
      setModal(true)
      setLoad(false)
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          console.log("err", error.path)
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoad(false);
    }
  };

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
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
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

                <div>
                  <Form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.zipCode}>
                      <InputMasked
                        name="zipCode"
                        placeholder="CEP"
                        label="CEP"
                        mask="99999-999"
                        type="text"
                      />
                    </div>

                    <div className={styles.address}>
                      <Input
                        name="address"
                        label="Endereço"
                        placeholder="Endereço"
                        type="text"
                      />
                    </div>

                    <div className={styles.number}>
                      <InputMasked
                        name="number"
                        placeholder="Número"
                        label="Número"
                        mask="999999999"
                        type="text"
                      />
                    </div>

                    <div className={styles.complement}>
                      <Input
                        name="complement"
                        label="Complemento"
                        placeholder="Complemento"
                        type="text"
                      />
                    </div>
                  </Form>
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