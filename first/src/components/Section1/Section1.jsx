import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  
  return (
    <div className='h-screen w-full px-16 py-8 '>
        <Navbar/>
        <Page1Content users = {props.users} />
    </div>
  )
}

export default Section1
