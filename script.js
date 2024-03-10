document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
})

let arrayTarefas = []
const tableTarefa = document.getElementById('tableTarefa')

function adicionarTarefa() {
    const tarefaValue = document.getElementById('tarefaValue').value
    const selectValue = document.getElementById('selectValue').value

    if (tarefaValue === '' || selectValue === 'selecione') {
        alert('Valores inválidos')
    }
    else {
        arrayTarefas.push({ tarefa: tarefaValue, dificuldade: selectValue })

        exibirTarefa()
    }
}

function exibirTarefa() {
    tableTarefa.innerHTML = ''

    arrayTarefas.forEach((element, index) => {
        const novaLinha = document.createElement('tr')
        novaLinha.setAttribute(`id`, `id-${index}`)

        const novoElementoNome = document.createElement('th')
        novoElementoNome.textContent = element.tarefa
        novaLinha.appendChild(novoElementoNome)

        const novoElementoDificuldade = document.createElement('th')
        novoElementoDificuldade.textContent = element.dificuldade
        novaLinha.appendChild(novoElementoDificuldade)

        const btnExcluir = document.createElement('button')
        btnExcluir.textContent = 'Excluir'
        btnExcluir.setAttribute(`id`, `excluir-${index}`)
        btnExcluir.setAttribute(`onclick`, `excluir(${index})`)
        novaLinha.appendChild(btnExcluir)

        const btnConcluir = document.createElement('button')
        btnConcluir.textContent = 'Concluído'
        btnConcluir.setAttribute(`id`, `concluir${index}`)
        btnConcluir.setAttribute(`onclick`, `concluir(${index})`)
        novaLinha.appendChild(btnConcluir)

        tableTarefa.appendChild(novaLinha)

    })

}

function excluir(index) {
    arrayTarefas.splice(index, 1)
    exibirTarefa()
}

function concluir(index) {
    const concluirStyle = document.getElementById(`id-${index}`)
    concluirStyle.style.textDecoration = 'line-through'
    concluirStyle.style.opacity = '0.5'
}