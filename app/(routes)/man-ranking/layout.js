import RankingNavbar from "@/components/mens-raking-navbar";

export default function RankingLayout({
    children,
  }) {
    return (
      <div className="lg:container">
        <RankingNavbar/>
        {children}
      </div>
    );
  };
