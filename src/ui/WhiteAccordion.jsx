import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiOutlinePlus } from 'react-icons/ai';

const WhiteAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 0,
  paddingBlock: '10px',
  backgroundColor: '#E5E4ED',
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
  backgroundColor: theme.palette.mode === 'dark' ? '#E5E4ED' : '#E5E4ED',
  color: '#202020',
  fontSize: '1.2rem',
  justifyContent: 'space-between',
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    BorderTop: '1px solid #red',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: expanded ? '#088269' : '#E5E4ED',
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
  backgroundColor: '#E5E4ED',
}));

export default function CustomizedAccordions({
  text,
  subtitle,
  text1,
  text2,
  text3,
  subtitle1
}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="bg-[#E5E4ED] py-[60px] lg:py-[120px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="text-white">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] mb-[50px] ">
            {text}
          </p>
          <p className="text-[#202020]">{subtitle}</p>
        </div>

        <div className="border-t border-[#D5D1E1]">
          <WhiteAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expanded={expanded === 'panel1'} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>
                <p className="text-[18px] ">{text1}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
            
              </Typography>
            </AccordionDetails>
          </WhiteAccordion>

          <WhiteAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expanded={expanded === 'panel2'} aria-controls="panel2d-content" id="panel2d-header">
              <Typography>
                <p className="text-[18px] ">{text2}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
                
              </Typography>
            </AccordionDetails>
          </WhiteAccordion>

          <WhiteAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expanded={expanded === 'panel3'} aria-controls="panel3d-content" id="panel3d-header">
              <Typography>
                <p className="text-[18px] ">{text3}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] ">{subtitle1}</p>
              
              </Typography>
            </AccordionDetails>
          </WhiteAccordion>
        </div>
      </div>
    </div>
  );
}
