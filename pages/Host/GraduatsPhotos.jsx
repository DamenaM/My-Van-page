import React from "react"
import { useOutletContext } from "react-router-dom"

export default function GraduatsPhotos() {
    const { currentGraduates } = useOutletContext()
    return (
        <img src={currentGraduates.imageUrl} className="host-van-detail-image" />
    )
}