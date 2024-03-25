import { Link } from "react-router-dom"

export const ButtonToMain = ({title}) => {
    return (
        <Link to="/">
        <button className="item__description_button">{title}</button>
      </Link>
    )
}