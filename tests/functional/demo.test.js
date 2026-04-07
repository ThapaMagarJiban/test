const path = require('path');
const { pathToFileURL } = require('url');

const pagePath = pathToFileURL(path.resolve(__dirname, '../../public/index.html')).href;

fixture('Portfolio Task A2 functional test').page(pagePath);

test('should display title and update text after button click', async (t) => {
  const title = Selector('#title');
  const button = Selector('#action-btn');
  const result = Selector('#result');

  await t.expect(title.innerText).eql('Portfolio Task A2 Demo');
  await t.click(button);
  await t.expect(result.innerText).eql('Clicked');
});
