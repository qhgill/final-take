# Final Take

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br/>
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

[Deployment Link](https://qhgill.github.io/final-take/)
<br/>
[Devpost](https://devpost.com/software/the-final-take?ref_content=user-portfolio&ref_feature=in_progress)
<br/>
[Figma](https://www.figma.com/design/SwhvB05sxX9Obd8qbtN9iI/The-Final-Take?node-id=52-78&t=Hqlk7OC6PGqDdgE2-0)

## Inspiration

Given the theme of cinema and our passion for sustainability, we wanted to find an intersection of these topics. We were inspired by how the average feature film utilizes a lot of carbon emissions. We wanted to raise awareness on this niche topic through a fun, decision-making game. We took a lot of inspiration from the game SPENT, which challenges players to face the realities of poverty and financial responsibility.

## What it does

We wanted to create an exciting experience that highlights filmmaking's hidden costs—financial, environmental, and creative. The Final Take challenges players to make smart, impactful decisions behind the scenes, from storyboarding to filming to marketing.

## How we built it

We used Figma to design the various pages on The Final Take. Using Next.js, TailwindCSS, and TypeScript, we built the web app. We designed a scoring system that ties each decision to three key stats: Budget, Sustainability, and Film Quality.

## Challenges we ran into

It took several iterations to get the costs and rewards just right so players wouldn't fall into debt immediately or breeze through with no consequences. We also ran into consistent merge conflicts due to the lack of code organization.

## Accomplishments that we're proud of

We're proud of being able to have a clean user interface design that still fits the noir film aesthetic visual theme. Additionally, all assets were created by the team. We're also incredibly proud of being able to establish complicated animations for a fluid, responsive look between options.

## What we learned

In creating this project, we researched and gained new perspectives on the processes of making a film and how each choice can affect the environment. Additionally, we have worked together in a team before, but found it difficult to get a functional product. This was our first time being able to move forward by learning to communicate more. From a technical perspective, we learned more about creating a dynamic website, instead of a static one, by taking our skill sets and applying them in a new direction.

## What's next for The Final Take

For the future, we want to expand The Final Take to have more dynamic storylines, randomized events, and more visual elements.

## Node.js

Final Take runs on Node.js Version 20.10.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Next.js

This project is built using [Next.js](https://nextjs.org), a React framework. Next.js is automatically installed when you install all dependencies for this project.

## Environment Variables

The following environment variables are required and must be stored in an `.env` file:

```env
OPENROUTER_API_KEY=
```

## Commands

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Website Locally

```bash
# Open a browser at localhost:3000
npm run dev
```

### Formatting Code via Prettier

```bash
# Rewrite code recursively with proper formatting
npm run format

# Show formatting differences recursively
npm run check
```

### Linting Code via Eslint

```bash
npm run eslint
```

### Build the Website

```bash
npm run build
```
