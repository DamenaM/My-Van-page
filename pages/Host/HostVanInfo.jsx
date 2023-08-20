import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentGraduates } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4>studentNationalId: <span>{currentGraduates.id}</span></h4>
            <h4>studentFullName: <span>{currentGraduates.name}</span></h4>
            <h4>yearOf_Graduation: <span>{currentGraduates.type}</span></h4>
            <h4>EndDate: <span>{currentGraduates.type}</span></h4>
            <h4>obtained_Certificate: <span>{currentGraduates.type}</span></h4>
            <h4>institutionName: <span>{currentGraduates.type}</span></h4>
            <h4>studyProgram: <span>{currentGraduates.type}</span></h4>
            <h4>Description: <span>{currentGraduates.description}</span></h4>
            <h4>Visibility: <span>is Accredited</span></h4>
        </section>
    )
}