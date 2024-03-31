import { Footer } from "./footer";
import { Header } from "./header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
