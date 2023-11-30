export const CrewContainer = (props) => {

    const directors = props.crew.filter(crew => crew.known_for_department === "Directing")
    const writters = props.crew.filter(crew => crew.known_for_department === "Writing")
    const editors = props.crew.filter(crew => crew.known_for_department === "Editing")
    const visualEffects = props.crew.filter(crew => crew.known_for_department === "Visual Effects")
    const producers = props.crew.filter(crew => crew.known_for_department === "Production")

    const pageCrew = [
        {
            name: directors.length > 0 && directors[0].name,
            role: directors.length > 0 && "Direção"
        },
        {
            name: writters.length > 0 && writters[0].name,
            role: writters.length > 0 && "Roteiro"
        },
        {
            name: editors.length > 0 && editors[0].name,
            role: editors.length > 0 && "Edição"
        },
        {
            name: visualEffects.length > 0 && visualEffects[0].name,
            role: visualEffects.length > 0 && "Efeitos Visuais"
        },
        {
            name: producers.length > 0 && producers[0].name,
            role: producers.length > 0 && "Produção"
        }

    ]

    return (
        <>
            <div className=" flex gap-[5vw] items-center">

                <div className="flex flex-col gap-[5vh]">
                    {pageCrew.slice(0, 2).map((crew) => (
                        <div key={crew.name} className="flex flex-col gap-[.3vh]">
                            <span className="font-semibold text-[1.1vw]">
                                {crew.name}
                            </span>
                            <span className="text-[.9vw]">
                                {crew.role}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-[5vh]">
                {pageCrew.length > 3 && 
                    pageCrew.slice(2, 4).map((crew) => (
                        <div key={crew.name} className="flex flex-col gap-[.3vh]">
                            <span className="font-semibold text-[1.1vw]">
                                {crew.name}
                            </span>
                            <span className="text-[.9vw]">
                                {crew.role}
                            </span>
                        </div>
                    ))}
                </div>
                    {pageCrew.length > 4 && 
                    pageCrew.slice(4, 5).map((crew) => (
                        <div key={crew.name} className="flex flex-col mb-[11.5vh] gap-[.3vh]">
                            <span className="font-semibold text-[1.1vw]">
                                {crew.name}
                            </span>
                            <span className="text-[.9vw]">
                                {crew.role}
                            </span>
                        </div>
                    ))}
                </div>
        </>
    )
}