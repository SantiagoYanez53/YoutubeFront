import clsx from "clsx"
// export default function Video(props) {
//     return (
//         <article className="video-card">
//             <img src={props.image} alt="" />
//             <footer>
//                 <img src="" alt="" />
//                 <p>{props.title}</p>
//                 <p>{props.channel}</p>
//             </footer>
//         </article>
//     )
// }
export default function Video({image,titulo,channel}) {
    // if(!channel){
    //     return (
    //         <article>
    //             <p>Incompleto</p>
    //         </article>
    //     )
    // }

    //const articleClassnames = ('videos-card' + channel === 'OneCoin' ? ' special' : '')

    // let articleClassnames = ['video-card']

    // if (channel === 'OneCoin'){
    //     articleClassnames.push("special")
    // }
    return (
        <article className={clsx('flex flex-col gap-2',
            {'bg-[#282828] rounded-xl' : channel === 'OneCoin'})
        }>
            <img className="w-full rounded-xl object-cover aspect-video" src={image} alt="" />
            <footer className="grid gap-2 grid-cols-[2rem_1fr]">
                {/*
                    channel && (
                        <img 
                            src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${channel}`} 
                            alt="" 
                        />
                    )
                }
                {
                    !channel && (
                        <span>🤷‍♂️🤷‍♂️🤷‍♂️</span>
                    )
                */}
                {channel ? (
                    <img 
                        className="col-start-1 col-end-2 w-8 h-8 rounded-[50%]"
                        src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${channel}`} 
                        alt="" 
                    />
                ):(
                    <span>🤷‍♂️🤷‍♂️🤷‍♂️</span>
                )}
                <p className="col-start-2 col-end-3">{titulo}</p>
                <p className="col-start-2 col-end-3">{channel || 'UNKNOWN'}</p>
            </footer>   
        </article>
    )
}