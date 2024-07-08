import * as React from 'react';
import { duration, styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtTel } from './Button';

const AccordionThree = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 0,
  paddingBlock: '10px',
  backgroundColor: 'transparent',
  '&:not(:last-child)': {
    borderBottom: '1px solid #D5D1E1',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<AiOutlinePlus />} {...props} />
))(({ theme, expanded }) => ({
  backgroundColor: 'transparent',
  color: '#202020',
  fontSize: '1.2rem',
  justifyContent: 'space-between',
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid ',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: expanded ? '#088269' : 'transparent',
    color: expanded ? '#fff' : '#202020',
    border: expanded ? '' : '1px solid #D5D1E1', 
    transition: 'background-color 0.3s, color 0.3s, border 0.3s, duration 200',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  color: '#202020', 
  backgroundColor: 'transparent',
    
  
}));

export default function CustomizedAccordions({
  text,
  subtitle,
  text1,
  text2,
  text3,
  subtitle1,
  topText1,
  text4,
  text5,
  text6,
  text7,
  text8,
  button

}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className=" py-[60px] lg:py-[120px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-white">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] mb-[50px] ">
            {text}
          </p>
          <p className="text-[#202020]">{subtitle}</p>
        </div>

      <div>
          <Typography><p className='text-[30px] font-medium leading-[120%] mb-6'>{topText1}</p></Typography>
      <div className="border-t border-[#D5D1E1]">
          <AccordionThree expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expanded={expanded === 'panel1'} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>
                <p className="text-[18px] ">{text1}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {subtitle1}
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expanded={expanded === 'panel2'} aria-controls="panel2d-content" id="panel2d-header">
              <Typography>
                <p className="text-[18px] ">{text2}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expanded={expanded === 'panel3'} aria-controls="panel3d-content" id="panel3d-header">
              <Typography>
                <p className="text-[18px] ">{text3}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expanded={expanded === 'panel4'} aria-controls="panel4d-content" id="panel4d-header">
              <Typography>
                <p className="text-[18px] ">{text4}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary expanded={expanded === 'panel5'} aria-controls="panel5d-content" id="panel5d-header">
              <Typography>
                <p className="text-[18px] ">{text5}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary expanded={expanded === 'panel6'} aria-controls="panel6d-content" id="panel6d-header">
              <Typography>
                <p className="text-[18px] ">{text6}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary expanded={expanded === 'panel7'} aria-controls="panel7d-content" id="panel7d-header">
              <Typography>
                <p className="text-[18px] ">{text7}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                   {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

          <AccordionThree expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary expanded={expanded === 'panel8'} aria-controls="panel8d-content" id="panel8d-header">
              <Typography>
                <p className="text-[18px] ">{text8}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                <div className='mt-10'>
                   {button}
                </div>
              </Typography>
            </AccordionDetails>
          </AccordionThree>

        </div>
      </div>
      </div>
    </div>
  );
}
