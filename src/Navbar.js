import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;

//Commentaires
//Mise en page de l'entete comprenant le titre dojo-blog, l'onglet Home
//l'onglet create. L'outil link issu de la bibliotèque react-router-dom
//permet de définir une adresse URL lorsqu'un click sera effectué sur les liens home ou create. 
//Rappelon que les links to "/" et "/create" font directement référence aux routes spécifiés
//dans l'onglets App.