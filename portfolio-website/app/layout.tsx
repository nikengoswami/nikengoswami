import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIKEN GOSWAMI | CYBERPUNK PORTFOLIO",
  description: "AI/ML Engineer & Deep Learning Specialist. Choose your path: NOMAD or CORPO. Master's at TU Darmstadt specializing in Neural Networks, Computer Vision & Point Cloud AI.",
  keywords: ["AI", "ML", "Deep Learning", "Computer Vision", "Neural Networks", "Point Cloud", "3D Vision", "Cyberpunk"],
  authors: [{ name: "Niken Goswami" }],
  openGraph: {
    title: "NIKEN GOSWAMI | CYBERPUNK PORTFOLIO",
    description: "Choose your path: NOMAD (Travel) or CORPO (Professional). AI Engineer specializing in Deep Learning & Computer Vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
