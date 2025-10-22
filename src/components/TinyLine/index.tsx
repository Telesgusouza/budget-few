import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ITinyLine } from '../../config/interfaces';

export default function TinyLine(
  { data }: { data: ITinyLine[] }
) {

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <LineChart
        width={300}
        height={100}
        data={data}>

        {/*  */}

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
        />

        <Tooltip />
        <Line
          type="monotone"

          dataKey="R$"

          stroke="#8884d8"
          strokeWidth={2}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}

