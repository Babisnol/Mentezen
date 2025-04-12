document.querySelector('#formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('mensagem').textContent = data.mensagem;
      document.getElementById('formCadastro').reset();
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('mensagem').textContent = "Erro ao enviar dados.";
    });
  });
  


document.querySelector('.btn').addEventListener('click', function() {
    alert('Obrigado por visitar nosso site!');
  });
  
  