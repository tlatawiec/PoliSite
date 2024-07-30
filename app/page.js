import Image from 'next/image';
import Link from 'next/link'
export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-24'>
      <div className='bento-container'>
          <div className='bento-half'>
            <div className='bento-small'>Get the competitive edge with exclusive access to comprehensive politician trade data.</div>
            <div className='bento-big flex flex-col'>
              <div className='flex justify-center'>
                <Link className='main-button' href='/documentation'>API Docs</Link>
                <Link className='main-button' href='/codesamples'>Code Samples</Link>
              </div>
              
              <h1 className='bento-small text-base'>Ready to analyze the trades? Get your API key now.</h1>
              <button className='main-button mx-auto'>Get your API Key</button>
            </div>
          </div>

          <div className='bento-half'>
            <div className='bento-big pl-8 py-10 bg-pb rounded-lg'> 
              <span className='text-white text-xs'>json</span>  <br/>
              <span className='text-white'>&#123;</span> <br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Name:"</span> <span className='text-white'> : </span> <span className='text-blue'>"Nancy Pelosi",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Party:"</span> <span className='text-white'> : </span> <span className='text-blue'>"Democrat",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Position:"</span> <span className='text-white'> : </span> <span className='text-blue'>"House",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician State:"</span> <span className='text-white'> : </span> <span className='text-blue'>"CA",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Price:"</span> <span className='text-white'> : </span> <span className='text-blue'>"173.50",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Publish Date:"</span> <span className='text-white'> : </span> <span className='text-blue'>"2023-06-07",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Reporting Gap:"</span> <span className='text-white'> : </span> <span className='text-blue'>"29",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Size:"</span> <span className='text-white'> : </span> <span className='text-blue'>"500K–1M",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Trade Issuer:"</span> <span className='text-white'> : </span> <span className='text-blue'>"Apple Inc",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Traded Date:"</span> <span className='text-white'> : </span> <span className='text-blue'>"2023-05-08",</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Type:"</span> <span className='text-white'> : </span> <span className='text-blue'>"buy"</span><br />
              <span className='text-white'>&#125;</span> <br />
            </div>
            <div className='bento-small'>View detailed records of over 36,000 trades made by politicians.</div>
          </div>
      </div>
    </main>
  );
}
