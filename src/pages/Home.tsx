import React from "react";
import { IonContent,IonPage,IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import Form from "../components/Form";
import Header from "../components/Header";
import Menu  from "../components/Menu";
import NavButtons from "../components/NavButtons";
import { moon } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";



const Home: React.FC = () => {
  return (
   <>
          <Header/>
          <Form />
        </>
        

  );
};

export default Home;
