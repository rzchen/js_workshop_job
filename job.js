window.addEventListener('DOMContentLoaded', function() {
  const form = document.forms[0];
  const searchBtn = document.querySelector('.button')
  let pannel = document.querySelector('#job-pannel')
  let counter = 1
  let des, loc, full_time;
  
  // searchBtn.addEventListener('click', function() {
  //   pannel.innerHTML = ''
  // })

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    pannel.innerHTML = ''
    
    
    counter = 1
    des = form.elements['description'].value
    loc = form.elements['location'].value
    full_time = form.elements['full_time'].checked
    

    if (full_time) {
      full_time = 'on'
    } else {
      full_time = ''
    }

    // var url = 
    
    // console.log(url)
    
    fetchJob()
    

    
  })
  const btn = document.querySelector('.pagination-next')
  btn.addEventListener('click', function() {
    counter = counter + 1
    fetchJob()


    


  })

  

  function fetchJob(params) {
    fetch(`https://still-spire-37210.herokuapp.com/positions.json?description=${des}&location=${loc}&full_time=${full_time}&page=${counter}`)
    .then(response => response.json())
    .then(job => {
      job.forEach(element => {
        let template = document.querySelector("template")
    

        let title = template.content.querySelector("h4 a")
        title.setAttribute('href', job.url)
        title.textContent = element.title

        let company = template.content.querySelector(".company")
        company.setAttribute('href', job.company_url)
        company.textContent = element.company

        let fullTime = template.content.querySelector(".fulltime")
        fullTime.textContent = element.type

        let location = template.content.querySelector(".location")
        location.textContent = element.location

        let outTable = document.querySelector('#job-pannel')
        const clone = document.importNode(template.content, true)
      
        // console.log(clone)

        outTable.appendChild(clone)

        if (job.length === 50){
          document.querySelector('.pagination-next').removeAttribute('disabled')
        } else {
          document.querySelector('.pagination-next').setAttribute('disabled', 'true')
        }
      });

      
    })



  }

})
// company: "momox GmbH"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGFJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8788b29b238caec344b3aafefb84da2656fbd34a/momox_logo.png"
// company_url: "http://momox.biz/en/career/"
// created_at: "Fri Aug 21 11:27:24 UTC 2020"
// description: "<p>momox is Germany’s leading online buying-and-selling service, where everyone can turn their books, films, CDs, games and clothes into money. Via <a href="http://www.momox.de">www.momox.de</a> and the momox app (iOS and Android) we buy used products at fixed prices. We offer the purchased items for sale in our online shops <a href="http://www.medimops.de">www.medimops.de</a> (media) and <a href="http://www.ubup.com">www.ubup.com</a> (fashion) and other marketplaces such as Amazon and eBay, faithful to the slogan “We give products a second life”. Since starting, we have grown to become a company of 1,800 dedicated people at four locations in Berlin, Leipzig, Neuenhagen and Stettin. We are active in Germany, Austria, France and Great Britain. In 2018 our employees generated a revenue of 200 million euros. Since our launch, we have bought to sell more than 190 million items.</p>↵<p>We are building a brand new exciting team of four which will be responsible for the product search on our platforms. Take the challenge as a new team member and implement your ideas and knowledge. You´ll work in an agile environment with highly motivated developers, scrum masters and product owners.</p>↵<p>YOUR MISSION:</p>↵<p>Responsibility for the maintainance and further development (with Python / Go, SolR) of the product search for our internal platforms ubup and medimops↵Cooperate closely with the product teams↵Advise our product owners and development teams on the optimization and further development of the search and its integration into our existing products</p>↵<p>YOUR PROFILE:</p>↵<p>Passionate about search &amp; machine learning technologies↵Experience in Golang "Go", ideally also with Python↵Experience with Lucene / Solr (or Elasticsearch)↵Experience with NoSQL Databases (Cassandra, MongoDB)↵Experience with information retrieval, ranking systems, recommendation systems↵Familiarity with Google Cloud or other cloud technologies↵Fluency in English is mandatory</p>↵<p>YOU CAN LOOK FORWARD TO:</p>↵<p>A motivated team with an open mind for new impulses - Bring in your ideas and put them into practice!↵Choose the laptop you prefer to work with (Apple MacBook or Lenovo Thinkpad)↵Space and budget for your professional development↵Flat hierarchies and open doors↵Fit on the job through back training, running groups, cooperation with Gympass and healthy lunch from smunch↵Employee benefits such as job tickets, shopping vouchers for our medimops shop, company pension scheme, team events and company breakfasts↵Attractively equipped retreat rooms (table football, PS4 etc.), free catering (fruit, drinks, coffee, etc.) and much more↵A company with a sustainable business idea - We give used goods a new home</p>↵<p>If you have any further questions, feel free to call: Henning Manthey (Recruiting), Tel: +49306108007541</p>↵<p>More information about us you will find under momox.biz/en/career/.</p>↵<p>This is the right challenge for you? Apply now!↵<a href="https://momox-jobs.dvinci.de/en/p/english/jobs/10479/intro">https://momox-jobs.dvinci.de/en/p/english/jobs/10479/intro</a></p>↵"
// how_to_apply: "<p>Email your CV to <a href="mailto:jobs@momox.biz">jobs@momox.biz</a></p>↵"
// id: "790ac956-80db-4f7a-ac00-889deb49778a"
// location: "Berlin"
// title: "SENIOR SOFTWARE ENGINEER (GOLANG / SOLR / ELASTICSEARCH) SEARCH (M/F/D)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/790ac956-80db-4f7a-ac00-889deb49778a"