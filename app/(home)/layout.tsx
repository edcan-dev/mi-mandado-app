import { Header } from "@/src/components";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

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
