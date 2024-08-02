import Card from './Card'
import React from 'react'
import nfts from '../../../public/data/nfts';
import Cardlist from './Cardlist';
import { AiOutlineArrowRight } from 'react-icons/ai'
const  Products=() => {
  return (
    
      <section className='p-4 pb-24 text-white'>
       <div className='container max-w-6xl mx-auto overflow-hidden'> 
        <div className='flex flex-col items-center text-center space-y-5'>
            <h1 className='text-2xl md:text-3xl font-medium'>Exlpore Hot Products</h1>
            <p className='text-slate-400 md:w-2/4 mx-auto'> We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
       </div>
       {/*card grid*/}
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 items-center justify-between'>
        {
            nfts.map((item,i)=>(
                <Card key={i} item={item}/>
            ))
        }

       </div>
       </div>
      </section>
    // <section className='p-4 pb-24 text-white'>
    //     <div className='container max-w-6xl mx-auto overflow-hidden'>
    //       <div className='flex flex-col items-center space-y-8'>
    //         {/* Content */}
    //         <div
    //           className='flex flex-col items-center space-y-4 '
    //         >
    //           <h1
               
    //             className='text-2xl md:text-3xl font-medium'
    //           >
    //             Explore Hot Products
    //           </h1>
    //           <p
    //             className='text-slate-400 max-w-lg text-center'
    //           >
    //             We are a huge marketplace dedicated to connecting great artists
    //             of all Techwind with their fans and unique token collectors!
    //           </p>
    //         </div>
    //         {/* Collection of NFTs */}
    //         <div
              
    //           className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'
    //         >
    //           {/* Card 1 */}
    //           <Cardlist />
    //         </div>
    //         <div className='md:flex items-center space-x-2 text-slate-400 font-semibold hidden  '>
    //           <p>Explore All Items</p>
    //           <AiOutlineArrowRight size={12} />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    
  )
}

export default Products;