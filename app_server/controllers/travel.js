const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
};

const travel = async (req, res , next ) => {
    try{
        const response = await fetch(tripsEndpoint);
        const json = await response.json();

        // Render the travel view with the fetched data
        res.render( 'travel',{title : " Travlr Gateways", trips: json });
    } catch (error) {
        console.error("Error fetching trips data:", error);
        // pass the  error to the next middleware
        next(error);

    }
};


module.exports = {
    travel,
};



