import aboutImage from '../src/assets/image 55.png'
export default function About(){
    return (
        <div className='bg-[#FFF7ED]'>
        <div>
            <img className="w-full max-h-[803.21px]" src={aboutImage} />
        </div >
        <div className="w-11/12 mx-auto my-22 ]">
        <h1 className="font-extrabold text-8xl mb-12 space-x-7 leading-24" >Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="my-12 text-5xl space-x-3 leading-16">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
        (Hitch costs extra 😉)
        </p>

        <p className="my-22 text-5xl space-x-3 leading-16 ">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className="bg-[#FFCC8D] p-10 rounded-2xl my-32">
            <p className="font-bold  m-12 text-6xl space-x-3 leading-16">Your destination is waiting.<br/>
              Your van is ready.
              </p> 
              <button className="bg-black text-white p-3 rounded-2xl px-7 mt-10 font-bold m-12 text-4xl space-x-3 leading-16">Explore our vans</button>
        </div>
        </div>
        </div>
    )
}