import react from 'react';
import reactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

reactDOM.render(
<ContextProvider>
<App/>


</ContextProvider>,
document.getElementById('root'));