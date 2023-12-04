"use client"
import Image from 'next/image'
import Link from 'next/link'
import TableHome from './components/Table'
import axios from 'axios'
import { useEffect } from 'react'
import { error } from 'console'
export default function Home() {
 useEffect(() => {
  const fetchData = async()=>{
      const data = await axios.get('http://localhost:8000/blogs')
      console.log('data',data.data);
      
  }  ;   fetchData().catch(error=>console.log(error))
 }, []);
  return (
    <div className='flex flex-col gap-3'>
      {/* <Link className='' href="/facebook">facebook</Link>
      <a className='' href="/insta">instagram</a> */}
      <TableHome/>
    </div>
  )
}
