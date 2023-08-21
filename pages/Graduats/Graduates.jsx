import React from "react"
import { Link } from "react-router-dom"

export default function Graduates() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/Graduats")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.studentNationalId} className="van-tile">
            <Link to={`/Graduats/${van.studentNationalId}`}>
                <img src="../assets/images/user1.png" />
                <div className="van-info">
                    <h3>{van.studentFullName}</h3>
                    <p>Result=<span>{van.cgpa}</span></p>
                </div>
                <i className={`van-type ${van.isAccredited} selected`}>{van.isAccredited}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our Alumni List </h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}