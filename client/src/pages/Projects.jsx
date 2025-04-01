import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Pojects</h1>
      <p className="text-md text-gray-500">
        Welcome to Mahi's Blog! This blog was created by Mahesh Devraj as a
        personal project to share his thoughts and ideas with the world.
      </p>
      <CallToAction />
    </div>
  );
}
