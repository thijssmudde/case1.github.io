import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const Landing = () => {
  const classes = useStyles()

  return <div>
    <Typography variant='h5' className='mb-4' gutterBottom>
      Compensatory Schemes
    </Typography>

    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>1. Property value loss scheme.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            There is evidence that the development of windmill projects may result in a devaluation of residential property values, which could result in local annoyance with such projects<sup>25-28</sup>. A study of over two thousand houses in Germany found that prices of houses in view of wind turbines depleted by up to 14%<sup>27</sup>. As such, it is reasonable to assume that concerns about depleting property values will work to decrease public support. Thus, reimbursing local residents with the amount of damages to their property can enhance public support. Such a scheme is currently being run in Denmark, where the compensation offered ranges between 2% to 40% of the property value<sup>30</sup>.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>2. Co-ownership.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            While it has been suggested that locally-owned projects are viewed more positively, a major challenge faced during the development of wind farms is to substantiate the benefits to the local community while maintaining larger investments for achieving renewable energy targets. Providing local residents with some form of ownership in the wind project, for example, by offering them shares in the wind farm at cost price instead of at the going market prices can serve to increase public support. The co-ownership scheme is being implemented in Denmark, where developers are obliged to offer at least 20% of shares at cost price to individual residents living within 4.5 kilometres of the wind energy project site<sup>29</sup>.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>3. Participatory budgeting.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Another method to promote public support for wind energy projects is the provision of benefits to a community level. This can be done by channelling the flow of financial benefits to local communities and allowing the residents to democratically deliberate upon its allocation, instead of merely providing residents themselves with direct financial benefits. In providing residents with the opportunity to be closely involved in the distribution of the compensation, they are more involved and invested in the project, compared to the situation in which they would simply be offered a lump-sum for incurred damages or partial ownership in the wind farm. A participatory budgeting scheme for hydroelectric and photovoltaic power plants is being currently run in the north-eastern regions of Italy, with an initial evaluation showing promising results in increasing citizen engagement<sup>47</sup>. To the best of our knowledge, a participatory budgeting approach has not yet been tested to increase public support for wind-energy projects.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>4. Homeowners and tenants.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Evidence from other countries with wind energy projects is scant on distinguishing between the effects of financial compensation schemes among house owners and house renters. In the studies that we reviewed in the current research (see Table 1 in policy brief), we found no such differentiation. However, following from the problem of split-incentives between landlords and renters, we can speculate that house owners and house renters may differ in energy-related behaviours. Some studies looking at conservation behaviours of homeowners and tenants have indeed found, for example, that renters may spend less on energy conservation improvements in their housing units because of a shorter pay-back period<sup>48</sup>. If this is indeed the case, we would expect that there is some difference in perceived fairness of compensation among house owners and house renters. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>

    <ExpansionPanel className='mt-5'>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>References</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <small>
            <ul>
              <li>[25] Gibbons, S. (2015). Gone with the wind: Valuing the visual impacts of wind turbines through house prices. Journal of Environmental Economics and Management, 72, 177-196.</li>
              <li>[26] Heintzelman, M., & Tuttle, C. (2012). Values in the wind: A hedonic analysis of wind power facilities. Land Economics, 88(3), 571-588.</li>
              <li>[27] Sunak, Y., & Madlener, R. (2016). The impact of wind farm visibility on property values: A spatial difference-in-differences analysis. Energy Economics, 55, 79-91</li>
              <li>[28] Sunak, Y., & Madlener, R. (2017). The impact of wind farms on property values: A locally weighted hedonic pricing model. Papers in Regional Science, 96(2), 423-444.</li>
              <li>[29] Jørgensen, M., Anker, H., & Lassen, J. (2020). Distributive fairness and local acceptance of wind turbines: The role of compensation schemes. Energy Policy, 138, 111294-111294.</li>
              <li>[30] Rønne, A. (2016). ‘Opposition to wind farms and the possible responses of the legal system’. In: L. Barrera-Hernández, B. Barton, L. Godden, A. Lucas & A. Rønne (Eds.), Sharing the Costs and Benefits of Energy and Resource Activity. Oxford University Press, pp. 173–191.</li>
              <li>[47] Capaccioli, A., Poderi, G., Bettega, M., & D'Andrea, V. (2016, September). Exploring alternative participatory budgeting approaches as means for citizens engagement: the case of energy. In 2016 IEEE International Smart Cities Conference (ISC2) (pp. 1-4). IEEE.</li>
              <li>[48] Long, J. E. (1993). An econometric analysis of residential expenditures on energy conservation and renewable energy sources. Energy Economics, 15(4), 232-238.</li>
            </ul>
          </small>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  </div>
}

export default Landing