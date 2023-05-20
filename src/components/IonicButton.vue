<template>
  <ion-button type="button" @click="onClick">{{ label }} </ion-button>
</template>

<script lang="ts" setup>
import { IonButton } from "@ionic/vue";

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
  }>(),
  { label: "test button" }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>
