import { useContext } from "react";
import { Card } from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from './Header.js';
import Footer from './Footer.js';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);
  const page = 2;
  
  return (
    <>
    <Header page={page} email={currentUser.email}/>
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="avatar" onClick={onEditAvatar}>
            <div className="avatar__image" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            <button className="btn btn_type_avatar-edit" type="button"></button>
          </div>
          <div className="profile__text">
            <button className="btn btn_type_edit" type="button" onClick={onEditProfile}></button>
            <div>
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__activity">{currentUser.about}</p>
            </div>
          </div>
        </div>
        <button className="btn btn_type_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="gallery">
        <ul className="cards">
            {cards.map(card => {
                return (<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>)
            })}
        </ul>
      </section>
    </main>
    <Footer/>
    </>
  );
};