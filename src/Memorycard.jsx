import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ScoreBoard from "./ScoreBoard";
import Title from "./Title";

export default function MemoryCard() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards,setClickedCards] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=16")
      .then((response) => response.json())
      .then((data) => {
        const pokemonCards = data.results.map((pokemon, index) => {
          return {
            id: index + 1,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          };
        });

        setCards(pokemonCards);
      });
  }, []);

  function shuffleCards(){
    const shuffleCards = [...cards].sort(()=> Math.random() -0.5);
    setCards(shuffleCards);
  }

  function handleClick(id) {

    if(clickedCards.includes(id)){
      setScore(0);
      setClickedCards([]);
    }
    else{
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards,id]);

       if (newScore > bestScore) {
       setBestScore(newScore);
      }
    }  
    shuffleCards(); 
      if (newScore === 16) {
        alert("You Win!");
        setScore(0);
        setClickedCards([]);
        return;
    }
  }

  return (
    <div className="MemoryCard">
      <Title />

      <ScoreBoard score={score} bestScore={bestScore} />

      <div className="card-grid">
        {cards.map((card) => (
          <ImageCard
            key={card.id}
            image={card.image}
            name={card.name}
            handleClick={() =>handleClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}