import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadedVideosAPI } from '../../service/allAPI'


function View({uploadVideoResponse}) {

  const[allVideos,setAllVideos]= useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)


  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos=async()=>{
    const result = await getAlluploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      setAllVideos([])
      console.log("API Failed");
      
    }
    
  }

// console.log(allVideos);


  return (
    <>
      <Row>
       {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
        </Col>
        )): <p>Nothing to display</p>
       
        }
      </Row>
    </>
  )
}

export default View
