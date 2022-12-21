import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;

//Commentaires
//La fonction usefetch vise à retourner un objet contenant les attributs (data, is pending et error), 
//attributs qui seront par la suite utilisée par plusieurs onglets de code pour manipuler et afficher ces 
// attributs, dont particulièrement l'attribut data, dans des templates HTML.
//L'outil react Useeffet est utilisé pour réaliser des action spécifiques sous conditions. Ici, à chaque
//fois qu'un url est accédé, Useeffet est activé. Useeffect, lorsqu'il est activé, réalise une fonction
// qui retourne plusieurs résultats selon différents scénarios prévus par la programmation. D'abord, elle récupère
// les datas de JSON à travers la méthode implémentée JSON fetch puis retourne les datas. Ensuite, ces datas
//vont incrémenter les variables disposants des caractéristiques REACT useState à travers de la méthode REACT Set.
  //Après cette dernière opération, les variables (data, is pending et error) de la fonction useFetch sont pleinements
  //actualisés et sont retournées par la fonction.

