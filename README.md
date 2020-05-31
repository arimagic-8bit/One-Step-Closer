# ONE STEP CLOSER



## Description

This app will help the user to reduce it's carbon footstep by making challenges.



## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage, and sign up or log in.
- **sign up** - As a user I want to sign up on the web page.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **main** - As a user I want to be able to browse challenges, create a challenge, access to my list of challenges to complete, access to my created challenges, access to my collection of badges and logout.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **browse challenge** - As a user I want to see the list of available challenges per typology and accept one.
- **create challenge** - As a user I want to be able to create a challenge.
- **list of actual challenges** - As a user I want to see the list of accepted challenges, complete or give up them.
- **list of created challenges** - As a user I want to see all the challenges I created, edit or delete them.

  



## Server Routes (Back-end):

| **Method** | **Route**                      | **Description**                                              | Request - Body                   | Views                      |
| ---------- | :----------------------------- | ------------------------------------------------------------ | -------------------------------- | :------------------------- |
| `GET`      | `/`                            | Main page route. Renders home `index` view.                  |                                  | Index view                 |
| `GET`      | `/login`                       | Renders `login` form view.                                   |                                  | Log in form view           |
| `POST`     | `/login`                       | Sends Login form data to the server.                         | { username, password }           | Main view                  |
| `GET`      | `/signup`                      | Renders `signup` form view.                                  |                                  | Sign up form view          |
| `POST`     | `/signup`                      | Sends Sign Up info to the server and creates user in the DB. | { username, password }           | Main view                  |
| `GET`      | `/logout`                      | Redirects to `/`                                             |                                  |                            |
| `GET`      | `/challenge`                   | Renders the main view.                                       |                                  |                            |
| `GET`      | `/challenge/:type`             | Renders a view of challenges for the selected category       |                                  | typeOf challenges view     |
| `GET`      | `/challenge/:id`               | Renders a view of selected challenge                         |                                  | id challenge view          |
| `POST`     | `/challenge/:id/accept`        | Adds challenge to list of actual challenges.                 | {name, img, description, status} | actual challenges view     |
| ``GET``    | `/challenge/create`            | Renders create challenge form view                           |                                  | create challenge form view |
| `POST`     | `/challenge/create`            | Creates challenge in the DB and adds challenge to list of created challenges. | {name, img, description}         | created challenges view    |
| ``GET``    | `/users/:id/edit`              | Renders edit form                                            |                                  |                            |
| ``PUT``    | `/users/:id/edit`              | `Edits challenge and updates it from the DB.`                |                                  | id challenge view          |
| ``GET``    | `/user/actual`                 | Renders view of accepted challenges view                     |                                  | accepted challenges view   |
| ``GET``    | `/user/created`                | Renders view of created challenges view                      |                                  | created challenges view    |
| ``GET``    | `/users/created/:id/details`   | Renders created challenge view                               |                                  |                            |
| ``POST``   | `/users/:id/leave`             | Deletes challenge from actual challenge list.                |                                  | actual challenges view     |
| ``POST``   | `/challenge/create/:id/delete` | Deletes challenge from created challenge list.               |                                  | created challenges view    |
| ``POST``   | `/users/:id/completed`         | Changes state of accepted challenge to complete and adds it to completed list |                                  |                            |



## Models

User model

```
{
  username: String,
  password: String,
  actualChallenges: [Schema.Types.ObjectId],
  createdChallenges:[Schema.Types.ObjectId],
  createdChallenges:[Schema.Types.ObjectId],
  //badges: [{ category: imageUrl}],
  //imageUrl: String,
  //friends: [Schema.Types.ObjectId]
}
```

Challenge model

```
{
  name: String,
  type: String,
  image: String,
  description: String,
  status: Boolean,
  author: Schema.Types.ObjectId,
  // usersDoingChallenge: [userId]
  // usersCompletedChallenge: [userId]
}
```



## Backlog

- Social feature: Add friends, see their challenges and team-up with them.
- Web page moderator
- Badge collection



## Links

### Git

https://one-step-closer-app.herokuapp.com/

### Figma wireframes

https://www.figma.com/file/bKTC2ezphoDdE1r6vpzEkv/One-Step-Closer?node-id=0%3A1


## Creators

### Alberto Pagoria

### Linkedin:
https://www.linkedin.com/in/albertopagoria/

### GitHub:
https://github.com/alpagor

### Ariadna Díaz

### Linkedin:
https://www.linkedin.com/in/ariadna-d%C3%ADaz-baggerman/

### GitHub:
https://github.com/arimagic-8bit
