import NumberFormat from 'react-number-format';
import { IoEllipsisVertical, IoPricetag } from 'react-icons/io5'
import { IoMdShare } from 'react-icons/io';
import { Container, Title, Header, Bottom, SalesBar, IncomesBar, Line, Tags } from './styles';
import roundAccurately from '../../../../../utils/round';


function Card({info, active}) {
  const { Name, IncomesTotal, SalesTotal } = info;
  var percentage = (IncomesTotal / SalesTotal) * 100;
  if(percentage>100)
    percentage = 100;
  return (
      <Container active={active}>
        <Header>
          <Line>
            <Title>{Name}</Title>
            <IoEllipsisVertical></IoEllipsisVertical>

          </Line>
          <span><NumberFormat value={roundAccurately(SalesTotal, 2)} 
                        displayType={'text'} prefix={'$ '}
                        thousandSeparator={'.'} decimalSeparator={','} />
          </span>
          <span><NumberFormat value={roundAccurately(IncomesTotal, 2)} 
                        displayType={'text'} prefix={'$ '}
                        thousandSeparator={'.'} decimalSeparator={','} />
          </span>
        </Header>
        <Bottom>
          <Line>
            <span style={{fontWeight:600}}>Split Progress</span>
            <NumberFormat value={roundAccurately(percentage, 2)} 
                        displayType={'text'} suffix={' %'}
                        decimalSeparator={','} />
          </Line>
          {/* <span>{percentage}</span> */}
          <SalesBar>
            <IncomesBar percentage={percentage}></IncomesBar>
          </SalesBar>
          <Line style={{marginTop:'10px'}}>
            <Tags>
              <IoPricetag></IoPricetag>
              <span>20</span>
              <IoMdShare></IoMdShare>
              <span>18</span>
            </Tags>
          </Line>
        </Bottom>
      </Container>
  );
}

export default Card;
