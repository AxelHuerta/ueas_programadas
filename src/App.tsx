import { useEffect, useState } from "react";

type Uea = {
  clave: string;
  grupo: string;
  nombre: string;
  profesor: string;
  creditos: string;
  semana: string[][];
};

function App() {
  const [data, setData] = useState<Uea[]>([]);

  useEffect(() => {
    fetch("/ueas.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <table className="w-full bg-slate-gray-50 border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4">UEA</th>
          <th className="p-4">Lunes</th>
          <th className="p-4">Martes</th>
          <th className="p-4">Miércoles</th>
          <th className="p-4">Jueves</th>
          <th className="p-4">Viernes</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((uea) => (
          <tr key={uea.clave} className=" even:bg-green-100">
            <td className="p-4 max-w-xs">
              <p className="font-bold">{uea.nombre}</p>
              <span>{uea.profesor}</span>
            </td>
            {uea.semana.map((dia, index) => (
              <td key={index} className="p-4">
                <p>{dia[0]}</p>
                <span>{dia[1]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
