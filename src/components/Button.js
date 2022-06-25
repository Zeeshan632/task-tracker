import PropTypes from 'prop-types'

function Button({color, text, onClick}) {
    
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className="btn">
            {text}
        </button>
    )
} 
const onClick = () => {
    console.log('hello saeen')
}

Button.defaultProps = {
    color: 'orange',
    text: 'nh chal raha',
    onClick: onClick
}
Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button
