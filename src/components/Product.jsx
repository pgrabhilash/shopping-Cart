import { useState } from "react";

const Product = ({ items }) => {
    const { id, title, price, description, images, creationAt, category } = items;

   const [image, setImage] = useState(images);
   const [show, setShow] = useState(false);

  return (
    <div className="m-2 p-2 w-[600px] bg-slate-600 h-auto rounded-lg">
        <div className="bg-gray-800 flex w-full p-3 items-center justify-center rounded-lg">
            <div className="image flex flex-col flex-wrap m-2">
            {  images.map(image => (
        <img key={id} src={image} alt={title} className="h-[100px] w-[130px] rounded-lg m-2"
        onClick={()=> setImage(image)}
        />
   ))
}
            </div>
            <img src={image} alt={title} className="h-[350px] w-[400px] rounded-lg" />
        </div>

       <div className="prod_body my-2 space-y-3 font-serif p-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        { show &&
        <>
         <h3 className="text-xl font-bold">Price: <span className="text-2xl">{price}</span></h3>

         <p className="text-xl font-bold text-gray-200">Description: {description}</p>

         <h4 className="text-2xl font-bold text-blue-400">{category.name}</h4>
       <img src={category.image} alt={category.name} className="h-[160px] w-[180px] my-3 rounded-lg" />

       <p className="text-xl font-bold my-2">CreatedAt: <span>{creationAt.slice(0, 10)}</span></p>
       </>
     }
     <div className="btn text-center my-4">
        <button className="bg-gray-800 text-xl font-bold w-2/4 rounded-lg px-3 py-2 hover:bg-slate-400 hover:text-black"
         onClick={() => setShow(!show)}
        >{show ? 'Hide': 'Show'}</button>
     </div>
       </div>

      

    </div>
  )
}

export default Product
