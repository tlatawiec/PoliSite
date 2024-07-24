import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-dark flex justify-between">
      <Link href="/"><span className="text-red text-2xl">Poli</span><span className="text-blue font-extrabold">API</span></Link>
      <div>
        <a className="mx-6">Documentation</a>
        <a>Get an API Key</a>
      </div>
    </nav>
  );
}