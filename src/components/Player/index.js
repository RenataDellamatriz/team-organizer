import "./Player.css";

const Player = ({ name, role, champion }) => {
  return (
    <div className="player">
      
        <h4>{name}</h4>
        <h5>{role}</h5>
      
      <div className="image">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion}.png`}
          alt={champion}
        />
        <p>{champion}</p>
      </div>
    </div>
  );
};

export default Player;
