
const Button = ({children , version , type , isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version} px-4 py-1 rounded-xl text-white`}>
      {children}
    </button>
  )
}

export default Button