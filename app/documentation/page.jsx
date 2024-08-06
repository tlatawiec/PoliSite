'use client'

import List from '../components/list'
import { useRef } from 'react';

export default function Documentation() {

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleItemClick = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className="documentation-container">
        <List onItemClick={ handleItemClick }/> 
        <div className='documentation-body'>
          <section className='section-body' ref={sectionRefs[0]}>
            <h1 className="text-4xl text-center font-regular pt-8 tracking-widest">PoliAPI Docs v1</h1>
            <p className='text-md pt-8 text-center'>This is the documentation for PoliAPI v1</p>

            <h3 className='section-header'>Overview</h3>
            <p className='section-text text-center mx-auto py-12'>PoliAPI is designed to offer transparent and accessible data on the trading activities of government officials. PoliAPI provides detailed endpoints for querying trade data based on various criteria.</p>
          </section>
          <section className='section-body' ref={sectionRefs[1]}>
            <h3 className='section-header'>Host</h3>
            <p className='section-text'>All requests use the host <span className='gray-bg-text'>https://api.poliapi.com</span></p>
            <p className='section-text'>Requests to <span className='gray-bg-text'>https://poliapi.com/api</span> will be redirected to <span className='gray-bg-text'>https://api.poliapi.com</span></p>
          </section>
          <section className='section-body' ref={sectionRefs[2]}>
            <h3 className='section-header'>Authentication</h3>
            <p className='section-text'>Authentication is not currently required.</p>
          </section>
          <section className='section-body' ref={sectionRefs[3]}>
            <h3 className='section-header'>Error Handling</h3>
            <p className='section-text'>Error Response Format: Errors are returned with a status code and a message.</p>
            <p className='section-text'>Common Status Codes:</p>
            <div className='gray-bg-content border-red'>
              <li>200 OK: Request succeeded.</li>
              <li>400 Bad Request: Invalid request format or parameters.</li>
              <li>404 Not Found: Endpoint or resource not found.</li>
              <li>500 Internal Server Error: Server-side error.</li>
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[4]}>
            <h2 className='section-header border-none mx-auto text-center'>GET Trades</h2>
          </section>
          <section className='section-body' ref={sectionRefs[5]}>
            <h3 className='section-header'>By Politician</h3>
            <p>Returns a list of all trades made by a certain politician.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/politician/ (politician_name)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Politician Name | First and Last Name Separated by a Space</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/politician/
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <div>
                <span className='text-white text-xs ml-8'>json</span> <br />
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-28"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">3</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"ASML Holding NV"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-24"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">164.66</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-05-21"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">0</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Advanced Micro Devices Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-05-21"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">192.35</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-05-21"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">0</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Apple Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-05-21"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">219.65</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-25"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">1</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Applied Materials Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-25"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-28"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">3</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"ASML Holding NV"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-24"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[6]}>
            <h3 className='section-header'>By Published Date</h3>
            <p>Returns a list of all trades published within the given number of weeks.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/published_within/ (number of weeks)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Weeks | Numerical Number of Weeks Worth of Recent Trades</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/published_within/1
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <div>
                <span className='text-white text-xs ml-8'>json</span> <br />
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael McCaul",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"TX",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"22.41",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-23",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"31",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Vishay Intertechnology Inc",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-21",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael McCaul",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"TX",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"22.50",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-23",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"32",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Vishay Intertechnology Inc",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-20",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael McCaul",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"TX",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"22.29",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-23",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"38",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Vishay Intertechnology Inc",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-14",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael McCaul",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"TX",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"38.15",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-23",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"38",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Sensata Technologies Holding PLC",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-14",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Victoria Spartz",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"IN",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"151.80",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-26",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"27",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"50K–100K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Simon Property Group Inc",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-28",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[7]}>
            <h3 className='section-header'>By Traded Date</h3>
            <p>Returns a list of all trades traded within the given number of weeks.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/traded_within/ (number of weeks)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Weeks | Numerical Number of Weeks Worth of Recent Trades</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/traded_within/1
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <span className='text-white text-xs ml-8'>json</span> <br />
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Marjorie Taylor Greene",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-25",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"0",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"250K–500K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"US TREASURY BILLS",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-24",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Buddy Carter",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"61.05",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-25",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"1",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"100K–250K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Ameris Bancorp",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-23",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Katie Britt",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"AL",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-29",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"5",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"ONEWATER MARINE INC",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-24",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Katie Britt",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"AL",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"26.83",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-29",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"5",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"ONEWATER MARINE INC",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-24",</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[8]}>
            <h3 className='section-header'>By Trade Type</h3>
            <p>Returns a list of all trades of a certain 'type'.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/type/ (type)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Type | 'Buy' / 'Sell' / 'Exchange'</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/type/buy
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <span className='text-white text-xs ml-8'>json</span> <br />
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Hal Rogers"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"KY"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"20"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"15K–50K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"FRANKLIN COUNTY SCHOOL DISTRICT"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-20"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Rick Allen"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"15"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"250K–500K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"US TREASURY BILLS"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-25"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael Collins"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"0.78"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"19"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"AERODROME FINANCE"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-22"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"John Boozman"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"AR"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"31.77"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"37"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Goldman Sachs ActiveBeta Emerging Markets Equity ETF"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-04"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[9]}>
            <h3 className='section-header'>By Trade Size</h3>
            <p>Returns all exchanges who's total price fall within a given range.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/size/ (size)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <p>Size: </p>
              <li>0 | 1K-15K</li>
              <li>1 | 15K-50K</li>
              <li>2 | 50K-100K</li>
              <li>3 | 100K-250K</li>
              <li>4 | 250K-500K</li>
              <li>5 | 500K-1M</li>
              <li>6 | 1M-5M</li>
              <li>7 | 5M-25M</li>
              <li>8 | 25M-50M</li>

            </div>

            <h5 className='section-sub-header'>Why?</h5>
            <p>When politicians publish their trades, they are not required to provide the exact amount of the exchange. Instead, they report the value within a specified range.</p>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/type/buy
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <span className='text-white text-xs ml-8'>json</span> <br />
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Hal Rogers"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"KY"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"20"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"15K–50K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"FRANKLIN COUNTY SCHOOL DISTRICT"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-20"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Rick Allen"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"N/A"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"15"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"250K–500K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"US TREASURY BILLS"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-25"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"Michael Collins"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"GA"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"0.78"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"19"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"AERODROME FINANCE"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-22"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Name:"</span><span class="text-white"> : </span><span class="text-blue">"John Boozman"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Party:"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician Position:"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Politician State:"</span><span class="text-white"> : </span><span class="text-blue">"AR"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Price:"</span><span class="text-white"> : </span><span class="text-blue">"31.77"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Publish Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Reporting Gap:"</span><span class="text-white"> : </span><span class="text-blue">"37"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Size:"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Trade Issuer:"</span><span class="text-white"> : </span><span class="text-blue">"Goldman Sachs ActiveBeta Emerging Markets Equity ETF"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Traded Date:"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-04"</span><br />
                &nbsp; &nbsp; <span class="text-red">"Type:"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class="text-white">&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[10]}>
            <h3 className='section-header'>By Trade Issuer</h3>
            <p>Returns a list of all trades performed through a certain trade issuer.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/issuer/ (trade issuer)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Issuer | Name of Issuer / Company</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/issuer/Apple Inc
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <span className='text-white text-xs ml-8'>json</span> <br />
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Ro Khanna"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Democrat"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"CA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"186.19"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-02-07"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"26"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Apple Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-10"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>               
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Ro Khanna"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Democrat"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"CA"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"186.19"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-02-07"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"26"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"15K–50K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Apple Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-10"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>       
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Markwayne Mullin"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"OK"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"185.64"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-27"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"24"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"50K–100K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Apple Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-02"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>                
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Blake Moore"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"House"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"UT"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"191.56"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-24"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"5"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"15K–50K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Apple Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-01-19"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[11]}>
            <h3 className='section-header'>By Price</h3>
            <p>Returns a list of all trades with an exchange price within the queried constraints.</p>
            <h4 className='section-sub-header'>Endpoint</h4>
            <div className='gray-bg-content border-blue'>
              https://api.poliapi.com/api/price/(condition)/(price target)
            </div>
            <h5 className='section-sub-header'>Parameters</h5>
            <div className='gray-bg-content border-blue'>
              <li>Condition | Over / Under / N/A (No Price)</li>
              <li>Price Target | Numerical Price Target for Query</li>
            </div>
            <h6 className='section-sub-header'>Example Request</h6>
            <div className='gray-bg-content border-green-400'>
              GET https://api.poliapi.com/api/price/over/100
            </div>
            <h7 className='section-sub-header'>Example Response</h7>
            <div className='json-response'>
              <span className='text-white text-xs ml-8'>json</span> <br />
              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Markwayne Mullin"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"OK"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"532.96"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-12"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"30"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"15K–50K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Parker-Hannifin Corp"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-12"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"buy"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Markwayne Mullin"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"OK"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"295.68"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-12"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"29"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"500K–1M"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"iShares Russell 1000 ETF"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-13"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"Shelley Moore Capito"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"WV"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"263.07"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"14"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"Air Products and Chemicals Inc"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-27"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,

              <div>
                &nbsp; &nbsp; <span class="text-white">&#123;</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Name"</span><span class="text-white"> : </span><span class="text-blue">"John Boozman"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Party"</span><span class="text-white"> : </span><span class="text-blue">"Republican"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician Position"</span><span class="text-white"> : </span><span class="text-blue">"Senate"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Politician State"</span><span class="text-white"> : </span><span class="text-blue">"AR"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Price"</span><span class="text-white"> : </span><span class="text-blue">"534.24"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Publish Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-07-11"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Reporting Gap"</span><span class="text-white"> : </span><span class="text-blue">"37"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Size"</span><span class="text-white"> : </span><span class="text-blue">"1K–15K"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Trade Issuer"</span><span class="text-white"> : </span><span class="text-blue">"SPDR MidCap 400 ETF Trust"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Traded Date"</span><span class="text-white"> : </span><span class="text-blue">"2024-06-04"</span><br />
                &nbsp; &nbsp; <span class="text-red">  "Type"</span><span class="text-white"> : </span><span class="text-blue">"sell"</span><br />
                &nbsp; &nbsp; <span class='text-white'>&#125;</span>
              </div>,
              <span className='text-white text-xs ml-8'>continues...</span> <br />
            </div>
          </section>
          <section className='section-body' ref={sectionRefs[12]}>
            <h3 className='section-header'>Rate Limits</h3>
            <p>No current rate limits.</p>
          </section>
          <section className='section-body' ref={sectionRefs[13]}>
            <h3 className='section-header'>Contact Information</h3>
            <p>Feel free to ask questions and leave suggestions at contactus@poliapi.com</p>
          </section>
          <section className='section-body pb-4' ref={sectionRefs[14]}>
            <h3 className='section-header'>Versioning</h3>
            <p>PoliAPI v1</p>
          </section>
        </div>
      </div>
    </main>
  )
}