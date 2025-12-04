<img align="right" alt="profile views github nicobees" src="https://visitor-badge.laobi.icu/badge?page_id=nicobees.nicobees" />

<h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&repeat=false&lines=Hi!+👋+I'm+Nicola!;" />
</h1>

<h3 align="center"></h3>

<h4 align="center" style="margin-bottom: -24px;">I am a Senior Full-Stack Engineer with 10 years of experience in building product-based solutions for the web,</h4>
<h4 align="center">specialising in React, TypeScript, Node.js</h4>
 
🌱 I’m currently learning **AI Engineering and spanish**

👨‍💻 All of my projects are available here [https://github.com/nicobees](https://github.com/nicobees)

📝 I sometimes write articles on [https://nicobees.github.io/blog/](https://nicobees.github.io/blog/)

💬 Ask me about **Typescript, Node.js, React**

<details><summary>AMaaC (AboutMe as a Code)</summary>

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
      { goal: this.learning({ goal: 'career evolution', topic: 'AI Engineering' }), topic: 'AI Engineering' },
      { goal: this.learning({ goal: 'personal growth', topic: 'Spanish' }), topic: 'Spanish' },
    ];
  }

  protected learning = async <Goal extends string>(learningTopic: { topic: string; goal: Goal }): Promise<Goal> => {
    const { topic, goal } = learningTopic;

    if (!topic) {
      return await new Promise((resolve) => resolve('happiness' as Goal));
    }

    return await goal;
  };

  public writeArticlesOn = async (personalBlog: `https://nicobees.github.io/blog/`) => {
    return await fetch(personalBlog);
  };

  public askMeAbout = (topic: string) => {
    return this.specialisation.filter((spec) => spec === topic);
  };

  public howToReachMe = async (linkedinProfile: `https://www.linkedin.com/in/nicolaabis/`) => {
    await fetch(linkedinProfile);

    return 'Nice to meet you!';
  };
}
```
</details>

<div align="left"> 
  <!-- <a href="mailto:pedro.sales.muniz@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
  </a> -->
  <h3>Connect with me</h3>
  <a href="https://www.linkedin.com/in/nicolaabis/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <!-- <a href="https://salesp07.github.io" target="_blank">
     <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white" target="_blank" />
  </a> -->
</div>

<h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=typescript,javascript,nodejs,express,react,html,css,mysql,postgresql,mongodb" />
    <img src="https://skillicons.dev/icons?i=nextjs,redux,jest,docker,gcp,kubernetes,firebase,git,vscode" /><br>
</div>

<br/>

<div align=center>
  <img width=325 align="center" src="https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=nicobees&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats" alt="most used languages nicobees" />
</div>
