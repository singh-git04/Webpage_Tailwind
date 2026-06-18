import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
   <div className='h-full w-full absolute inset-0 px-8 py-8 flex flex-col justify-between   '>
            <h1 className='text-4xl h-12 w-12 text-center rounded-full bg-white'>
                {props.id+1}</h1>
        <div className='flex flex-col gap-16'>
            <p className='text-sm text-white text-shadow-2xs '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo totam, rerum nostrum nulla asperiores.
                </p> 
              <div className='flex  justify-between' >
        <button style={{backgroundColor:props.color}} className='px-6 w-fit text-base bg-orange-300 rounded-full'>
            {props.tag}
            </button>
        <button className='h-12 w-12 bg-blue-300 rounded-full flex items-center justify-center'>
            <ArrowRight />
        </button>
       </div>
        </div>
        </div>
  )
}

export default RightCardContent
