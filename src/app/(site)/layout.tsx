
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-width-screen-2xl container mx-auto">
        <Header />
        <section className="mt-2 min-h-screen text-green-600">
          <div className="pt-0 pb-16 px-1 xl:px-80 xl:pt-16">
            {children}
          </div>
          
        </section>
        <Footer/>
        
    </section>
  );
}
