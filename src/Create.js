import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
     <label>Blog author:</label>
        <textarea
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
        </textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;

//Commentaires
//Fonction retournant un formulaire web rempli de données. Cette fonction crée puis utilise des variables 
//titres, body et authors surlesquels la faculté useState est utilisée, ces variables étant conçues pour recevoir les données
//issus des formulaires/template HTML. 
//Fonctionnement de la fonction create
// 3 variables vont etre crées et disposer de la fonctionnalités UseState, elle vont etre associés au données
// qui seront saisi dans le template HTML et dont nous souhaitons retourner dans la base de donnée JSON.
//Une quatrimèe variable va etre créer afin de pouvoir réorienter l'internaute  vers la page home après la création du blog.
//La fonction create va retourner le template HTML remplis de données à traver la fonctionnalité onchange et 
// setAuthor(e.target.value) puis l'application de la fonction handlesubmit.
//La fonction handlesubmit va incrémenter la bdd JSON à travers les variables title, body, author qui ont 
//été récupérer des templates HTML par la fonction create.
