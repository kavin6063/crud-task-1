

const Alert = ({version , message , actionMessage}) => {
  return (
    <div className ={`z-50 rounded-lg w-full h-[70px]  text-[#ffffff]`} style={{ backgroundColor: version }}>
    <div className ="flex flex-row gap-5 justify-center items-center px-2.5 w-full h-full">
        <div className ="my-auto text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
            </svg>
        </div>
        <div>
            <div className ="font-bold text-sm">{message}</div>
            <div className =" text-xs">{actionMessage}</div>
        </div>
    </div>
</div>
  )
}

export default Alert