import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import type Data from '../Models/Data';

// Função para salvar um gasto no Firestore
export const salvarGasto = async (gasto: Data) => {
  try {
    await addDoc(collection(db, 'gastosMensais'), gasto);
    console.log('Gasto salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o gasto: ', error);
  }
};

// ✅ Nova função para buscar os dados
export const buscarGastos = async (): Promise<Data[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'gastosMensais'));
    const dados: Data[] = snapshot.docs.map(doc => doc.data() as Data);
    return dados;
  } catch (error) {
    console.error('Erro ao buscar gastos: ', error);
    return [];
  }
};