import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get('/filteredimage', async ( req, res ) => {
    //const caption = req.body.caption;
    const image_url = req.query.image_url;
    if (!image_url) {
      res.status(400).send("Got no image_url !")
    }
    let files: string[] = [];
    let file = await filterImageFromURL(image_url);
    if (file) {
      res.status(200).sendFile(file);
    }
    else {
      res.status(400).send("oops");
    }
    files.join(file);
    await deleteLocalFiles(files);
  } );


  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();