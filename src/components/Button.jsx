

const Button = ({label , iconUrl}) => {
  return (
    <button className="">
      {label}

      <img src={iconUrl} alt="rightArrow" className="ml-2 rounded-full w-5 h-5" />
    </button>

  )
}

export default Button