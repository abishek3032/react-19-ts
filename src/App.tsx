import { useState } from "react"

const App = () => {
  const[cardToggle, setCardToggle] = useState(false)
  const handleToggle = () => {
    setCardToggle(!cardToggle)
  }
  const [data, setData] = useState([
    {
      productId:1001,
      productName:"Apple",
      productPrize:"$12",
      isActive:true
    },
    {
      productId:1002,
      productName:"Orange",
      productPrize:"$14",
      isActive:false
    },
    {
      productId:1003,
      productName:"Banana",
      productPrize:"$16",
      isActive:false
    }
  ])

  const handleDelete = (productId:number) => {
    console.log(productId)
    setData(data.filter((d)=>d.productId !== productId))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="px-10 relative">
        <div className="mt-3 flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <button className="bg-blue-500 text-white p-2 rounded text-sm" onClick={handleToggle}>ADD PRODUCT</button>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {data.map((d)=>(
            <div key={d.productId} className="shadow-lg rounded px-5 py-9">
              <p>{d.productId}</p>
              <p>{d.productName}</p>
              <p className="text-3xl mb-3">{d.productPrize}</p>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-full bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>

                </button>
                <button className="bg-red-500 text-white p-1.5 rounded-full" onClick={()=>handleDelete(d.productId)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="absolute top-14">
            {cardToggle && (
              <div className="shadow-lg backdrop-blur-md rounded text-black p-8 text-sm">
                <form >
                  <p>PRODUCT ID</p>
                  <input type="text" className=" border-black border-b-2 backdrop-blur-sm bg-transparent  outline-none mb-2 w-full"/>
                  <p>PRODUCT NAME</p>
                  <input type="text" className=" border-black border-b-2 backdrop-blur-sm bg-transparent  outline-none mb-2 w-full"/>
                  <p>PRODUCT PRICE</p>
                  <input type="text" className=" border-black border-b-2 backdrop-blur-sm bg-transparent  outline-none mb-2 w-full"/>
                  <p>PRODUCT STATUS</p>
                  <input type="text" className=" border-black border-b-2 backdrop-blur-sm bg-transparent  outline-none mb-2 w-full"/>
                  <button className="text-white bg-black p-3 w-full rounded text-center" onClick={handleSubmit}>SUBMIT</button>
                </form>
              </div>)}
          </div>
        </div>
      </div>
    </>
  )
}
export default App
