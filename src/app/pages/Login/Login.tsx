import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { app } from '../../services/FirebaseConfig';

const auth = getAuth(app);
const emailPermitido = 'andreserick66@gmail.com';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === emailPermitido) {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, senha);
      if (userCred.user.email === emailPermitido) {
        navigate('/dashboard');
      } else {
        setErro('Acesso negado.');
      }
    } catch (err: any) {
      if (err.code === 'auth/wrong-password') {
        setErro('Senha incorreta.');
      } else if (err.code === 'auth/user-not-found') {
        setErro('Usuário não encontrado.');
      } else if (err.code === 'auth/invalid-email') {
        setErro('Email inválido.');
      }
        else if (err.code === 'auth/too-many-requests') {
          setErro('Muitas tentativas. Tente novamente mais tarde.');
      }
       else {
        setErro('Erro ao fazer login. Verifique seus dados.');
      }
      
    }
  };
  

  return (
  <section className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-700 p-8 rounded-2xl shadow-md w-full max-w-sm">
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">Login</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        className="w-full mb-6 px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Entrar
      </button>

      {erro && (
        <p className="mt-4 text-sm text-red-500 text-center">
          {erro}
        </p>
      )}
    </div>
  </section>
  );
}