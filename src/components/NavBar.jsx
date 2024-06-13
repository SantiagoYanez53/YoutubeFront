import YouTubeLogo from "./YouTubeLogo"
export default function NavBar(){
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3 w-full">
            <div className= "flex flex-row items-center gap-1 pl-4">
            <YouTubeLogo height="1.8rem" width="3rem" />
            <span>YouTube</span>
            </div>
            <div className = "flex content-center items-center">
              <input className="w-[90%] p-[0.5rem_1rem] rounded-s-2xl bg-transparent border-[1px] border-white" type= "text" placeholder="Search" />
            </div>
            <div className="flex items-center place-content-end pr-4">
                <img className="w-8 h-auto rounded-[50%]"
                src="https://api.dicebear.com/8.x/identicon/svg?seed=Santiago" alt="user"    />
            </div>
        </nav>
    )
}
