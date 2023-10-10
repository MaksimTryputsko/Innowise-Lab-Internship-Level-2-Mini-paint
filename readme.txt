Task: https://drive.google.com/file/d/19cb4whI_HUVPzuaPyaj5r6hGotIVnhho/view.

How to run the app: For install modules use: npm install. For start the application use: npm start.

Database snapshot: When user create account, firebase creates collection with ID. When user add image,
firebase creates document with email. In document email we have image-url, id and time to add pictures.

Application stack: SCSS module, typescript, react-redux-toolkit, react-saga, MUI , nanoid, firebase.

src
    Components - React components
        components for the Application, 
                    each folder has component.tsx and styles.modules.scss
    constants - folder consists of .ts - we have constants for the application,
                variables.scss - scss variables for the application
    function - folder consists of .ts functions - for the application
    images - folder consists of .svg images - for the application
    hooks - folder consists of .ts react customs hooks
    pages - folder consists of components. The components use in the application for crete pages.
    store - store for redux and saga 
        reducers - reducers for the application
        saga - saga for the application
    tools - folder consists of .ts tools classes - for the application 
                        
