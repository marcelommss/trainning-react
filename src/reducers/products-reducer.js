export const productsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TERRITORY':
        return {
          ...state,
          territory: action.payload,
        };
      case 'LOAD_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'SET_GRAPHIC_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };

const colors = ["#feb95a", "#6ceebc", "#f2c8ee", "#ee786c", "#6cc8ee", "#6cee9d", "#6c7bee", "#eeda6c", "#a9ded8", "#e96cee"];

const initialValues = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Products Sales',
        type: 'pie',
        radius: ['60%', '82%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 2,
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
};

const modernLayoutOption = {
  title: {
    text: 'Sales Map',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
        { value: 235, name: 'Video Ads' },
        { value: 400, name: 'Search Engine' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

export const productInitialValue = {
    territory: '300560',
    products: [],
    colors: colors,
    data: initialValues,
  };