import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import PortafolioLayour from './Layout/PortFolioLayout';

ReactDOM.render(<PortafolioLayour />, document.getElementById('root'));
registerServiceWorker();
