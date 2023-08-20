import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentGraduates, setCurrentVan] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/Graduats/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentGraduates) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all Alumni </span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentGraduates.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i   className={`van-type van-type-${currentGraduates.type}`}    >
                            {currentGraduates.type}
                        </i>
                        <h3>{currentGraduates.name}</h3>
                        <h4>Graduate Result ={currentGraduates.cgpa}</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                     <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Department
                    </NavLink>
                    <NavLink
                        to="instName"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        ObtainedCertificate
                    </NavLink>
                    <NavLink
                        to="GratuCGPA"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                       CGPA
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentGraduates }} />
            </div>
        </section>
    )
}

