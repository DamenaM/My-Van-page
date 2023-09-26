import React from "react"
import { useParams } from "react-router-dom"

export default function GraduatesDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/Graduats/${params.studentNationalId}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.studentNationalId])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src="../assets/images/user1.png" />
                    <h2>{van.studentFullName}</h2>
                    <p className="van-price"><span>{van.cgpa}</span></p>
                    <p>{van.institutionName}</p>
                    <button className="link-button">Need Authenticate</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}