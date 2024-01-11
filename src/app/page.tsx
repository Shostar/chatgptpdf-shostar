import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default async function Home() {
  const [userId] = await auth []
  const isAuth = !!userId
  return [
  <div className='w-screen min-h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col item-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5x1 font-semibold">Chat with any PDF</h1>
          <UserButton afterSignOutUrl='/'
        </div>

<div className="flex mt-2">
  {isAuth &&(
    <botton>Go to Chats</botton>
  )}
  
</div>

      </div>
    </div>
  </div>
  ]
}
