export default function CodeSamples() {
 
  return (
    <main>
      <div className='w-1/2 mx-auto'>
        <h1 className='section-header text-center border-none'>PoliAPI Code Samples</h1>

        <h2 className='section-header'>Node.js</h2>
          <div className='json-response'>
            <span className='text-white text-xs pl-4'>index.js</span>
            <pre>
              <code>
                <span className="token-comment">1</span> <span className="token-keyword">const</span> <span className="token-variable">callPoliAPI</span> <span className="token-operator">=</span> <span className="token-keyword">async</span> <span className="token-operator">()</span> <span className="token-operator">=&gt;</span> <span className="token-punctuation">&#123;</span><br />
                <span className="token-comment">2</span> &nbsp;&nbsp;<span className="token-comment">// query that will be used for this API call (see documentation for all queries)</span><br />
                <span className="token-comment">3</span> &nbsp;&nbsp;<span className="token-keyword">const</span> <span className="token-variable">query</span> <span className="token-operator">=</span> <span className="token-string">'published_within'</span><span className="token-punctuation">;</span><br />
                <span className="token-comment">4</span><br />
                <span className="token-comment">5</span> &nbsp;&nbsp;<span className="token-comment">// query parameter</span><br />
                <span className="token-comment">6</span> &nbsp;&nbsp;<span className="token-keyword">const</span> <span className="token-variable">num_weeks</span> <span className="token-operator">=</span> <span className="token-string">'2'</span><span className="token-punctuation">;</span><br />
                <span className="token-comment">7</span><br />
                <span className="token-comment">8</span> &nbsp;&nbsp;<span className="token-keyword">try</span> <span className="token-punctuation">&#123;</span><br />
                <span className="token-comment">9</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-comment">// fetch all trades that have been published within the last two weeks</span><br />
                <span className="token-comment">10</span> &nbsp;&nbsp;&nbsp;<span className="token-keyword">const</span> <span className="token-variable">response</span> <span className="token-operator">=</span> <span className="token-keyword">await</span> <span className="token-function">fetch</span><span className='token-punctuation'>(</span><span className="token-string">&#96;https://api.poliapi.com/api/<span className="token-template-variable">$&#123;query&#125;</span>/<span className="token-template-variable">$&#123;num_weeks&#125;</span>&#96;</span><span className="token-punctuation">);</span><br />
                <span className="token-comment">11</span><br />
                <span className="token-comment">12</span> &nbsp;&nbsp;&nbsp;<span className="token-comment">// error check the response of the API</span><br />
                <span className="token-comment">13</span> &nbsp;&nbsp;&nbsp;<span className="token-keyword">if</span> <span className="token-punctuation">(</span><span className="token-operator">!</span><span className="token-variable">response</span><span className="token-punctuation">.</span><span className="token-function">ok</span><span className="token-punctuation">)</span> <span className="token-punctuation">&#123;</span><br />
                <span className="token-comment">14</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-keyword">throw</span> <span className="token-keyword">new</span> <span className="token-function">Error</span><span className='token-punctuation'>(</span><span className="token-string">&#96;HTTP error! status: <span className="token-template-variable">$&#123;response.status&#125;</span>&#96;</span><span className="token-punctuation">);</span><br />
                <span className="token-comment">15</span> &nbsp;&nbsp;&nbsp;<span className="token-punctuation">&#125;</span><br />
                <span className="token-comment">16</span><br />
                <span className="token-comment">17</span> &nbsp;&nbsp;&nbsp;<span className="token-comment">// await the data and print it to the console</span><br />
                <span className="token-comment">18</span> &nbsp;&nbsp;&nbsp;<span className="token-keyword">const</span> <span className="token-variable">result</span> <span className="token-operator">=</span> <span className="token-keyword">await</span> <span className="token-variable">response</span><span className="token-operator">.</span><span className="token-function">json</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span><br />
                <span className="token-comment">19</span> &nbsp;&nbsp;&nbsp;<span className="token-function">console</span><span className="token-punctuation">.</span><span className="token-function">log</span><span className='token-punctuation'>(</span><span className="token-string">'API Response:'</span><span className='token-punctuation'>, </span><span className="token-variable">result</span><span className="token-punctuation">);</span><br />
                <span className="token-comment">20</span><br />
                <span className="token-comment">21</span> &nbsp;&nbsp;&nbsp;<span className="token-comment">// catch any errors with fetching</span><br />
                <span className="token-comment">22</span> &nbsp;&nbsp;&nbsp;<span className="token-punctuation">&#125;</span><span className="token-keyword"> catch</span> <span className="token-punctuation">(</span><span className="token-variable">error</span><span className="token-punctuation">)</span> <span className="token-punctuation">&#123;</span><br />
                <span className="token-comment">23</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-function">console</span><span className="token-punctuation">.</span><span className="token-function">error</span><span className='token-punctuation'>(</span><span className="token-string">'Error fetching data:'</span><span className='token-punctuation'>,</span> <span className="token-variable">error</span><span className="token-punctuation">);</span><br />
                <span className="token-comment">24</span> &nbsp;&nbsp;&nbsp;<span className="token-punctuation">&#125;</span><br />
                <span className="token-comment">25</span> <span className="token-punctuation">&#125;</span>
              </code>
            </pre>
          </div>
        
        <h2 className='section-header'>Python</h2>
          <div className='json-response'>
            <span className='text-white text-xs pl-4'>main.py</span>
            <pre>
              <code>
                <span className="token-comment">1  # pip install requests if not already done</span><br />
                <span className="token-comment">2</span>&nbsp;&nbsp;<span className="token-keyword">import</span> <span className="token-function">requests</span><br />
                <span className="token-comment">3</span> <br />
                <span className="token-comment">4  # select a query</span><br />
                <span className="token-comment">5</span>&nbsp;&nbsp;<span className="token-variable">query</span> <span className="text-white">=</span><span className="token-string"> 'politician'</span><br />
                <span className="token-comment">6</span> <br />
                <span className="token-comment">7  # select a query parameter</span> <br />
                <span className="token-comment">8</span>&nbsp;&nbsp;<span className="token-variable">politician</span> <span className="text-white">=</span><span className="token-string"> 'Nancy Pelosi'</span><br />
                <span className="token-comment">9</span> <br />
                <span className="token-comment">10 # format API call</span><br />
                <span className="token-comment">11</span>&nbsp;<span className="token-variable">query</span> <span className="text-white">=</span><span className="token-function"> requests.get</span><span className="token-punctuation">(</span><span className="text-red">f</span><span className="token-string">'https://api.poliapi.com/api/&#123;query&#125;/&#123;politician&#125;'</span><span className="token-punctuation">)</span><br />
                <span className="token-comment">12</span> <br />
                <span className="token-comment">13 # check for status of the API request</span><br />
                <span className="token-comment">14</span><span className="token-keyword"> if</span> <span className="token attribute"><span className="token-variable">response</span><span className="text-white">.</span><span className="token-function">status_code</span></span> <span className="token-punctuation">!=</span><span className="text-purple-500"> 200</span><span className="token-punctuation">:</span><br />
                <span className="token-comment">15</span>&nbsp;&nbsp;&nbsp;<span className="token-function">print</span><span className="token-punctuation">(</span><span className="text-red">f</span><span className="token-string">'Failed to get politician: status_code &#123;response.status_code&#125;'</span><span className="token-punctuation">)</span><br />
                <span className="token-comment">16</span> <br />
                <span className="token-comment">17 # upon success print the trades as a json</span><br />
                <span className="token-comment">18</span><span className="token-keyword"> else</span><span className="token-punctuation">:</span><br />
                <span className="token-comment">19</span>&nbsp;&nbsp;&nbsp;<span className="token-function">print</span><span className="token-punctuation">(</span><span className="text-red">f</span><span className="token-string">'&#123;politician&#125; trades:'</span><span className="token-punctuation">, </span><span className="token function"><span className="token-variable">response</span><span className="token-punctuation">.</span><span className="token-function">json</span></span><span className="token-punctuation">())</span><br />
              </code>
            </pre>
          </div>
      </div>
    </main>
  )
}