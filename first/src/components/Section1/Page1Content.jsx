import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  return (
    <div id='rightCards' className='flex gap-10 mt-7 h-[90vh] w-full py-10 px-5 '>
        <LeftContent/>
        <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content
