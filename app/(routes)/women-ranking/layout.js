import RankingNavbar from "@/components/women-raking-navbar";

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
