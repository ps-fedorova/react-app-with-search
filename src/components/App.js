import React from 'react';
import './App.css';
import Main from "./Main";
import Photo from './Photo';
import NotFound from "./NotFound";
import api from '../api/api';
import {Route, Switch} from 'react-router-dom';


function App() {
  const [cards, setCards] = React.useState([])
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [searchString, setSearchString] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

  }

  React.useEffect(() => {
    if (isSubmitted) {
      api.search(searchString).then(data => {
        setCards(data.results.map(item => ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.user.name,
          subtitle: item.description,
          likes: item.likes,
          handleClick: () => {
            console.log('click')
          }
        })))
        setIsSubmitted(false);
        setSearchString('');
      })
    }

  }, [isSubmitted, searchString])
  return (
    <Switch>
      <Route exact path="/">
        <Main
          handleSubmit={handleSubmit}
          searchString={searchString}
          cards={cards}
          isSubmitted={isSubmitted}
          setSearchString={setSearchString}
        />
      </Route>
      <Route path="/photos/:id">
        <Photo
          photos={cards}
        />
      </Route>
      <Route path={"*"}>
        <NotFound/>
      </Route>
    </Switch>

  )
}

export default App;
