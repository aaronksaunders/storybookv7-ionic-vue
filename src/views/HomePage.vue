<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <p>storybook vue</p>
      <ionic-button label="button in component"></ionic-button>
      <member-card :member-info="memberInfo" @social-clicked="doHandleClick"></member-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import IonicButton from "@/components/IonicButton.vue";
import MemberCard, { MemberInfo } from "@/components/MemberCard.vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";

const memberInfo: MemberInfo = {
  title: "CEO",
  bio: "this is a bio",
  companyName: "CI Inc",
  name: "Aaron Saunders",
  twitter: "twitter/aaronksaunders",
  linkedIn: "linkedIn/aaronksaunder",
  website: "www.ci.com",
};

const doHandleClick = (value: string | undefined) => {
  alert(value + " was clicked");
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
