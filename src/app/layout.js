
import "./globals.css";
import Transitions from "@/components/transitions";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amir Khan Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05161A]">
      <Transitions>
       {children} 
      </Transitions>
        </body>
    </html>
  );
}
