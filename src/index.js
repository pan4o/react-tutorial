import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Test = () => (
	<div>test</div>
);

ReactDOM.render(
	<Router>
		<Route to='/' component={Test} />
	</Router>
	, document.getElementById('root')
);
