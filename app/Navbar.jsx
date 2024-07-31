import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/"><span className="text-red text-2xl">Poli</span><span className="text-blue font-extrabold">API</span></Link>
      <div className='flex justify-end'>
        <Link className="mx-2" href="/documentation">Documentation</Link>
        <Link className="mx-6" href="/codesamples">Code Samples</Link>
        <a>Get an API Key</a>
      </div>
    </nav>
  );
}