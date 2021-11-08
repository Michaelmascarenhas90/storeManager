import app from './app';

import './models/connection';

app.listen(app.get('port'))

console.log('rodando me localhost:', app.get('port'))
