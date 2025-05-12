import { useEffect, useState } from 'react';
import { buscarGastos } from '../../services/FirestoreController';
import type Data from '../../Models/Data';
import Piechart from './components/Piechart';
import GastosMensais from './components/GastosMensais';
import GastosPorCompra from './components/GastosPorCompra';
import { format } from 'date-fns';

export default function Dashboard() {
    const [pieData, setPieData] = useState<{ name: string; value: number }[]>([]);
    const [lineData, setLineData] = useState<{ date: string; value: number }[]>([]);
    const [barData, setBarData] = useState<{ name: string; value: number }[]>([]);    

  useEffect(() => {
    async function carregar() {
      const gastos = await buscarGastos();

      const porCategoria: Record<string, number> = {};
      const porMes: Record<string, number> = {};
      const porCompra: Record<string, number> = {};

      gastos.forEach((g: Data) => {
        porCategoria[g.tipo] = (porCategoria[g.tipo] || 0) + g.valor;
        porMes[format(new Date(g.data), 'yyyy-MM')] = (porMes[format(new Date(g.data), 'yyyy-MM')] || 0) + g.valor;
        porCompra[g.nomeDaCompra] = (porCompra[g.nomeDaCompra] || 0) + g.valor;
      });

      setPieData(Object.entries(porCategoria).map(([name, value]) => ({ name, value })));
      setLineData(Object.entries(porMes).map(([date, value]) => ({ date, value })));
      setBarData(Object.entries(porCompra).map(([name, value]) => ({ name, value })));
    }

    carregar();
  }, []);

  return (
    <section className="p-8 grid grid-cols-2">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <Piechart data={pieData} />
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <GastosMensais data={lineData} />
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <GastosPorCompra data={barData} />
      </div>
    </section>
  );
}
