import React from "react";
import Card from "../card/Card";

function InfoList() {
    return(
        <React.Fragment>
            <Card 
                title="безлимитный 300"
                price="300"
                info="до 10 Мбит/сек"
                traffic="Oбъем включенного трафика не ограничен"
                color= "blue"
            />
            <Card 
                title="безлимитный 450"
                price="450"
                info="до 50 Мбит/сек"
                traffic="Oбъем включенного трафика не ограничен"
                color= "green"
            />
            <Card 
                title="безлимитный 550"
                price="550"
                info="до 100 Мбит/сек"
                traffic="Oбъем включенного трафика не ограничен"
                color= "red"
            />
            <Card 
                title="безлимитный 1000"
                price="1000"
                info="до 200 Мбит/сек"
                traffic="Oбъем включенного трафика не ограничен"
                color= "black"
            />
        </React.Fragment>
    )

}

export default InfoList;