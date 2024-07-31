import { useState } from "react";
import './form.css'

const Form = () => {
    // Estados para peso e altura
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    // Função para calcular e renderizar o IMC
    const renderizaIMC = () => {
        // Verificar se altura é zero para evitar divisão por zero
        if (height === 0) {
            return <p>Por favor, insira valores válidos.</p>;
        }

        const imc = weight / (height * height);

        let category = '';

        if (imc < 18.5) {
            category = 'Abaixo do peso';
        } else if (imc < 24.9) {
            category = 'Peso normal';
        } else if (imc < 29.9) {
            category = 'Sobrepeso';
        } else if (imc < 34.9) {
            category = 'Obesidade grau I';
        } else if (imc < 39.9) {
            category = 'Obesidade grau II';
        } else {
            category = 'Obesidade grau III (obesidade mórbida)';
        }

        return (
            <p>
                Seu IMC é de: <span>{imc.toFixed(1)}</span>  <br />
                Você está em <span>{category}</span>
            </p>
        );
    };

    // Função para lidar com o cálculo do IMC ao clicar no botão
    

    return (
        <div className="form-container">
            <form >
                <input
                    type="number"
                    placeholder="Seu peso (kg)"
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    required
                />
                <input
                    type="number"
                    placeholder="Sua altura (m)"
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    required
                />
            </form>
            {renderizaIMC()}
        </div>
    );
};

export default Form;
