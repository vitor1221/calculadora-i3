//modelo inicial da calculadora-i3
//codigo feito com o Copilot

import { useState } from 'react';
import './App.css';

function App() {
  const [conceitos, setConceitos] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    FF: 0
  });

  const calcularI3 = () => {
    const { A, B, C, D, FF } = conceitos;
    const total = A + B + C + D + FF;

    if (total === 0) return "0.00";

    const somaInversos = 
      (A / 10) + 
      (B / 8) + 
      (C / 6) + 
      (D / 3) +  
      (FF / 1);

    const i3 = total / somaInversos;
    return i3.toFixed(2);
  };

  return (
    <>
    <div className="conceitos-grid">
    <label>A:</label>
      <input 
        type="number"
        value={conceitos.A}
        onChange={(e) => setConceitos({ ...conceitos, A: +e.target.value })}
        placeholder="Conceito A"
      />
      <label>B:</label>
      <input
        type="number"
        value={conceitos.B}
        onChange={(e) => setConceitos({ ...conceitos, B: +e.target.value })}
        placeholder="Conceito B"
      />
      <label>C:</label>
      <input
        type="number"
        value={conceitos.C}
        onChange={(e) => setConceitos({ ...conceitos, C: +e.target.value })}
        placeholder="Conceito C"
      />
      <label>D:</label>
      <input
        type="number"
        value={conceitos.D}
        onChange={(e) => setConceitos({ ...conceitos, D: +e.target.value })}
        placeholder="Conceito D"
      />
      <label>FF:</label>
      <input
        type="number"
        value={conceitos.FF}
        onChange={(e) => setConceitos({ ...conceitos, FF: +e.target.value })}
        placeholder="Conceito FF"
      />
      </div>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem',}}>Nota i3: {calcularI3()}</p>
    </>
  );
}

export default App;


//verção com os conteudos de Para ir mais longe da calculadora-i3
//codigo feito com o Copilot
//nessesita a mudança do nome do arquivo para .tsx

// import { useState } from 'react';
// import TextField from '@mui/material/TextField';

// type Conceitos = {
//   A: number;
//   B: number;
//   C: number;
//   D: number;
//   FF: number;
// };

// function App() {
//   const [conceitos, setConceitos] = useState<Conceitos>({
//     A: 0,
//     B: 0,
//     C: 0,
//     D: 0,
//     FF: 0
//   });

//   const calcularI3 = () => {
//     const { A, B, C, D, FF } = conceitos;
//     const total = A + B + C + D + FF;

//     if (total === 0) return "0.00";

//     const somaInversos = 
//       (A / 10) + 
//       (B / 8) + 
//       (C / 6) + 
//       (D / 3) +  
//       (FF / 1);

//     const i3 = total / somaInversos;
//     return i3.toFixed(2);
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <TextField
//         label="Conceito A"
//         type="number"
//         value={conceitos.A}
//         onChange={(e) => setConceitos({ ...conceitos, A: +e.target.value })}
//         margin="normal"
//       />
//       <TextField
//         label="Conceito B"
//         type="number"
//         value={conceitos.B}
//         onChange={(e) => setConceitos({ ...conceitos, B: +e.target.value })}
//         margin="normal"
//       />
//       <TextField
//         label="Conceito C"
//         type="number"
//         value={conceitos.C}
//         onChange={(e) => setConceitos({ ...conceitos, C: +e.target.value })}
//         margin="normal"
//       />
//       <TextField
//         label="Conceito D"
//         type="number"
//         value={conceitos.D}
//         onChange={(e) => setConceitos({ ...conceitos, D: +e.target.value })}
//         margin="normal"
//       />
//       <TextField
//         label="Conceito FF"
//         type="number"
//         value={conceitos.FF}
//         onChange={(e) => setConceitos({ ...conceitos, FF: +e.target.value })}
//         margin="normal"
//       />
//       <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
//         Nota i3: {calcularI3()}
//       </p>
//     </div>
//   );
// }

// export default App



// git init
// git remote add origin https://github.com/vitor1221/calculadora-i3.git
// git add .
// git commit -m "Calculadora i3 em ReactJS"
// git push -u origin master