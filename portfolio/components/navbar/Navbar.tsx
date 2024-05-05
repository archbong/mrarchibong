import Link from 'next/link'
import React, { Suspense } from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="navbar bg-nigeria-green">
      <div className="flex-1">
        <Link href="/" className="text-xl">
          <Suspense fallback={<p>Loading..</p>}>
            <Logo />
          </Suspense>
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex justify-between gap-3 mr-5 text-nigeria-white">
          <div>
            <p><span>01</span><br />Work</p>
          </div>
          <div>
          <p><span>02</span><br />Playground</p>
          </div>
          <div>
          <p><span>03</span><br />About Me</p>
          </div>
        </div>
        {/* <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button> */}
      </div>
    </div>
  )
}
