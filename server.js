import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "ABDI TEREFE  DEKSISA",cgpa:2.38,  institutionName: "College of Biological and Chemical Engineering Department of Biotechnology Engineering", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "Not Authenticated ", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum",cgpa:3.38,  institutionName: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Authenticated ", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red",cgpa:2.8,  institutionName: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. .", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Not Authenticated ", hostId: "456" })
        server.create("van", { id: "4", name: "Dreamfinder", cgpa:3.8,  institutionName: " experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" })
        server.create("van", { id: "5", name: "The Cruiser", cgpa:3.35, institutionName: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Authenticated ", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder",cgpa:2.98,  institutionName: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/Graduats", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/Graduats/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/Graduats", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/Graduats/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
    }
})