import { useState } from "react"
import "./App.css"

export function Inicial() {
  const [contagem, setContagem] = useState(0)

  function handleConta() {
    setContagem(contagem + 1) //  Função de atualização de estado da contagem, portanto
    document.body.style.background = gerarCor() //  contagem faz o incremento + 1, setContagem de atualização;
  }

  function gerarCor() {
    const hexadecimal = "0123456789ABCDEF"
    let cor = "#"

    for (let i = 0; i < 6; i++) {
      cor += hexadecimal[Math.floor(Math.random() * 16)] // Função para gerar cor hexadecimal;
    }

    return cor
  }

  function handleReset() {
    setContagem(0) // Resetar;
    document.body.style.background = "white"
  }

  return (
    <>
      <div className="ball" onClick={handleConta}>
        {" "}
        {contagem}{" "}
      </div>
      <button onClick={handleReset}> Reset </button>
    </>
  )
}
