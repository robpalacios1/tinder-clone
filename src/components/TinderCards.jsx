import React, { useState, useEffect } from 'react'
import axios from '../axios';

/***** TinderCard *****/
import TinderCard from "react-tinder-card"

/***** CSS  *****/
import "./TinderCards.css"

const Tindercards = () => {

    const [people, setPeople] = useState([
        {
            "name": "Elon Musk",
            "imgUrl": "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        },

        {
            "name": "Jeff Bezos",
            "imgUrl": "https://biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
        },

        {
            "name": "Sandra Bullock",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
        },
    ])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards")
            setPeople(req.data);
        }
        fetchData();
    }, [])
    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.imgUrl})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default Tindercards
