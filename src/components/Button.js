import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} className="btn-red-700 px-10 py-2 drop-shadow-lg text-white rounded-xl">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
