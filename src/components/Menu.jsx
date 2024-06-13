
export default function Menu(){
  // list rendering

  const menutItems = [
      { icon: '🏠', text: 'HOME' },
      { icon: '🩳', text: 'Shorts'},
      { icon: '⏰', text: 'Subscriptions'}
  ]
  return (
  <aside className='cols-start-1 cols-end-2 rows-start-2 rows-end-3'>{
          menutItems.map((item) => {
              return (
                  <div key={`menu-item-${item.text}`} className="p-1 rounded-[20px] flex flex-col gap-1 items-start cursor-pointer hover:bg-slate-800">
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                  </div>
              )
          })
      }
  </aside>
  )
}