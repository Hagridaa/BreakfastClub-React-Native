# BreakfastClub-React-Native

School project. App made with React-Native. The app is Breakfast Club app, where user can buy breakfast, send messages to Breakfast Club and view menu.
UI layout made with Sketch.


<img src="mainpageui.png" alt="drawing" width="200" height="400"/> <img src="main2.jpg" alt="drawing" width="200" height="400"/>


## Icons made with Sketch:

![icon](contact2.png)
![icon](CART12png.png)
![icon](Group.png)
![icon](location2.png)
![icon](minusbutton.png)
![icon](plusbutton.png)
![icon](search.png)

## React Native Elements
- Avatar
- Tile

## Navigation
- React-navigation/bottom-tabs

## Expo SDK
- ViewPager
- Font
- LinearGradien
- Splash Screen

## AWS
- aws amplify (used to create all aws infrastructure)
- aws cli (tool to use aws from commandline)
- aws database = DynamoDB no sql database
- aws api gateway (rest api endpoints)
- Lambdas (functions responds to api calls, connects to DynamoDB, returns response to mobile client)

## Prerequisites

* Node.js v10 or later
* npm v5 or later
* git
* Amplify CLI
* Expo CLI
* AWS account

### 1 - Sign up for an AWS account

If you don't already have an AWS account, you need to create one.

[Create aws account](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fportal.aws.amazon.com%2Fbilling%2Fsignup%2Fresume&client_id=signup#/start)

### 2 - Install and configure Amplify CLI

To deploy AWS resources we need Amplify Command Line Interface (CLI)
```shell script
npm install -g @aws-amplify/cli
```

After installing the CLI configure it by running:

```shell script
amplify configure
```

``amplify configure`` will sign in to the AWS Console. 
Once signed in, Amplify CLI will ask you to create an IAM user and goes through some steps.

To see more detailed instructions see [Amplify Prerequisites](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native#option-2-follow-the-instructions)

###  3 - Install Expo CLI

Expo CLI is needed to run the application. Installed it by typing the following command.
````shell script
npm install -g expo-cli
````

### 4 - Clone and setup the project from github by using Amplify CLI
Pass the GitHub URL for the BreakfastClub-React-Native app in the amplify init command as shown below:
```shell script
amplify init --app https://github.com/Hagridaa/BreakfastClub-React-Native
```

The init command clones the GitHub repository, initializes he CLI, creates a 'sampledev' environment in CLI,
detects and categories, provisions the backend, pushes the changes to the cloud, and starts the app.


### Examples how to put data to dynamodb table:
````shell script
aws dynamodb put-item \
      --table-name menu-dev \
      --item file://menu1.json
````

### Example how to get data from dynamodb table:

#### 1.
      
````shell script
aws dynamodb get-item \
   --table-name menu-dev \
   --key '{ "title": {"S": "Desserts"}}'
````
 
 #### 2.
   
```shell script
aws dynamodb query \
 --table-name menu-dev \
 --key-condition-expression "title = :name" \
 --expression-attribute-values '{":name":{"S":"Desserts"}}'
```         
