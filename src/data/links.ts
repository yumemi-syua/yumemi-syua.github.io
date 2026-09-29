export type ProfileLink = {
  name: string;
  url: string;
  label: string;
  text: string;
  kind: string;
  icon: string;
  accent: string;
};

export const profileLinks: ProfileLink[] = [
  {
    name: "Twitch",
    url: "https://www.twitch.tv/yumemisi_syuadu",
    label: "Twitchを開く",
    text: "https://www.twitch.tv/yumemisi_syuadu",
    kind: "Streaming",
    icon: "https://cdn.simpleicons.org/twitch/ffffff",
    accent: "#9146FF"
  }
];

export const featuredLinkNames = ["Twitch"];
