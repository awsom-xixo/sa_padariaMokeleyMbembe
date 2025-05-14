from flask import Flask, render_template, request, session, redirect
import mysql.connector

app = Flask(__name__)
app.secret_key = "banana"

#conexão com o banco
def conexao():
    conn = mysql.connector.connect(
        user="root",
        host="localhost",
        port="3307", #verificar a porta do senai para possiveis mudancas
        password="root",
        database="sa_padariamokeleymbembe"
    )
    cursor = conn.cursor()
    return conn, cursor
    

#Rota raiz, apenas redireciona para o login
@app.route("/")
def index():
    return render_template("html/login.html")

#rota de login, verifica o usuario e redireciona ele para o menu
@app.route("/login", methods=["POST"])
def login():
    conn, cursor = conexao()

    usuario = request.form['usuario']
    senha = request.form['senha']

    cursor.execute("select * from usuarios where nome=%s and senha=%s", (usuario, senha))
    user = cursor.fetchone()

    if user:
        session['usuario'] = usuario
        cursor.close()
        conn.close()
        return redirect('/menu')#redirect nao aceita parametros
        
    else:
        cursor.close()
        conn.close()
        return render_template("html/login.html", erro_mensagem=True)

@app.route("/menu")
def menu():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return render_template("html/menu-gerente.html")

@app.route("/gestao-usuarios")
def gestao_usuarios():

    conn, cursor = conexao()
    cursor.execute("""select u.id_usuario, u.nome, u.cpf, u.email, c.descricao from usuarios as u join cargos as c 
    on u.id_cargo = c.id_cargo order by u.id_usuario""")
    usuarios = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template("html/Gestao-usuario.html", usuarios=usuarios)

@app.route("/historico-vendas")
def historico_vendas():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return render_template("html/historico-vendas.html")

@app.route("/estoque")
def estoque():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return render_template("html/estoque.html")

@app.route("/comanda")
def comanda():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return "Comandas"

@app.route("/dashboard")
def dashboard():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return "Dashboard"

@app.route("/pvd")
def pvd():
    conn, cursor = conexao()
    cursor.close()
    conn.close()
    return render_template("html/pvd.html")


if __name__ == "__main__":
    app.run(debug=True)