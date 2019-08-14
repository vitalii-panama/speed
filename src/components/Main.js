import React, { useState } from 'react'
const fetch = require('isomorphic-fetch')

function Main () {
  const [url, setUrl] = useState(null)
  const onUrlChange = (event) => {
    setUrl(event.target.value)
  }
  const postURL = (e) => {
    e.preventDefault()
    if (url) {
      const reg = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
      let reged = url.match(reg)
      if (reged) {
        if (!reged.includes('https://')) {
          reged = 'https://' + reged
        }console.log(`websiteUrl=${reged}`)

        fetch('https://speedanalyzer.herokuapp.com/api/analyze', {
          method: 'POST',
          crossDomain: true,
          headers: { 'Content-Type': 'application/x-www-form-url-encoded', Accept: 'application/json' },
          body: 'websiteUrl=https%3A%2F%2Fgucci-theme.myshopify.com'
        })
          .then(response => console.log(response))
          .catch(error => console.log(error))

        // const requestBody = {
        //   websiteUrl: 'https%3A%2F%2Fgucci-theme.myshopify.com'
        // }

        // const config = {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // }

        // axios.post('http://speedanalyzer.herokuapp.com/api/analyze', requestBody, config)
        //   .then((result) => {
        //     console.log(result)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
      }
    }
  }
  return (
    <main role='main'>
      <div class='container'>
        <div class='row'>
          <div class='tagline'>
            <h1>This tool identifies performance issues and gives recommendations to fix them</h1>
            <p>Enter your URL below and click Analyze</p>
          </div>
          <form id='analyze' ng-submit='launchTest()' class='col-lg-8 ng-pristine ng-valid'>
            <div class='form-row'>
              <div class='anl'>
                <label for='analyz-url'>URL</label>
                <input id='analyze-url' type='text' name='url' ng-model='url' placeholder='coolstore.com' onChange={onUrlChange} />
              </div>

              <div class='mbld'>
                <label class='mmb'>Mobile </label>
                <label class='des'> Desktop </label>
              </div>
            </div>

            <button id='analyze-submit' type='submit' class='btn btn-primary' onClick={postURL}>Analyze</button>

          </form>
        </div>
      </div>
      <div class='color-block'>
        <div class='container'>
          <h2>How It Works</h2>
          <hr class='mhr' />
          <div class='row mrm'>
            <div class='col-12 col-md-4'>
              <h3>Analyze</h3>
              <p><img alt='' src='https://img.icons8.com/cotton/64/000000/domain.png' /></p>

              <p>Run your site through the Analyzer. Try your home page or product page.</p>
            </div>
            <div class='col-12 col-md-4'>
              <h3>Get Results</h3>
              <p><img alt='' src='https://img.icons8.com/cotton/64/000000/domain.png' /></p>

              <p>You'll get a score for each optimization area + recommendations to fix issues.</p>
            </div>
            <div class='col-12 col-md-4'>
              <h3>Optimize</h3>
              <p><img alt='' src='https://img.icons8.com/cotton/64/000000/domain.png' /></p>

              <p>Use our <a href='/'>Shopify Optimization Guide</a> or <a href='/'>Hire Us</a> to optimize your site.</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Main
