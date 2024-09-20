

const Card = ({children , reverse = false}) => {
  const cardClass = `card bg-white dark:bg-[#1e1b4b] text-[#333333] dark:text-[#ffffff] w-[70%] mx-auto p-[50px] rounded-[20px] mb-[20px] relative`
  return (
    <div className={`${cardClass} ${reverse && "reverse"}`}>
        { children }
    </div>
  )
}

export default Card



