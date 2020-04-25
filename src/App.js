
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Analytics from 'react-router-ga'
import { ThemeProvider } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'

import Theme from './Theme/Theme'

import Landing from './Pages/Landing'
import Conclusion from './Pages/Conclusion'
import Results from './Pages/Results'
import Schemes from './Pages/Schemes'

import Webinar from './Pages/Webinar'
import Downloads from './Pages/Downloads'

import withPathName from './Helpers/WithPathName'
import Navbar from './Components/Navbar'

import './App.css'
import './utilities.min.css' // bootstrap classes for padding & margin

const App = () => <ThemeProvider theme={Theme}>
  <BrowserRouter>
    <Navbar>
      <Card>
        <CardContent>
          <Analytics id={process.env.REACT_APP_GOOGLE_ANALYTICS}>
            <Switch>
              <Route exact path='/' component={withPathName(Landing, 'Case 1')}/>
              <Route exact path='/results' component={withPathName(Results, 'Results')}/>
              <Route exact path='/schemes' component={withPathName(Schemes, 'Schemes')}/>
              <Route exact path='/conclusion' component={withPathName(Conclusion, 'Conclusion')}/>
              <Route exact path='/schemes' component={withPathName(Schemes, 'Schemes')}/>

              <Route exact path='/downloads' component={withPathName(Downloads, 'Downloads')}/>
              <Route exact path='/webinar' component={withPathName(Webinar, 'Webinar')}/>

              <Route component={NoMatch}/>
            </Switch>
          </Analytics>
        </CardContent>
      </Card>
    </Navbar>
  </BrowserRouter>
</ThemeProvider>

const NoMatch = () => <Redirect to={{pathname: '/'}} />

export default App