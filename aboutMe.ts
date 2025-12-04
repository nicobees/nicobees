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