//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, description }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
