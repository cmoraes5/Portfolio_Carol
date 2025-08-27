// type Project = {
//   id: number;
//   title: string;
//   image: string;
//   type: 'large' | 'small';
// };

import { Card } from "../ui/Card";

export function Galeria() {
  // const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  //     const fetchProjects = async () => {
  //       try {
  //         const res = await fetch(
  //           `https://api.behance.net/v2/users/SEU_USERNAME/projects?client_id=SUA_API_KEY`
  //         );
  //         const data = await res.json();
  //         setProjects(data.projects || []);
  //       } catch (err) {
  //         console.error("Erro ao buscar projetos do Behance:", err);
  //       }
  //     };

  //     fetchProjects();
  //   }, []);

  //   return (
  //     <div className="group px-17 pb-[120px] pt-20 rounded-3xl bg-[#F6F1EB]
  //       text-[#7F5528] shadow-md flex flex-row items-center justify-between"
  //     >
  //       {/* Texto */}
  //       <div className="flex flex-col gap-3">
  //         <h1 className="text-[130px] font-bold">UX</h1>
  //         <span className="text-[80px] font-medium">Case Study</span>
  //       </div>

  //       {/* Banners vindos do Behance */}
  //       <div className="flex flex-row relative items-center">
  //         {projects.slice(0, 3).map((proj, i) => (
  //           <img
  //             key={proj.id}
  //             src={proj.covers["808"]} // pega o banner (tem 115, 202, 404, 808, original)
  //             alt={proj.name}
  //             className={`absolute shadow-lg ${
  //               i === 0
  //                 ? "-left-28 top-12 w-[300px] rotate-[-8deg]"
  //                 : i === 1
  //                 ? "relative z-10 w-[600px]"
  //                 : "-right-20 top-8 w-[220px] rotate-[6deg]"
  //             }`}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="py-[120px] px-[100px] flex flex-col gap-18 items-center">
      <Card />

      {/* Linha inferior com 3 blocos */}
      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="/teamspeak.png"
          alt="TeamSpeak"
          className="w-full h-auto object-contain"
        />

        <img
          src="/adopt.png"
          alt="Adopt"
          className="w-full h-auto object-contain"
        />

        <img
          src="/bikcraft.png"
          alt="Bikcraft"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
