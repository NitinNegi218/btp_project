import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some INDIAN Medicinal Plants</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ashwagandha.jpg'
              text='This is perhaps best known for its stress-relieving properties'
              label='Ashwagandha'
              path='/services'
            />
            <CardItem
              src='images/Indian-Gooseberry.png'
              text='Helps Fight Against the Common Cold'
              label='Indian Gooseberry'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/turmeric.jpeg'
              text='This is rich in vitamin C, an anti-inflammatory and antioxidant'
              label='Curcuma Longa'
              path='/services'
            />
            <CardItem
              src='images/neem.jpg'
              text='It possesses anti-bacterial, anti-cariogenic, anti-helminthic, anti-diabetic, anti-oxidant, astringent, anti-viral, cytotoxic, and anti-inflammatory activity'
              label='Azadirachta indica'
              path='/products'
            />
            <CardItem
              src='images/aloe-vera.jpg'
              text='Aloe vera is a popular medicinal plant with antioxidant and antibacterial properties'
              label='Aloe Vera'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
