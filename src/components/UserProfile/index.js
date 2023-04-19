import './index.css'

const UserProfile = (props) => {
    const { deleteFunction, } = props

    const deleteFun = () => {
        deleteFunction(props.detail.id)
    }
    return (
        <li className='cont'>
            <div className='cont-1'>
                <img src={props.detail.imageUrl} alt="dax" className='imageSet' />
                <div className='sd'>
                    <h1 className='head'>{props.detail.name}</h1>
                    <p className='para'>{props.detail.role}</p>
                </div>
            </div>
            <button onClick={deleteFun} className='button'>delete</button>
        </li>
    )
}
export default UserProfile;











