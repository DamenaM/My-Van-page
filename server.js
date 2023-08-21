import { createServer,Factory,  Model } from "miragejs"

const Van = Model.extend({
    // Define attributes here
    name: attr(),
    cgpa: attr(),
    institutionName: attr(),
    imageUrl: attr(),
    type: attr(),
    hostId: attr(),
  });
  const MyFactory = Factory.extend({
    name: (i) => `Item ${i + 1}`,
    cgpa: (i) => `${i + 1}`,
    institutionName: (i) => `Institution ${i + 1}`,
    imageUrl: (i) => `https://example.com/image${i + 1}.png`,
    type: (i) => i % 2 === 0 ? 'Authenticated' : 'Not Authenticated',
    hostId: (i) => `${i + 1}`,
  });
// Define a model with your data schema
// export default Model.extend(
//     { id: "1", name: "ABDI TEREFE DEKSISA", cgpa: 2.38, institutionName: "College of Biological and Chemical Engineering Department of Biotechnology Engineering", imageUrl: "../assets/images/user1.png", type: "Not Authenticated", hostId: "123" },
//     { id: "2", name: "Beach Bum", cgpa: 3.38, institutionName: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Authenticated", hostId: "123" },
//     { id: "3", name: "Reliable Red", cgpa: 2.8, institutionName: "R if you need to. .", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Not Authenticated", hostId: "456" },
//     { id: "4", name: "Dreamfinder", cgpa: 3.8, institutionName: " experience. With a ceiling height oftiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "Not Authenticated", hostId: "789" },
//     { id: "5", name: "The Cruiser", cgpa: 3.35, institutionName: "The Cruiser is a a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Authenticated", hostId: "789" },
//     { id: "6", name: "Green Wonder", cgpa: 2.98, institutionName: "With this van,l. The Green Won go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "Not Authenticated", hostId: "123" },

//   );
 





createServer({
    models: {
        vans: Model,
    },
    factories: {
        
        myFactory: MyFactory,
      },
   
    // seeds(server) {
    //     for (let i = 0; i < 100; i++) {
    //         server.create('myModel', 'myFactory');
    //       }
    // },

    seeds(server) {
        server.create("van", { id: "1", name: "ABDI TEREFE  DEKSISA",cgpa:2.38,  institutionName: "College of Biological and Chemical Engineering Department of Biotechnology Engineering", imageUrl: "../assets/images/user1.png", type: "Not Authenticated ", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum",cgpa:3.38,  institutionName: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Authenticated ", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red",cgpa:2.8,  institutionName: "R if you need to. .", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Not Authenticated ", hostId: "456" })
        server.create("van", { id: "4", name: "Dreamfinder", cgpa:3.8,  institutionName: " experience. With a ceiling height oftiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "Not Authenticated", hostId: "789" })
        server.create("van", { id: "5", name: "The Cruiser", cgpa:3.35, institutionName: "The Cruiser is a a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Authenticated ", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder",cgpa:2.98,  institutionName: "With this van,l. The Green Won go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "Not Authenticated", hostId: "123" })
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