import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import styled, { injectGlobal } from 'styled-components';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Wrapper = styled.div`
    font-family: ${getMuiTheme(darkBaseTheme).fontFamily};
    font-size: ${getMuiTheme(darkBaseTheme).fontSize};
    color: ${getMuiTheme(darkBaseTheme).palette.textColor};
    background-color: ${getMuiTheme(darkBaseTheme).palette.canvasColor};
    position: absolute;
    overflow-y: auto;
    height: 100%;	
    width: 100%;
`;

injectGlobal`
    html {
    height: 100%;
    font-size: 16px; /* important - entire UX font size and padding is relative to this value */
    }

    body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
    }

    html,body {
    background-color: white;
    }

    #root {
    height: 100%;
    }

    .container-fluid {
    height: 100%;
    } 
`

const mockTxnData = [
{ 
    date: '1/1/2018',
    account: 'American_Express',
    category: 'Christmas',
    amount: '-50.00'
},
{ 
    date: '1/2/2018',
    account: 'American_Express',
    category: 'New Years',
    amount: '-500.00'
},
{ 
    date: '1/3/2018',
    account: 'Capital_One',
    category: 'Birthday',
    amount: '200.00'
},
{ 
    date: '1/4/2018',
    account: 'Capital_One',
    category: 'Stock market',
    amount: '-10.00'
},
]

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
        <Wrapper>
            <App transactions={mockTxnData}/>
        </Wrapper>
    </MuiThemeProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();

