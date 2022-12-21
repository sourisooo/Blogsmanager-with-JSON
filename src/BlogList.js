import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;

//Commentaires
//Retourne la liste des blogs à travers un code html. La fonction prend pour argument "blogs"
// puis à travers la méthode map implémentée dans JavaScript, récupére toutes les informations 
// des blogs que nous souhaitons voir s'afficher sur la page html: l'id, le title, l'author...
//La pastille Link est un outil issu de la bibliothèque react permettant d'associer un lien HTML
// au titre de blogs. L'accès aux variables id, title, author est possible du fait que la fonction Bloglist
//est incorporé dans le fonction home et que cette dernière home dispose des accès aux variables 
// id, title, author.
