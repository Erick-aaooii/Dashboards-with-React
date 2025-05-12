import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function GastosMensais({ data }: { data: { date: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8BE9FD" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
