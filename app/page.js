import Image from 'next/image';
import Link from 'next/link'
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24 h-fit'>
      <div className='bento-container'>
          <div className='bento-half'>
            <div className='bento-small text-center'>Get the competitive edge with exclusive access to comprehensive politician trade data.</div>
            <div className='bento-big flex flex-col mt-12 justify-center'>
              <div className='flex justify-center'>
                <Link className='main-button' href='/documentation'>API Docs</Link>
                <Link className='main-button' href='/codesamples'>Code Samples</Link>
              </div>
              
              <h1 className='my-12 text-center'>Ready to analyze the trades? Get your API key now.</h1>
              <button className='main-button mx-auto'>Get your API Key</button>
            </div>
          </div>

          <div className='bento-half'>
            <div className='bento-big pl-8 py-10 bg-pb rounded-lg'> 
              <span className='text-white text-xs'>json</span>  <br/>
              <span className='text-white'>&#123;</span> <br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Name"</span> <span className='text-white'> : </span> <span className='text-blue'>"Nancy Pelosi"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Party"</span> <span className='text-white'> : </span> <span className='text-blue'>"Democrat"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician Position"</span> <span className='text-white'> : </span> <span className='text-blue'>"House"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Politician State"</span> <span className='text-white'> : </span> <span className='text-blue'>"CA"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Price"</span> <span className='text-white'> : </span> <span className='text-blue'>"173.50"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Publish Date"</span> <span className='text-white'> : </span> <span className='text-blue'>"2023-06-07"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Reporting Gap"</span> <span className='text-white'> : </span> <span className='text-blue'>"29"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Size"</span> <span className='text-white'> : </span> <span className='text-blue'>"500K–1M"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Trade Issuer"</span> <span className='text-white'> : </span> <span className='text-blue'>"Apple Inc"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Traded Date"</span> <span className='text-white'> : </span> <span className='text-blue'>"2023-05-08"</span><br />
                &nbsp; &nbsp; <span className='text-red'>"Type"</span> <span className='text-white'> : </span> <span className='text-blue'>"buy"</span><br />
              <span className='text-white'>&#125;</span> <br />
            </div>
            <div className='bento-small'>Receive information like this on all politician's trades.</div>
          </div>
      </div>
      <div className='w-5/6'>
        <h1 className='section-header'>Features</h1>
        <h2 className='feature-header border-blue'>Database of over 36,000 trades</h2>
        <p>Gain access to an extensive database of trades, which is continuously updated through both manual entries and automatic integration of government records.</p>
        <h2 className='feature-header border-red'>Streamlined queries to access the data</h2>
        <p>Retrieve trades associated with specific politicians, trade issuers, sizes, and much more. To see all endpoints, please see our <Link className="text-blue" href="/documentation">documentation</Link>.</p>
        <h2 className='feature-header border-blue'>Real time updates</h2>
        <p>Our database will recognize new trades within 15 minutes of them being published. Keeping you up to date with what politicians are trading.</p>
      </div>
     
    </main>
  );
}
