## Image-Annotation-Mongodb-Express-Nodejs
Manually annotate images and store in the database to create specialized datasets for training ML Models

## Install node and mongodb(ignore if already installed)
```
brew install node
brew tap mongodb/brew
brew install mongodb-community@4.2
```
## Clone repository

```
git clone https://github.com/MitaliO/Image-Annotation-Mongodb-Express-Nodejs.git
cd Image-Annotation-Mongodb-Express-Nodejs
```

## Install all nodejs dependencies(package.json)
```
npm install
```
## Start mongodb service followed by nodejs server
```
brew services start mongodb-community@4.2
npm run devStart
```

## Go to http://127.0.0.1:5500/index.html to access the frontend
![Image 12-17-21 at 6 35 PM](https://user-images.githubusercontent.com/91545161/146619484-24eaa96e-a57f-44fe-9804-d7aada5ed83e.jpeg)

Select the object you'd like to annotate in the image, add corresponding label below the image and click on save

Data corresponding to top left point(x,y coordinates) and width and height of the selected rectangle along with the annotation label are passed to the 
post annotation api end point to create a new annotation

You can view all annotations by sending a get api request on annotations or by going to http://localhost:3000/annotations

Code includes apis to update and delete annotations as well

