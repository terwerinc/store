import React from "react";

export const metadata = {
  title: "Publisher Store",
  description: "A series of publishing tool plugins officially released by Terwer Inc.",
  keywords: "Store, Publisher, Plugin, Platform"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
