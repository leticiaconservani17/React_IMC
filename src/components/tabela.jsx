import React from 'react';
import './TabelaIMC.css';

const TabelaIMC = () => {
    return (
        <div className="table-container">
            <table>
                <caption>Tabela de IMC</caption>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do peso</td>
                        <td>Menos de 18,5</td>
                    </tr>
                    <tr>
                        <td>Peso normal</td>
                        <td>18,5 – 24,9</td>
                    </tr>
                    <tr>
                        <td>Sobrepeso</td>
                        <td>25 – 29,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau I</td>
                        <td>30 – 34,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau II</td>
                        <td>35 – 39,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau III (obesidade mórbida)</td>
                        <td>40 ou mais</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabelaIMC;
