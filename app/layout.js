import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
<link 
  rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
/>

const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ["300", "400", "500"] 
});

export const metadata = {
  title: "Arun",
  description: "E-learning with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <AppContextProvider>
            {children}
            <Toaster position="top-center" />
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}