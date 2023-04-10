import { Col } from "react-bootstrap"

export const ProjectCards = ({ title, description, imageURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx' >
        <img src={imageURL} alt="imgProject" width='500px' />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  )
}