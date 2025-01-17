import { Header } from "@/src/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      { children }
    </>
  );
}
