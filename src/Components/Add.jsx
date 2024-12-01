import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../service/allAPI';


function Add({setUploadVideoResponse}) {

  const[uploadVideo,setUploadVideo]= useState({
    id:"",caption:"",url:"",link:""
  })

  // console.log(uploadVideo);

  //https://www.youtube.com/watch?v=8zIi3Jq4kuc
  //https://www.youtube.com/embed/8zIi3Jq4kuc
  //https://youtu.be/8zIi3Jq4kuc?si=P11xke0A2VMHGyDP

  const getYoutubeLink=(e)=>{
    const {value}=e.target
    if (value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})

    }
  }


  const handleAdd=async()=>{
    const {id,caption,url,link}=uploadVideo

    if(!id || !caption || !url || !link){
      alert("Please fill all fields")
    }else{
      //store video details to json server
      const result = await uploadVideoAPI(uploadVideo)      
      if(result.status>=200 && result.status<300){
        // success
        handleClose()
        // alert
        alert("uploaded successfully")
        // after getting success response field should be empty
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })

        setUploadVideoResponse(result.data)

      }else{
        console.log(result.message);
        
      }
    }
  }
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5 style={{textDecoration:'none',fontSize:'30px'}}>Upload Videos <button className="btn" onClick={handleShow}><i class="fa-solid fa-arrow-up-from-bracket fa-fade" style={{textDecoration:'none',fontSize:'30px'}}></i></button>
        </h5>
      </div>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingTitle" label="Video Title">
        <Form.Control type="text" placeholder="Video Tittle" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel> <br />

      <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Url">
        <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
