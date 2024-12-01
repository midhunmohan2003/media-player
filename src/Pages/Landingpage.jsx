import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'40px'}}>Welcome to <span className="text-danger">Media-Player</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae saepe error aut sapiente vel beatae est iste consequuntur fuga hic, architecto veniam rem quos repudiandae velit. Iusto, repudiandae saepe!
          Quo qui dolores pariatur quibusdam cum velit atque consequuntur eos inventore. Odit ad numquam sit omnis sint neque nostrum tempora harum expedita distinctio, accusantium vero architecto possimus doloremque dicta accusamus!</p>
          <button className="btn btn-warning mt-4" onClick={()=>navigateByUrl('/home')}>Get Started</button>
        </Col>
        <Col lg={5}>
        <img src="https://cdn.pixabay.com/animation/2024/04/15/05/34/05-34-47-817_512.gif"/>
        </Col>
        <Col></Col>
      </Row>


      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1111127/screenshots/3988788/audio.gif" height={'250px'} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.gifer.com/Nt6v.gif" height={'250px'}/>
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/new/misc/musicplaye_HnRvtWNJ.gif" height={'250px'}/>
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>


    <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify content-between w-100">
      <div className="col-lg-5">
        <h4 className="text-warning">Simple,Powerful & Fast</h4>
        <h6 className="mb-5 mt-3"><span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint magni a autem nostrum vero ab, beatae dolorem expedita aperiam fugiat illo quas accusamus deleniti temporibus tempora suscipit ullam praesentium.
        Nemo quasi corporis enim ex distinctio mollitia molestiae eaque nam eos. Voluptas natus minima libero commodi quae, cum architecto velit reprehenderit corrupti? Ipsa aut quisquam amet qui tempore in libero. </h6>

        <h6 className="mb-5 mt-3"><span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint magni a autem nostrum vero ab, beatae dolorem expedita aperiam fugiat illo quas accusamus deleniti temporibus tempora suscipit ullam praesentium.
        Nemo quasi corporis enim ex distinctio mollitia molestiae eaque nam eos. Voluptas natus minima libero commodi quae, cum architecto velit reprehenderit corrupti? Ipsa aut quisquam amet qui tempore in libero. </h6>
        
        <h6 className="mb-5 mt-3"><span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint magni a autem nostrum vero ab, beatae dolorem expedita aperiam fugiat illo quas accusamus deleniti temporibus tempora suscipit ullam praesentium.
        Nemo quasi corporis enim ex distinctio mollitia molestiae eaque nam eos. Voluptas natus minima libero commodi quae, cum architecto velit reprehenderit corrupti? Ipsa aut quisquam amet qui tempore in libero. </h6>
        
      </div>
      <div className="video col-lg-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AY3Yea6hBbI?si=J1bEFmBhE4NTIi6H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>      
      </div>
    </div>
    </>
  )
}

export default Landingpage
