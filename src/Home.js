import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;

//Commentaires
//Un fonction qui retourne un template HTML notemment en affichant la liste à 
//travers la fonction bloglist. L'accès aux variables dans le template HTML est rendu possible
// par la création des constantes  error, isPending, data: blogs qui sont directement incrémentés
//par la fonction useFetch qui est une fonction qui retourne un objet disposant des memes constantes
// que celles qui viennent d'etre créer permettant à la fois de récuprer les données de la bdd JSON 
//puis d'utiliser ses données dans le template HTML.
