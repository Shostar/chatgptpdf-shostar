import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { LogIn } from 'lucide-react'

export default async function Home() {
  const [userId] = await auth []
  const isAuth = !!userId
  return [
  <div className='w-screen min-h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col item-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5x1 font-semibold">Chat with any PDF</h1>
          <UserButton afterSignOutUrl='/'></UserButton>
        </div>

<div className="flex mt-2">
  {isAuth &&(
    <botton>Go to Chats</botton>
  )}
  
</div>
    <p className='max-w-x1 mt-1 text-ig text-slate-800'>
      join millions of students, researcher and professinals to instantly anwer questions and understand reserch with AI
    </p>
    <div className='w-full mt-4'>
    {isAuth ? (
      <h1>fileupload</h1>
    ):(
      <Link href="/sign-in">
        <button>login to get started!
          <LogIn className='w-4 h-4 m1-2'></LogIn>
        </button>
      </Link>
    )
    
    }
    </div>
      </div>
    </div>
  </div>
  ]
}
