const Nightmare = require('nightmare');
const nightmare = Nightmare({
  show: true
});

// search uRL
// http://www.putco.com/products.cfm?action=SearchView&Search=97512
const a = '9751221BP'
const url = `http://www.putco.com/products.cfm?action=SearchView&Search=${a}`

nightmare
  .goto(url)
  .evaluate(function() {
    return document.querySelectorAll('td[style]')[1].innerHTML;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error('Search failed:', error);
  });
