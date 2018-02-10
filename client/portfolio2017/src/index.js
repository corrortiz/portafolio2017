import ReactDOM from 'react-dom';

import 'aos/dist/aos.css';
import './sass/main.css';

import registerServiceWorker from './registerServiceWorker';
import PortafolioLayour from './Components/Layout/PortFolioLayout';

ReactDOM.render(PortafolioLayour, document.getElementById('root'));
registerServiceWorker();
