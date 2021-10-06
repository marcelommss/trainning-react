import { useRef } from 'react';

import { useBillings } from '../../../../hooks/billings-hook';

import ReactECharts from 'echarts-for-react';

import { ScoreContainer } from './styles';

function Dashboard() {

  const chart = useRef();
  
  const { dashboardState, dashboardDispatch } = useBillings();

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
