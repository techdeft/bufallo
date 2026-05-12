const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'http://www.buffalonarrows.com/';
const pages = [
  'Dir_Airlines.php',
  'Dir_Ads.php',
  'Dir_Attract.php',
  'Dir_Edu.php',
  'Dir_Fab.php',
  'Dir_Gov.php',
  'Dir_Cons.php',
  'Dir_Mun.php',
  'Dir_Other.php'
];

async function scrape() {
  const allData = [];

  for (const page of pages) {
    try {
      console.log(`Fetching ${page}...`);
      const response = await fetch(baseUrl + page);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // The content is usually in the #content div
      // Let's get the raw text, but try to structure it.
      // Often the title is in an h1 or h2 or just strong tags.
      const contentDiv = $('#content');
      
      // Since the HTML is very basic, we'll extract text block by block
      // To preserve some structure, we'll get the raw text, split by newlines, 
      // and clean it up.
      
      let text = contentDiv.text().replace(/\t/g, ' ').replace(/\r/g, '\n');
      let lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      allData.push({
        source: page,
        lines: lines
      });
      
    } catch (e) {
      console.error('Error on', page, e);
    }
  }

  fs.writeFileSync('C:\\Users\\Bankola\\.gemini\\antigravity\\brain\\2ce96712-d091-4f98-9bd7-5a449f1c38c3\\scratch\\raw_directory.json', JSON.stringify(allData, null, 2));
  console.log('Done!');
}

scrape();
