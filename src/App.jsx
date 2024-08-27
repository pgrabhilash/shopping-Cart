import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Product from "./components/Product";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';


function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(10);
  const perPage = 10;
  const totalResults = 30;

  // useEffect(() => {
  //   setProgress(40);
  //    fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${perPage}`)
  //    .then((resp) => resp.json())
  //    .then((data) => setProduct(data))
  //    .catch(err => console.log(err.message));

  //    setProgress(100);

  // }, [])

  // const fetchData = () => {
  //   setProgress(40)
  //   setPage(page + perPage)
  //   fetch(`https://api.escuelajs.co/api/v1/products?offset=${page + perPage}&limit=${perPage}`)
  //   .then((resp) => resp.json())
  //   .then((data) => setProduct(product.concat(data)))
  //   .catch(err => console.log(err.message));
  //   setProgress(100);
  // }
  const fetchData  = async() => {
    setProgress(30)
    try {
      setPage(page + perPage)
      const respone = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page + perPage}&limit=${perPage}`);
      setProgress(60)
      const data = await  respone.json();
     setProduct(product.concat(data));
     setProgress(100);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async() => {
      setProgress(30)
    try {
           const respone = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${perPage}`);
           setProgress(60)
           const data = await  respone.json();
          setProduct(data);
          setProgress(100);
         }
    catch (error) {
      console.log(error.message);
    }
  } 
    fetchData();
  },[])
  

  return (
    <>
          <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
      />
    <Navbar />

    <InfiniteScroll
     dataLength={product.length}
     next={fetchData}
     hasMore={product.length !== totalResults}
     loader={<h4 className="text-2xl font-bold text-center">Loading...</h4>}
     endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
     }
    >
      <main className="bg-gray-800 h-full w-full text-white flex flex-wrap items-center justify-center">
       {
        product.map(items => (
          <Product key={items.id} items={items} />
        ))
       }
      </main>
      </InfiniteScroll>
    </>
  )
}

export default App
