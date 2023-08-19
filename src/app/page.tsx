import Posts from '@/components/Posts';
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <main className="flex w-full gap-4">
      <Posts />
      <SideBar />
    </main>
  );
}
