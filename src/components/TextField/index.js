import './TextField.css'

const TextField = (props) => {

    const onTypedChange = (event) => {
        props.handleChange(event.target.value)
    }

    return(
        <div className='text-field'>
            <label>{props.label}</label>
            <input 
            onChange={onTypedChange}
            value = {props.inputValue} 
            required={props.mandatory}
            placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField