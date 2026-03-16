"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/storefront/ChatWidget").then((module) => module.ChatWidget),
  {
    ssr: false,
  },
);

export function DeferredChatWidget() {
  return <ChatWidget />;
}
