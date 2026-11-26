import homeImage from '../src/assets/image 54.png'

export default function Home(){
    
    return(
       <div
           className="min-h-auto bg-cover bg-center bg-no-repeat "
           style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${homeImage}")`
           }}
       >
          <div className='w-10/12 mx-auto'>
               <h1 className='text-white font-extrabold text-8xl py-30'>You got the travel plans, we got the travel vans.</h1>
                <p className='text-white text-4xl leading-12'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='bg-[#FF8C38] w-full text-white font-extrabold mt-20  h-17.5 rounded-2xl text-2xl mb-26'>Find your van</button>
          </div>
       </div>
    )
}