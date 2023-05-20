import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import IonicButton from '@/components/IonicButton.vue'

const meta = {
  title: "IonicComponents/IonicButton",
  component: IonicButton,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: { label: "test button" }, // default value
} satisfies Meta<typeof IonicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "BUTTON NAME - Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "BUTTON NAME - Secondary",
  },
};