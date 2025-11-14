import { useMovies } from "../../cases/movies/hooks/use-hooks";

export function Highlight() {
    const { selectedMovie } = useMovies();

    // Filme padrão (primeiro código)
    const defaultMovie = {
        title: 'Como Treinar o seu Dragão',
        poster: './public/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg',
        background: './public/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg',
        genres: ['Fantasia', 'Família', 'Ação & Aventura'],
        duration: '2h 5m',
        sinopse:
            'Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são os monstros que todos acreditavam ser.',
    };

    // Se existir selectedMovie, usa ele. Senão usa o padrão.
    const movie = selectedMovie
        ? {
              title: selectedMovie.title,
              poster: selectedMovie.image,
              background: selectedMovie.image,
              genres: selectedMovie.genres || [],
              duration: selectedMovie.duration || "",
              sinopse: selectedMovie.plot || "Sinopse não disponível.",
          }
        : defaultMovie;

    return (
        <section 
            className="relative flex"
            style={{
                backgroundImage: `url(${movie.background})`,
                backgroundSize: "cover",
                backgroundPosition: "left calc((50vw - 170px) - 340px) top",
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full z-[1]"
                style={{
                    backgroundImage: `linear-gradient(to right,
                    rgba(17,17,17,1) calc((50vw - 70px) - 340px),
                    rgba(17,17,17,0.7) 50%,
                    rgba(17,17,17,0.7) 100%)`,
                }}
            ></div>

            <div className="flex gap-[2rem] py-[2rem] z-[2] max-w-[1200px] mx-auto">
                <img
                    className="rounded-[0.5rem]"
                    src={movie.poster}
                    alt={`Imagem do filme ${movie.title}`}
                />

                <div className="flex flex-col">
                    <h2 className="text-[2.5rem] font-[400]">{movie.title}</h2>

                    <div className="text-[0.8rem] my-[0.6rem]">
                        {movie.genres.map((genre, index) => (
                            <span
                                key={index}
                                className="bg-[rgba(255,255,255,0.2)] px-[0.8rem] py-[0.3rem] rounded-[20px] mr-[0.4rem]"
                            >
                                {genre}
                            </span>
                        ))}

                        {movie.duration && (
                            <span className="pl-[1rem] text-[#ccc]">{movie.duration}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-[0.5rem]">
                        <h4 className="text-[1.5rem] font-[400] pt-[3rem] pb-[0.5rem]">
                            Sinopse
                        </h4>
                        <p className="text-[0.8rem]">
                            {movie.sinopse}
                        </p>
                    </div>

                    <div className="flex gap-[1rem] my-[1.5rem]">
                        <button
                            className="bg-[#e50914] text-white border-none px-[1.5rem] py-[0.8rem] rounded-[4px] font-bold transition-colors duration-[300ms] ease-linear cursor-pointer hover:bg-[#b8070f]"
                        >
                            Assistir
                        </button>

                        <button
                            className="bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.3)] px-[1.5rem] py-[0.8rem] rounded-[4px] transition-colors duration-[300ms] ease-linear hover:bg-[rgba(255,255,255,0.3)]"
                        >
                            Detalhes
                        </button>

                        <button
                            className="bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.3)] px-[1.5rem] py-[0.8rem] rounded-[4px] transition-colors duration-[300ms] ease-linear hover:bg-[rgba(255,255,255,0.3)]"
                        >
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
