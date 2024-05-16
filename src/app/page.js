import Header from "@/components/Header/Header";
import Jobs from "@/components/Jobs/Jobs";
import SideBar from "@/components/SideBar/SideBar";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{display: 'flex'}}>
        <div style={{width: '25%'}}>
          <SideBar />
        </div>
        <div style={{width: '75%'}}>
          <Jobs />
        </div>
      </div>
    </main>
  );
}
