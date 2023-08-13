import Link from 'next/link';
export default function About() {
   return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className='h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Welcome to the About page!</h1> 
      <Link href='/'><h1>Go back to Home Page</h1></Link> 
    </main>
  )
    
}
