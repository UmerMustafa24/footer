
import Footer from "@/components/Footer";
import "./globals.css"; 
export default function RootLayout({
 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
      <Footer/>
        
      </body>
    </html>
  );
}
