
import React, { useEffect, useState } from 'react'

// External Libs
import Head from 'next/head'
import NumberFormat from 'react-number-format';

// Intenal Utils
import Modal from '../../utils/modal'
import Erro from '../../utils/error'
import Button from '../../utils/button'
import Spinner from '../../utils/spinner';
import Pagination from '../../utils/pagination'

// Product Card and Contents
import ProductCard from '../../cards/product'
import ProductContent from '../product'

// Api Config
import api from '../../../services/api'

function HomeContent() {


  const [product, setProduct] = useState<Array<ProductFace>>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [offset, setOffset] = useState<number>(0);

  const [current, setCurrent] = useState<any>(null);
  const [modal, setModal] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('There was an error when catching days, Verify Internet');


  async function getData() {

    setOffset(page * limit)
    setLoad(true)

    api.get(`/products`)
      .then((response: any) => {
        if (response.status === 200) {
          console.log(response.data)
          setProduct(product.concat(...response.data))
        }
        setPage(page + 1)
        setLoad(false)
      }).catch((_error) => {

        setLoad(false)
      })
  }

  useEffect(() => {
    getData()
  }, []);

  function openModal(current: any) {
    setModal(true)
    setCurrent(current)
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container p-0">
          <div className="row">
            {product && product.map((product: ProductFace) =>
              <div key={product.id} className="col-12 col-sm-6 col-md-4">
                <Button
                  title={product.title}
                  action={() => openModal(product)}
                  noStyle
                >
                  <ProductCard
                    title={`${product.title} -- ${product.category}`}
                    imgUrl={`${product.image}`}
                    description={`${product.description} -- ${product.category}`}
                    price={product.price}
                    rating={product.rating}
                  />
                </Button>
              </div>
            )}
          </div>
          <div className="row">

            {error ? <Erro message={errorMsg} noImg /> : ''}
            {load ? <Spinner />
              : <Pagination
                action={() => getData()}
              >
                <NumberFormat
                  type="text"
                  value={String(page)}
                  onChange={e => setPage(Number(e.target.value))}
                  decimalSeparator={false}
                />
              </Pagination>}
          </div>
        </div>
      </div>
      <Modal open={modal} setClose={() => closeModal()}>
        {current ?
          <ProductContent product={current} />
          : ''}
      </Modal>
    </>
  )
}

export default HomeContent
