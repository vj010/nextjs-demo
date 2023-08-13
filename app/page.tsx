import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2 className='h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Welcome to the Home page!</h2> 
      <Link href='/about'><h1>About Page</h1></Link> 
      <Link href='/contact'><h1>Contact Page</h1></Link> 
    </main>
  )
}
