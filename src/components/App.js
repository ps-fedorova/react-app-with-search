import React from 'react';
import './App.css';
import Input from './Input';
import Button from './Button';
import Card from "./Card";
import Spinner from "./Spinner";
import api from '../api/api';

function App() {
    const [cards, setCards] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [searchString, setSearchString] = React.useState('')

    React.useEffect(() => {
        setIsLoading(true)
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
            setIsLoading(false)
        })
    }, [searchString])
    return (
        <div className="App">
            <div className="App-content">
                <div className="App-search">
                    <Input placeHolder="Введите текст для поиска"/>
                    <Button title={"Искать"} handleClick={() => {
                        setSearchString('Dogs')
                    }}/>
                </div>
                <div className="App-cards">
                    {isLoading ? <Spinner/> : cards.map(({id, ...props}) => <Card key={id} {...props} />)}
                </div>
            </div>

        </div>
    );
}

export default App;