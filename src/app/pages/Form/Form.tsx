// components/Form.tsx
import { useState } from 'react';
import type { CategoriaGasto, default as Data } from '../../Models/Data';
import { salvarGasto } from '../../services/FirestoreController';

export default function Form() {
  const [tipo, setTipo] = useState<CategoriaGasto>('Comida');
  const [motivo, setMotivo] = useState('');
  const [nomeDaCompra, setNomeDaCompra] = useState('');
  const [valor, setValor] = useState(0);
  const [data, setData] = useState(new Date());

  const handleSalvar = async () => {
    const gasto: Data = {
      tipo,
      motivo,
      nomeDaCompra,
      valor,
      data: data.toISOString(), // string ISO
    };

    await salvarGasto(gasto);
    // Limpar campos após salvar
    setMotivo('');
    setNomeDaCompra('');
    setValor(0);
    setData(new Date());
    setTipo('Comida');
  };

  return (
    <section className='min-h-screen flex items-center justify-center'>
        <div className="w-1/2 mx-auto bg-gray-800 p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-[#F8F8F2] mb-6 text-center">Cadastro de Gastos</h1>
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-[#F8F8F2] mb-1">Categoria:</label>
            <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value as CategoriaGasto)}
                className="w-full bg-[#44475A] text-[#F8F8F2] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6272A4]"
            >
                {/* opções... */}
                <option value="Comida">Comida</option>
                <option value="Passagem">Passagem</option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="Saúde">Saúde</option>
                <option value="Moradia">Moradia</option>
                <option value="Transporte">Transporte</option>
                <option value="Educação">Educação</option>
                <option value="Lazer">Lazer</option>
                <option value="Roupas">Roupas</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Serviços">Serviços</option>
                <option value="Vestuário">Vestuário</option>
                <option value="Cuidado Pessoal">Cuidado Pessoal</option>
                <option value="Pet">Pet</option>
                <option value="Beleza">Beleza</option>
                <option value="Fitness">Fitness</option>
                <option value="Bancos">Bancos</option>
                <option value="Investimentos">Investimentos</option>
                <option value="Seguros">Seguros</option>
                <option value="Outros">Outros</option>
            </select>
            </div>

            <div>
            <label className="block text-sm font-medium text-[#F8F8F2] mb-1">Motivo:</label>
            <input
                type="text"
                placeholder="Ex: Almoço com amigos"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full bg-[#44475A] text-[#F8F8F2] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50FA7B]"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-[#F8F8F2] mb-1">Nome da Compra:</label>
            <input
                type="text"
                placeholder="Ex: Restaurante X"
                value={nomeDaCompra}
                onChange={(e) => setNomeDaCompra(e.target.value)}
                className="w-full bg-[#44475A] text-[#F8F8F2] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BE9FD]"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-[#F8F8F2] mb-1">Valor Gasto (R$):</label>
            <input
            type="number"
            inputMode="decimal"
            onChange={(e) => setValor(Number(e.target.value))}
            className="w-full bg-[#44475A] text-[#F8F8F2] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB86C] [appearance:textfield]"
            onWheel={(e) => (e.target as HTMLInputElement).blur()} // Evita mudança via scroll
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-[#F8F8F2] mb-1">Data do Gasto:</label>
            <input
                type="date"
                value={data.toISOString().split('T')[0]}
                onChange={(e) => setData(new Date(e.target.value))}
                className="w-full bg-[#44475A] text-[#F8F8F2] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD93F9]"
            />
            </div>

            <button
            type="button"
            onClick={handleSalvar}
            className="w-full bg-[#6272A4] text-[#F8F8F2] py-2 rounded-lg font-semibold hover:bg-[#50FA7B] transition-colors"
            >
            Salvar Gasto
            </button>
        </form>
        </div>
    </section>
  );
}
