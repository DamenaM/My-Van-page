import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/Graduats")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/Graduats/${van.studentNationalId}`}
            key={van.studentNationalId}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.studentNationalId}>
                <img src="../assets/images/user1.png" alt={`Photo of ${van.studentNationalId}`} />
                <div className="host-van-info">
                <h3>{van.studentFullName}</h3>
                    <p>score={van.cgpa}</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed Alumni </h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (  <h2>Loading...</h2>  )
                }
            </div>
        </section>
    )
}