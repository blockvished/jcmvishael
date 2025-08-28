import Link from 'next/link'
import { ArrowLeft } from "lucide-react";


export default function NotFoundPage() {
  return (
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent'>
            <Link
              href='/'
              className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go back home</span>
            </Link>
          </div>
          <main className='sm:flex mt-20'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                  I believe You're lost
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}
