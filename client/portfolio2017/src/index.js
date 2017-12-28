import ReactDOM from 'react-dom';

import 'typeface-roboto';
import './sass/main.css';

import registerServiceWorker from './registerServiceWorker';
import PortafolioLayour from './Components/Layout/PortFolioLayout';

ReactDOM.render(PortafolioLayour, document.getElementById('root'));
registerServiceWorker();
