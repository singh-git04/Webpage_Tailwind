import RightCard from './RightCard'

const RightContent = (props) => {
  
  return (
    <div     className='h-[full] w-full py-5 px-5  flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img = {elem.img} tag = {elem.tag} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent
