import Input from "./Input";
import Button from "./Button";
import Spinner from "./Spinner";
import Card from "./Card";
import React from "react";

const Main = ({handleSubmit, searchString, setSearchString, isSubmitted, cards}) => {
  return (
    <div className="App">
      <div className="App-content">
        <form className="App-search" onSubmit={handleSubmit}>
          <Input
            placeHolder="Введите текст для поиска"
            value={searchString}
            handleChange={setSearchString}
          />
          <Button title={"Искать"} type="submit"/>
        </form>
        <div className="App-cards">
          {isSubmitted
            ? <Spinner/>
            : cards.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>

    </div>
  );
}
export default Main;
