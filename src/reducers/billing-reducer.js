export const billingReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CARDS':
        return {
          ...state,
          cards: action.payload,
        };
      case 'CHANGE_TERRITORY':
        return {
          ...state,
          territory: action.payload,
        };
      case 'NAVIGATE':
        return {
          ...state,
          filter: action.payload,
          navigationPeriod: getPeriod(state.navigationPeriod)
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      case 'LOAD_DATA':
        return {
          ...state,
          data: action.payload,
        };
      case 'CHANGE_FILTER':
        return {
          ...state,
          navigationFilter: action.payload,
        };
      case 'CHANGE_PERIOD':
        return {
          ...state,
          navigationPeriod: action.payload.menu,
          filter: action.payload.filter,
        };
      default:
        return state;
    }
  };

  const getPeriod = (current) =>{
    switch(current){
      case "YEAR":
        return "MONTH";
      case "MONTH":
        return "WEEK";
      case "WEEK":
        return "DAY";
      default:
        return current;
    }
  }

  export const dataInitialValue = {
    grid: { top: 8, right: 80, bottom: 24, left: 80 },
    xAxis: {
      type: 'category',
      data: ['2021'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

export const billingInitialValue = {
    territory: '300560',
    navigationFilter: 'BOTH',
    navigationPeriod: 'YEAR',
    data: dataInitialValue,    
    filter: '',
    cards: [],
  };