import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean code",
    description:
      "Writing maintainbale, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightining-fast user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closeley with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in" />
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              one component at a time.
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I am a dedicated IT professional with over two years of hands-on
              experience in network infrastructure, system administration, and
              technical support. Currently pursuing a Bachelor’s degree in
              Computer Science, I am transitioning my career toward Software
              Engineering and Full Stack development. My technical background
              has provided me with a strong foundation in logical thinking,
              network architecture, and database modeling, which I now leverage
              to build robust software solutions
            </p>
            <p>
              My expertise encompasses the JavaScript ecosystem, including
              Node.js and React.js, as well as Java development with Spring Boot
              and Angular. Throughout my career, I have successfully managed
              complex environments, including MS SQL Server databases,
              virtualized infrastructure with Proxmox, and enterprise network
              security using PfSense and various monitoring tools like Zabbix
              and Grafana. This combination of infrastructure knowledge and
              software development skills allows me to approach programming
              challenges with a comprehensive understanding of how systems
              interact and perform.
            </p>
            <p>
              I am eager to contribute my technical competencies to innovative
              projects focused on software development, process automation, and
              system efficiency. Passionate about creating high-quality,
              scalable applications, I am actively seeking new opportunities to
              grow as a developer and provide impactful solutions in the
              technology sector. I invite you to explore my projects and welcome
              the opportunity to connect and discuss how I can add value to your
              team.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "If I have seen further, it is by standing on the shoulders of
              giants"
              <br />
              <br />
              <strong>Isaac Newton</strong>
            </p>
          </div>
          {/*Right Column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
