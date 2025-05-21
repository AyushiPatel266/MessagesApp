export interface Directory {
  name: string;
  icon: string;
  messages: string[];
}

export interface Directory {
  name: string;
  icon: string;
  messages: string[];
}

export const directories: Directory[] = [
  {
    name: "Important",
    icon: "⚠️",
    messages: [
      "Set documents for visa appointment.",
      "Doctor's appointment at 5 PM",
      "Pay electricity bill today"
    ]
  },
  {
    name: "Home",
    icon: "🏡",
    messages: [
      "Welcome back! Stay positive and productive!",
      "Today is a great day to achieve something new.",
      "You're doing amazing. Keep going!"
    ]
  },
  {
    name: "Love",
    icon: "💖",
    messages: [
      "You are deeply loved ❤️",
      "Sending virtual hugs!",
      "Don't forget to smile today!"
    ]
  },
  {
    name: "Family",
    icon: "👨‍👩‍👧‍👦",
    messages: [
      "Family is everything.",
      "Call your parents today.",
      "Family dinner plan?"
    ]
  },
  {
    name: "Friends",
    icon: "🧑‍🤝‍🧑",
    messages: [
      "Share a joke to your bestie.",
      "Movie night this weekend?",
      "Catch up with friends!"
    ]
  },
  {
    name: "School",
    icon: "📚",
    messages: [
      "Stay focused on your studies.",
      "Submit your assignments on time.",
      "Group study session this week?"
    ]
  }
];