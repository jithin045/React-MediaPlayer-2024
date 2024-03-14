import React, { useEffect, useState } from 'react'
import { getCategory, deleteCategory, getSpecificVideo, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';

function Categorylist({ CatStatus }) {
    const [cat, setCat] = useState([])

    const [delcatStatus, setDelcatStatus] = useState({})

    const getCat = async () => {
        const res = await getCategory()
        setCat(res.data)
    }

    const handleDelcat = async (id) => {
        console.log(id);
        const res = await deleteCategory(id)
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
            setDelcatStatus(res)
            toast.success("Category Deleted Successfully!!")
        }
        else {
            toast.error("Category Deletion Failed!!")
        }
    }

    useEffect(() => {
        getCat()
    }, [CatStatus, delcatStatus])


    const handleDrop = async (e, id) => {
        console.log("category id:" + id);
        const vid = e.dataTransfer.getData("videoId")
        console.log("dropped video id :" + vid);
        let category = cat.find(item => item.id == id)
        console.log(category);
        const res = await getSpecificVideo(vid)
        category.videos.push(res.data)
        console.log(category);
        const rescat = await updateCategory(category, id)
        if (rescat.status >= 200 && rescat.status < 300) {
            toast.success(`${res.data.caption} is added to ${category.name}`)
            getCat()
        }
        else {
            toast.error("Video adding to category Failed!!")
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("Dragging over category");
    }


    return (
        <>
            <div>
                {
                    cat ?
                        cat.map(item => (
                            <div className='border border-3 mt-4 text-center p-2 rounded' droppable onDragOver={e => { handleDragOver(e) }} onDrop={e => handleDrop(e, item?.id)}>
                                <div>
                                    <span>{item.name}</span>
                                    <i className="fa-solid fa-trash-can float-end" onClick={() => { handleDelcat(item.id) }} style={{ color: "#f10909" }}></i>
                                </div>
                                <div>
                                    {
                                        item?.videos.map(v => (
                                            <VideoCard video={v} cat={true} />
                                        ))
                                    }
                                </div>

                            </div>
                        )) :
                        <h1>No categories</h1>
                }

            </div>
        </>

    )
}

export default Categorylist