<img align="right" alt="profile views github nicobees" src="https://visitor-badge.laobi.icu/badge?page_id=nicobees.nicobees" />

<h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&repeat=false&lines=Hi!+👋+I'm+Nicola!;" />
</h1>

<h3 align="center"></h3>

<h4 align="center">I am a Senior Full-Stack Engineer with 10 years of experience in building product-based solutions for the web, specialising in React, TypeScript, Node.js</h4>

🌱 I’m currently learning **AI Engineering and spanish**

👨‍💻 All of my projects are available here [https://github.com/nicobees](https://github.com/nicobees)

📝 I sometimes write articles on [https://nicobees.github.io/blog/](https://nicobees.github.io/blog/)

💬 Ask me about **Typescript, Node.js, React**

<details><summary>AMaaC (AboutMe as a Code) 😁</summary>

```typescript
class AboutMe {
  public name: string = 'Nicola';
  public alias: string = 'nicobees';
  public profession: string = 'Senior Full-Stack Engineer';
  public experience: number = 10; // years
  public specialisation: string[];
  protected learningTopicsList: { topic: string; goal: Promise<string> }[];

  constructor() {
    this.specialisation = ['TypeScript', 'Node.js', 'React'];

    this.learningTopicsList = [
      { topic: 'AI Engineering' , goal: this.learning({ topic: 'AI Engineering', goal: 'career evolution' })},
      { topic: 'Spanish', goal: this.learning({ topic: 'Spanish', goal: 'personal growth' }), },
    ];
  }

  protected learning = async <Goal extends string>(learningTopic: { topic: string; goal: Goal }): Promise<Goal> => {
    const { topic, goal } = learningTopic;

    if (!topic) {
      return await new Promise((resolve) => resolve('happiness' as Goal));
    }

    return await goal;
  };

  public writeArticlesOn = async (personalBlog: 'https://nicobees.github.io/blog/') => {
    return await fetch(personalBlog);
  };

  public askMeAbout = (topic: string) => {
    return this.specialisation.filter((spec) => spec === topic);
  };

  public howToReachMe = async (linkedinProfile: 'https://www.linkedin.com/in/nicolaabis/') => {
    await fetch(linkedinProfile);

    return 'Nice to meet you! ✨';
  };
}
```
</details>

### Connect with me
<div align="left"> 
  <!-- <a href="mailto:pedro.sales.muniz@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
  </a> -->
  <a href="https://www.linkedin.com/in/nicolaabis/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <!-- <a href="https://salesp07.github.io" target="_blank">
     <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white" target="_blank" />
  </a> -->
</div>

## Expertise

- Typescript
- Node.js
- React
- Express
- Next.js
- web performances/SEO
- RestAPIs
- Jest/React Testing Library

## Interests

- AI Engineering: LangChain, LangGraph, AI Agents
- WebAI: Transformers.js, ONNX.js, Chrome Built-in AI
- Cloud Computing: GCP Cloud Run, Firebase
- Core Web Vitals

<!-- <h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=typescript,javascript,nodejs,express,react,html,css,mysql,postgresql,mongodb" />
    <img src="https://skillicons.dev/icons?i=nextjs,redux,jest,docker,gcp,kubernetes,firebase,git,vscode" /><br>
</div> -->

## Projects

### [FreedomLabel](https://github.com/nicobees/freedom-label)

A modern web application for creating and printing custom eyewear prescription labels with a mobile-first design approach, build for an optometric laboratory.

React/Typescript/MobX web app with automatic form filling handled by AI: the user can fill the form with natural language prompts, by text or voice input. 
It uses Chrome built-in Gemini Nano model, hence no requests to external AI/LLM services are made: cheap, fast and privacy-preserving solution.

Demo available: [nicobees.github.io/freedom-label](https://nicobees.github.io/freedom-label)


### [Charades](https://github.com/nicobees/charades)

A Charades game as single page app (SPA), where items to guess are movies, songs and tv shows: it allows the players to setup items to guess by their own or rely on AI model to generate them.

Built with React/Typescript/Zustand, with Chrome built-in Gemini Nano model.

Status: work in progress.

## GitHub stats

<div align=center>
  <img width=325 align="center" src="https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=nicobees&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats" alt="most used languages nicobees" />
</div>
