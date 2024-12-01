import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../../service/allAPI';




function Videocard({video,setDeleteVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    setShow(true)
    const{caption,link}=video

    let today = new Date()
    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",
    //   hour:"2-digit",minute:"2-digit",second:"2-digit"
    // }).format(today));

    let timeStamp=new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",
      hour:"2-digit",minute:"2-digit",second:"2-digit"
    }).format(today)

    let videoHistory = {caption,link,timeStamp}
    await addHistoryAPI(videoHistory)

    }

    const deleteVideo = async(id)=>{
      await deleteVideoAPI(id)
      setDeleteVideoResponse(true)
    

  }

  return (
    <>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" onClick={handleShow} src={video.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between aligh-items-center'>
          <h5>{video.caption}</h5>
          <button onClick={()=>deleteVideo(video?.id)} className="btn"><i class="fa-solid fa-trash-can" style={{color:'red'}}></i></button>
        </Card.Title>
      
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default Videocard
