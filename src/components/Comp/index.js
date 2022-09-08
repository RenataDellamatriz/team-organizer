import Player from '../Player'
import './Comp.css'

const Comp = (props) => {
    
    
    return(       
        (props.players.length > 0) && <section className='comp' >
            <h3 >{props.name}</h3>
            <div className='card'>
            {props.players.map(player => <Player 
            className='player'
            name={player.name}
            role={player.role}
            champion={player.champion}
            /> )}
            </div>
        </section>
    )
}

export default Comp