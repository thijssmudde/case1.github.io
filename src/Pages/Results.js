import React from 'react'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {
  BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

// make sure parent container have a defined height when using responsive
// component, otherwise height will be 0 and no chart will be rendered. website
// examples showcase many properties, you'll often use just a few of them.

//sup, 'Neutral', uns
const chart1data = [
  {
    name: 'Participatory budgeting', Supportive: 43, 'Neutral': 25, Unsupportive: 32,
  },
  {
    name: 'Direct monetary transfer', Supportive: 47, 'Neutral': 20, Unsupportive: 33,
  },
  {
    name: 'Co-ownership', Supportive: 52, 'Neutral': 18, Unsupportive: 29,
  },
  {
    name: 'No compensation', Supportive: 49, 'Neutral': 18, Unsupportive: 33,
  }
]

//sup, 'Neutral', uns
const chart2data = [
  {
    name: 'Direct monetary transfer', Supportive: 58, 'Neutral': 17, Unsupportive: 25,
  },
  {
    name: 'Participatory budgeting', Supportive: 47, 'Neutral': 14, Unsupportive: 39,
  },
  {
    name: 'No compensation', Supportive: 49, 'Neutral': 20, Unsupportive: 31,
  }
]


const getSteps = () => [
  '1. About two-third (63%) participants in our study believed that windmills degrade the visual landscape.',
  '2. More than two-third (69%) participants in our study expected to be annoyed by the noise produced by windmills.',
  '3. House owners and house renters differ somewhat in their perceptions of what constitutes a fair compensation for installing windmill projects in their neighbourhoods.',
  '4. Current proximity to a windmill significantly predicted public support – those who currently lived near to a windmill reported lower social acceptance of wind energy projects.',
  '5. The belief that windmills play a key role in successful energy transition also predicted greater public support towards wind energy projects.']

const Results = () => {
  const activeStep = 4
  const steps = getSteps()

  return <div>
    <Typography variant='h5' className='mb-4' gutterBottom>
      Results
    </Typography>
    <Typography paragraph className='pl-3 pr-3'>
      Next, we present an overview of the results of our experimental survey. In order to best analyse our data, we have excluded all respondents that failed to correctly identify the compensation scheme they had been offered in the manipulation check. If the respondents would not be able to recall which compensation scheme they were offered, it would likely also not have influenced their degree of public support. As such, the final sample that was employed was reduced from 758 to 482 respondents. 
    </Typography>
    <Typography paragraph className='pl-3 pr-3'>
      We used tests of differences among means to analyse the differences in public support and perceived fairness between various groups. Group-wise means and significance values are summarised in the background document. We briefly discuss our key findings below.
    </Typography>
    <Typography paragraph className='pl-3 pr-3'>
      Among those who received the house owners scenario, the co-ownership of wind energy scheme receivedproject received marginally more support than other compensations. It was also perceived as the fairest compensation scheme. Notably, the average public support for participatory budgeting was lower than even when receiving no financial compensation at all. However, we concede that these differences for various compensation schemes among homeowners were not statistically significant.
    </Typography>
    <Typography variant='subtitle1' gutterBottom>
      Graph 1. Public support by treatment [Homeowners]
    </Typography>
    <BarChart
      width={800}
      height={300}
      data={chart1data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />

      <XAxis dataKey='name' />
      <YAxis label={{ value: '% of Homeowners', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey='Supportive' fill='#39a836'>
        <LabelList dataKey='Supportive' position='top' />
      </Bar>
      <Bar dataKey='Neutral' fill='#71c26f'>
        <LabelList dataKey='Neutral' position='top' />
      </Bar>
      <Bar dataKey='Unsupportive' fill='#c5ddb8'>
        <LabelList dataKey='Unsupportive' position='top' />
      </Bar>
    </BarChart>

    <Typography variant='subtitle1' gutterBottom className='mt-3'>
      Graph 2. Public support by treatment [Tenants]
    </Typography>
    <BarChart
      width={800}
      height={300}
      data={chart2data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />

      <XAxis dataKey='name' />
      <YAxis label={{ value: '% of Tenants', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey='Supportive' fill='#39a836'>
        <LabelList dataKey='Supportive' position='top' />
      </Bar>
      <Bar dataKey='Neutral' fill='#71c26f'>
        <LabelList dataKey='Neutral' position='top' />
      </Bar>
      <Bar dataKey='Unsupportive' fill='#c5ddb8'>
        <LabelList dataKey='Unsupportive' position='top' />
      </Bar>
    </BarChart>

  <Typography variant='h5' className='mb-4' gutterBottom>
    Key Findings
  </Typography>

  <Stepper activeStep={activeStep} orientation='vertical' className='p-2'>
    {steps.map((label, index) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
</div>}

export default Results