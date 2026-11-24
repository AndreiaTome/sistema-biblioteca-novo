// IMPORTANDO AS CONFIGURAÇÕES DO BANCO 
const db = require("../config/db.js")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN    
    login : async () => {
     // VARIÁVEL PRA GUARDAR O COMANDO SQL
const sql =' SELECT * FROM tb_ususarios WHERE enail = ? AND senha'
    // EXECUTA O SQL
       const [resultado] = await db.execute(sql, [email, senha])

     // RETORNA PRO CONTROLLER O RESULTADO
     return resultado[0] || null
    },
    // CRUD
    // CREATE
    criarUsuario: async (nome, email, senha, perfil) =>{
        // VARIÁVEL PRA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_usuarios (nome, email, senha, perfil)
                      VALUES (?, ?, ?, ?)`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [nome, email, senha, perfil])

        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.insertId
    },
    // READ
      //VARIÁVEL PRA GUARDAR O COMANDO SQL
    listarUsuarios: async () => {
     const sql = 'SELECT * FROM tb_usuarios' 
     
        // EXECUTA O SQL
     const [linhas] = await db.execute(sql)

    //RETORNAR PRO CONTROLLER O RESULTADP
     return linhas
        
    },

    // UPDATE
    atualizarUsuario: () =>{
        console.log("ATUALIZEI UM USUÁRIO");
    },
    // DELETE
    deletarUsuario: async (Id) => {
     //VARIÁVEL PRA GUARDAR O COMANDO SQL
     const sql = 'DELETE FROM tb_usuarios WHERE id_usuario= ?'

    // EXECUTA O SQL
    const [resultado] = await db.execute(sql, [id])

     //RETORNAR PRO CONTROLLER O RESULTADP
     return resultado.affectedRows
       
    }
}