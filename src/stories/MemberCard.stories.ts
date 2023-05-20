import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import MemberCard, { MemberInfo } from "../components/MemberCard.vue";

const meta = {
  title: "IonicComponents/MemberCard",
  component: MemberCard,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  tags: ["autodocs"],
  argTypes: {
    onSocialClicked: { action: "social-clicked" },
  },
  args: {
  }, // default value
} satisfies Meta<typeof MemberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    memberInfo: {
      title: "CEO",
      bio: "this is a bio",
      companyName: "CI Inc",
      name: "Aaron Saunders",
      twitter: "twitter/aaronksaunders",
    },
  },
};

export const NoCompany: Story = {
  args: {
    memberInfo: {
      title: "CEO",
      bio: "this is a bio",
      name: "Aaron Saunders",
      twitter: "twitter/aaronksaunders",
    },
  },
};

export const AllSocial: Story = {
  args: {
    memberInfo: {
      title: "CEO",
      bio: "this is a bio",
      name: "Aaron Saunders",
      twitter: "twitter/aaronksaunders",
      linkedIn: "linkedIn/aaronksaunder",
      website: "www.ci.com",
    },
  },
};

export const NoSocial: Story = {
  args: {
    memberInfo: {
      title: "CEO",
      bio: "this is a bio",
      name: "Aaron Saunders",
    },
  },
};
