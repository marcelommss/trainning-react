import { useRef } from 'react';

import { useOrders } from '../../../../hooks/orders-hook';

import ReactECharts from 'echarts-for-react';

import { ScoreContainer } from './styles';

function Dashboard() {

  const chart = useRef();
  
  const { dashboardState, dashboardDispatch } = useOrders();

  const onChartClick = (params) => {    
    console.log(params.name);
    dashboardDispatch({
      type: "NAVIGATE",
      payload: params.name
    });
  }

  const onEvents = {
    'click': onChartClick
  }

  return (
    <ScoreContainer>
      <ReactECharts ref={chart} option={dashboardState.data} notMerge={true}
      onEvents={onEvents}
      // lazyUpdate={true} showLoading ={true}
      style={{height: '93%', width: '100%', marginTop: '2%'}}/>
    </ScoreContainer>
  );
}

export default Dashboard;
