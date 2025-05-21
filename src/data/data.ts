export interface Directory {
  name: string;
  messages: string[];
}

export const directories: Directory[] = [
  {
    name: "Orders",
    messages: ["Order #123 shipped", "Order #124 delivered"],
  },
  {
    name: "Support",
    messages: ["Chat opened", "Issue resolved"],
  },
  {
    name: "Promotions",
    messages: ["Flash sale today!", "BOGO deal ends soon"],
  },
];