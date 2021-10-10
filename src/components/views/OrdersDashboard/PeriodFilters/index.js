import { format, previousMonday, isMonday, startOfMonth, startOfWeek } from 'date-fns'
import {FaCalendarAlt} from 'react-icons/fa';

import { Filters, PeriodsContainer, CalendarContainer, ButtonContainer } from './styles';

import TabButton from '../../../common/TabButton';
import { useOrders } from '../../../../hooks/orders-hook';

function PeriodFilters() {

  const { dashboardState, dashboardDispatch } = useOrders();

  const switchNavigation = (menu) => {    
    var today = new Date();
    var filter = "";
    switch(menu){
      case "DAY":
        filter = format(today, 'dd/MM/yyyy');
        break;
      case "WEEK":
        filter = format(startOfWeek(today), 'dd/MM/yyyy');
        break;
      case "MONTH":
        filter = format(today, 'MM/yyyy');
        break;
      case "YEAR":
        filter = format(today, 'yyyy');
        break;
      default:
        break;
    }
    dashboardDispatch({
      type: "CHANGE_PERIOD",
      payload: {
        menu: menu,
        filter: filter
      }
    });
  }
  
  return (
      <Filters>
        <CalendarContainer>
          <FaCalendarAlt></FaCalendarAlt>
          <span>{format(new Date(), "MMM dd, yyyy")}</span>
        </CalendarContainer>
        <PeriodsContainer>
          <ButtonContainer>
            <TabButton active={dashboardState.navigationPeriod === 'DAY'}onClick={() => switchNavigation("DAY")}>Day</TabButton>
          </ButtonContainer>
          <ButtonContainer>
            <TabButton active={dashboardState.navigationPeriod === 'WEEK'}
            onClick={() => switchNavigation("WEEK")}>Week</TabButton>
          </ButtonContainer>
          <ButtonContainer>
            <TabButton  active={dashboardState.navigationPeriod === 'MONTH'}onClick={() => switchNavigation("MONTH")}>Month</TabButton>
          </ButtonContainer>
          <ButtonContainer>
            <TabButton active={dashboardState.navigationPeriod === 'YEAR'}onClick={() => switchNavigation("YEAR")}>Year</TabButton>
          </ButtonContainer>
        </PeriodsContainer>
      </Filters>
  );
}

export default PeriodFilters;
