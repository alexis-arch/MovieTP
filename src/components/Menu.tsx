
import React from "react";
import { ReactComponent as TvSvg } from '../assets/icon/tv-outline.svg';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import SvgListenTV from "../assets/icon/SvgListen";
import HeartListen from "../assets/icon/HeartListen";
import BrowserListen from "../assets/icon/BrowserListen";



const Menu: React.FC = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/"} routerDirection="none">
              <IonLabel>
                <SvgListenTV></SvgListenTV>
                Accueil
              </IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
