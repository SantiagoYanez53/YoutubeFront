
export default function Categories(){
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Code",
        "Programming",
        "Life Style",
        "Sports"
    ]
    return (
        <div className="flex flex-row gap-4">
            {
                categories.map((category) => {
                    return (
                        <span key={`category-${category}`} className="p-2 rounded-2xl  font-bold text-sm duration-200 hover:cursor-pointer bg-gray-800 ">
                            {category}
                        </span>
                    )
                })
            }
        </div>
    )
}