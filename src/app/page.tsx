"use client"
import Image from 'next/image'
import Login from './login/page'
import { Button } from '@/components/button/Button'
import { useRouter } from 'next/navigation'

export default function Home() {

  const navigation=useRouter()
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center'>
      <Button classname={''} onclick={()=>navigation.push('/login')}>Login</Button>
      <Button classname={''} onclick={()=>navigation.push('/signup')}>Sign Up</Button>
    </div>
    </div>
  )
}
