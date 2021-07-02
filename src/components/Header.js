import PropTypes from 'prop-types'
import Button from './Button'
import '../index.css'
import { useLocation } from 'react-router'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <div className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </div>
    )
}

// Default prop value if not assigned when calling
Header.defaultProps = {
    title: 'Task Tracker',
}

// Prop Type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headerStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
