import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../services/allApis';
import { toast } from 'react-toastify';


function VideoCard({ video, setDelStatus, cat }) {
    const [show, setShow] = useState(false);
    const [history, setHistory] = useState({
        caption: video.caption, url: video.url, datetime: ''
    })

    const handleDelete = async (id) => {
        console.log(id);
        const res = await deleteVideo(id)
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
            setDelStatus(res)
            toast.success("Video Deleted Successfully!!")
        }
        else {
            toast.error("Video Deletion Failed!!")
        }
    }

    const handleOnDrag = (e, id) => {
        console.log("video is dragging:id" + id);
        e.dataTransfer.setData("videoId", id)
    }

    const handleClose = () => {
        addHistory(history)
        setShow(false);
    }
    const handleShow = () => {
        setHistory({ ...history, datetime: new Date() })
        setShow(true);
    }


    return (
        <>
            <Card style={cat ? { width: '13rem' } : { width: '20rem' }} className='ms-4 mb-4 ' draggable onDragStart={(e) => handleOnDrag(e, video?.id)}>
                <Card.Img className='mt-2' style={cat ? { height:"100px" } : { height:"150px" }} variant="top" src={video.image} onClick={handleShow} />
                <Card.Body className='d-flex flex-row justify-content-between'>
                    <Card.Title style={cat ? { fontSize:"15px" } : { fontSize:"25px" }}>{video.caption}</Card.Title>
                    {
                        !cat &&
                        <i className="fa-solid fa-trash-can" onClick={() => { handleDelete(video.id) }} style={{ color: "#f10909" }}></i>
                    }

                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>

            </Modal>


        </>
    )
}

export default VideoCard