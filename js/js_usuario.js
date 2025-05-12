let usuarios = [
    { id: 1, nome: 'MIKAELE MBEMBE', cpf: '124.543.567-70', email: 'josiasprofissional@gmail.com', cargo: 'Funcionário Comum' },
    { id: 2, nome: 'Yan Carlos da Minina do Circo', cpf: '567.987.121-55', email: 'yandevrem@gmail.com', cargo: 'Funcionário Comum' },
    { id: 3, nome: 'BOMBO Luís CLAT de Freitas', cpf: '765.222.111-60', email: 'luis_f_mokele@gmail.com', cargo: 'Analista de Vendas' },
    { id: 4, nome: 'Lucas do RJ', cpf: '567.987.121-55', email: 'lucas_padariabungas@gmail.com', cargo: 'Controlador de Estoque' },
  ];
  
  const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
  
  function renderUsuarios() {
    tabelaUsuarios.innerHTML = '';
  
    usuarios.forEach(usuario => {
      const tr = document.createElement('tr');
  
      tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.cpf}</td>
        <td>${usuario.email}</td>
        <td>${usuario.cargo}</td>
        <td>
          <button onclick="editarUsuario(${usuario.id})" class="edit-btn">
            <i class="material-symbols-outlined edit">edit</i>
          </button>
          <button onclick="deletarUsuario(${usuario.id})" class="delete-btn">
            <i class="material-symbols-outlined delete">delete</i>
          </button>
        </td>
      `;
      tabelaUsuarios.appendChild(tr);
    });
  }
  
  renderUsuarios();
  
  // Você pode criar essas funções depois:
  function editarUsuario(id) {
    alert("Função editarUsuario ainda não implementada. ID: " + id);
  }
  
  function deletarUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    renderUsuarios();
  }
  