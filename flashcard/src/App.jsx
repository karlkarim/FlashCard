import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState([])

const getRandomCard =  () => {
  try {
    let card =  cards[Math.floor(Math.random() * cards.length)]
    setCurrentCard(card) 
  } catch (error) {
    console.log(error)
  }
}
const getCards = async () => {
  try {
      firebase.firestore()
      .collection("flashCards")
      .onSnapshot(items => {
          const item = items.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          }))
          setCards(item)
          setCurrentCard(item[0]) 
      })
      return;
  } catch (error) {
      console.log(error)
  }
}
useEffect(() => {
  getCards()
},[])

 console.log(currentCard ? true: false);
 console.log(currentCard);
  return (
    <div className="App">
      <div className='cardRow'>
        {cards.length > 0 ?
        (<Card answer={currentCard.answer} 
              question={currentCard.question}/>)
        : 'Loading'}
      </div>
      <div className='buttonRow'>
        <DrawButton onclick={getRandomCard} btnName='Järgmine'/>
      </div>
    </div>
  );
}

export default App;
