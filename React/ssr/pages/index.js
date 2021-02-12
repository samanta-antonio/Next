import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Primeiro Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" / >
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      </Head>
      <body>

       <div className = "container-fluid text-dark bg-secondary">
            <h2>Contato</h2>
            <hr/>
            <center>
            
            <br/><br/>
            
            <h2>Atendimento via e-mail</h2>
            <p>Entre em contato conosco através de nosso formulário. O preenchimento é muito prático e lhe responderemos rapidamente! </p>
            <br/>
        
            <div  id="area">
            <form id="formulario" autoComplete="off" >
                <fieldset/>
                <h4>Nome completo: </h4>
                <input type="text" name="nome" style={{width: "400px"}}/>
                <h4>E-mail:</h4>
                <input type="text" name="email" style={{width: "400px"}}/>
                <h4>Mensagem: </h4>
                <textarea name="mensagem" style={{width: "400px"}}></textarea>
                <input className = "d-block" type="submit" value="Enviar" />
            </form>

            <div className= "container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3>Comentários de nossos clientes:</h3>
                                
                    
                        </div>
                
                    </div>
                 
            </div> 
           
            </div>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>   
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>  
            <br/><br/><br/><br/><br/><br/><br/><br/><br/> 
            
            
             <hr/>
            </div>
      </body>

    </div>
  )
}
