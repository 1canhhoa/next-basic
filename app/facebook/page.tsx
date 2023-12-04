'use client'
// nói cho next biết rằng 
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'
const Facebook = () => {
  const router = useRouter()
  const handleButton = ()=>{
    router.push("/")
  }
  return (
    <div>
      <div className='border-[1px]'>facebook</div>
      <Button variant='success'>BTN</Button>
      {/* <button className="px-8 py-2 border-[1px]" onClick={()=>handleButton()}>
        click
      </button> */}
    </div>
  )
}

export default Facebook