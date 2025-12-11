const Card = ({img, title, sale}) => {
  return (
   <>
   <div className="card" style={{width : "18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <p>{sale}</p>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Click me</a>
  </div>
</div>
   </>
  )
}

export default Card