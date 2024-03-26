const { Application } = require('egg');

const app = new Application({
  mode: 'single',
});

app.listen(3000, () => {
  console.log('server start on http://127.0.0.1:3000');
});
