
import Header from "./../../components/header";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Header/>
        {children}
    </section>
  );
}
