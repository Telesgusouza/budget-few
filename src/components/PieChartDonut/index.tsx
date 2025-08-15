import { PureComponent } from 'react';
import {
  PieChart,
  Pie, 
  Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 50 },
  { name: 'Group B', value: 750 },
  { name: 'Group C', value: 75 },
  { name: 'Group D', value: 100 },
];
const COLORS = [
  '#f2cdac', '#82c9d7','#277c78', 
  '#626070', '#c94736', '#826db0',
  
  // other colors
  '#af81ba', '#597c7c', '#93674f',
  '#934f6f', '#3f82b2', '#97a0ac',
  '#7f9161', '#cab361', '#be6c49'
];

export default class PieChartDonut extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart
        width={240} height={240}
        //   onMouseEnter={this.onPieEnter}
        className='pie'
      >
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={120}

          fill="#8884d8"

          paddingAngle={0}
          dataKey="value"


          style={{
            "width": "240px",
            "height": "240px"
          }}
        >
          {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

      </PieChart>
    );
  }
}
