import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  console.log(props.color);
  
  return (
    <div className= 'shrink-0 relative h-full w-80 overflow-hidden rounded-3xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />

            <RightCardContent id={props.id} tag = {props.tag} color={props.color} />
    </div>
  )
}

export default RightCard
