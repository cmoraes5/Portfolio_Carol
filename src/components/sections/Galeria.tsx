// type Project = {
//   id: number;
//   title: string;
//   image: string;
//   type: 'large' | 'small';
// };

export function Galeria() {
  // const res = await fetch('https://api.exemplo.com/projects');
  // const data: Project[] = await res.json();

  // const largeProjects = data.filter((p) => p.type === 'large');
  // const smallProjects = data.filter((p) => p.type === 'small');

  // return (
  //   <section className="bg-gray-100 py-16 px-4">
  //     {/* Grid superior */}
  //     <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
  //       {largeProjects.map((project) => (
  //         <div key={project.id} className="rounded-xl overflow-hidden shadow-lg">
  //           <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
  //         </div>
  //       ))}
  //     </div>

  //     {/* Grid inferior */}
  //     <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
  //       {smallProjects.map((project) => (
  //         <div key={project.id} className="rounded-xl overflow-hidden shadow-lg">
  //           <img src={project.image} alt={project.title} className="w-full h-auto object-contain" />
  //         </div>
  //       ))}
  //     </div>
  //   </section>

  return (
    <section className="py-16 px-4">
      <div className="rounded-xl overflow-hidden shadow-xl">
        <img
          src="/UX-Case-Study.png"
          alt="Lets"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Linha inferior com 3 blocos */}
      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/teamspeak.png"
            alt="TeamSpeak"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/adopt.png"
            alt="Adopt"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/bikcraft.png"
            alt="Bikcraft"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
