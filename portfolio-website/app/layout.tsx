import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niken Goswami | AI/ML Engineer & Full-Stack Developer",
  description: "Master's student at TU Darmstadt specializing in AI/ML with hands-on experience in deep learning, point cloud processing, and software development.",
  keywords: ["AI", "ML", "Deep Learning", "Computer Vision", "Full-Stack Developer", "Point Cloud", "3D Vision"],
  authors: [{ name: "Niken Goswami" }],
  openGraph: {
    title: "Niken Goswami | AI/ML Engineer",
    description: "Turning 3D data into insights | Deep Learning Specialist",
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
