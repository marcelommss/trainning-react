import { useRef } from 'react';

import { useProducts } from '../../../../hooks/products-hook';

import ReactECharts from 'echarts-for-react';

import { ScoreContainer } from './styles';

function DoughnutChart() {

  const chart = useRef();
  
  const { productsState } = useProducts();

  return (
    <ScoreContainer>
      <ReactECharts ref={chart} option={productsState.data} notMerge={true}
           // lazyUpdate={true} showLoading ={true}
      style={{height: '20vh', width: '90%', marginTop: '0'}}/>
    </ScoreContainer>
  );
}

export default DoughnutChart;
