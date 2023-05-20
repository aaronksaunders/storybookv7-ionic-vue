<template>
  <div>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ memberInfo?.name }}</ion-card-title>
        <ion-card-subtitle>
          <span v-if="memberInfo?.companyName">{{ memberInfo?.companyName }} : </span>
          {{ memberInfo?.title }}
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div>{{ memberInfo?.bio }}</div>
        <ion-item lines="none" class="ion-float-right">
          <ion-button
            v-if="memberInfo?.linkedIn"
            @click="handleClick('social-clicked', memberInfo?.linkedIn)"
          >
            <ion-icon :icon="logoLinkedin" slot="start"></ion-icon>LinkedIn
          </ion-button>
          <ion-button
            v-if="memberInfo?.twitter"
            @click="handleClick('social-clicked', memberInfo?.twitter)"
          >
            <ion-icon :icon="logoTwitter" slot="start"></ion-icon>Twitter
          </ion-button>
          <ion-button
            v-if="memberInfo?.website"
            @click="handleClick('social-clicked', memberInfo?.website)"
          >
            <ion-icon :icon="globe" slot="start"></ion-icon>Web Site
          </ion-button>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonItem,
} from "@ionic/vue";
import { logoTwitter, logoLinkedin, globe } from "ionicons/icons";

export interface MemberInfo {
  name: string;
  title: string;
  companyName?: string;
  bio: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
}

const props = defineProps<{
  memberInfo: MemberInfo;
}>();

const emit = defineEmits<{
  (e: "social-clicked", value: string | undefined): void;
}>();

const handleClick = (event: string, value: string | undefined) => {
  emit("social-clicked", value);
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
