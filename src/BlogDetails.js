import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;

//Commentaires
//Il s'agit d'une fonction qui retourne un résultat qui représente une page html avec une présentation
//des différentes charactéristiques du blog. Un bouton a été inclus dans cette page html pour supprimer
//le blog à travers une méthode qui appelle une fonctionnalité de JSON (fetch puis delete). Toutes les données
//déclarée dans la page html sont issues de la fonction useFetch.
// Fonctionnement de la fonction blogdetails
// La fonction définit 3 variables qui vont utiliser des fonctionnalités React. L'objet id est crée et fait
// référence à la fonctionnalité useParams, cette dernière permet de retourner la valeur de l'url de la page
//html actuelle. Elle va etre utiliser pour orienter le fetchage des données sur le bon numero id lorsqu'une
//interaction sera réalisés sur un blog spécifique, rappelant que chaque blog dispose d'un id spécifique.
//L'objet constitué des variables data, error et ispending est une objet cré qui s'alimente grace à la fonction
//fetch, rappelant que cette fonction fetch retourne un objet disposant des meme attributs que la fonction 
//Blogdetails(partiellement), réalisé sur une adresse URL spécifique de la base JSON, adresse 
//définie par La variable ID précédament citée.
//La variable History est utilisée pour retourner une URL spécifique, ici retourner sur la plage d'accueil lorsqu'un
//blog vient d'étre supprimer.
// La fonction blogdetails retourne un template HTML dynamique en s'alimentant des données issus du Fetch à travers
// les variables de l'objet nouvellement spécifié (data: blog, error, isPending ).