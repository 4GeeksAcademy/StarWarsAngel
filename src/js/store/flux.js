const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			characters: [],
            vehicles: [],
            planets: [], 
			characterDetails: [],
            planetDetails: {}, 
            vehicleDetails: {},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/"
				)
			    .then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					setStore({ characters: data.results })
				})
				.catch(error => {
                    console.log(error)
				})
			},

			getCharactersdetails: (charactersURL) => {
				fetch(charactersURL
				)
			    .then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					setStore({ charactersDetails: data.result.properties });
				})
				.catch((error) => {
                    console.log(error)
				})
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					  },
				})
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({ planets: data.results })
				})
				.catch(error => {
					console.error();
				});
			},

			getPlanetsdetails: (planetsId) => {
				fetch(`https://www.swapi.tech/api/planets/${planetsId}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					  },
					  body: JSON.stringify(planetsId),
					}
				)
			    .then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					setStore({ planets: data.results })
				})
				.catch(error => {
                    console.log(error)
				})
			},


			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					  },
				})
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({ vehicles: data.results })
				})
				.catch(error => {
					console.error();
				});
			},

			getVehiclesdetails: (vehiclesId) => {
				fetch(`https://www.swapi.tech/api/vehicles/${vehiclesId}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					  },
					  body: JSON.stringify(vehiclesId),
					}
				)
			    .then(response => {
					if(!response.ok) throw Error("no");
					return response.json()
				})
				.then(data => {
					setStore({ vehicles: data.results })
				})
				.catch(error => {
                    console.log(error)
				})
			},


			addFavoritos: (name) => {
				const store = getStore()
				setStore({ ...store, favorites: [...store.favorites, name] });
		},
	}
};
}

export default getState;
