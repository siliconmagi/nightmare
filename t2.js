const { csvFormat } = require('d3-dsv');
const Nightmare = require('nightmare');
const { readFileSync, writeFileSync } = require('fs');

const numbers = readFileSync('./tesco-title-numbers.csv',
  {encoding: 'utf8'}).trim().split('\n');
// added per article
const START = 'https://eservices.landregistry.gov.uk/wps/portal/Property_Search';

const getAddress = async id => {
  console.log(`Now checking ${id}`);
  const nightmare = new Nightmare({ show: true });

  // Go to initial start page, navigate to Detail search
  try {
    await nightmare
      .goto(START)
      .wait('.bodylinkcopy:first-child')
      .click('.bodylinkcopy:first-child');
  } catch(e) {
    console.error(e);
  }

};
