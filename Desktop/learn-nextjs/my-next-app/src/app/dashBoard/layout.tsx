import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Doffy's DashBoard ",
  description: "This is web Doffy's",
};
export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="m-10 py-10">{children}</section>;
}
