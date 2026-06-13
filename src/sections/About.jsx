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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget fermentum mi. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Vivamus ut maximus
              velit. Aenean erat elit, ornare sed malesuada eu, viverra sed
              ante.
            </p>
            <p>
              Proin ultrices nunc ipsum, eu volutpat dolor sollicitudin sed.
              Pellentesque eget ornare est, sit amet vestibulum metus. Duis
              maximus neque sed diam luctus tempor. Proin convallis mauris eget
              suscipit ultricies. Curabitur fringilla consectetur metus. Vivamus
              velit nisi, congue a neque sollicitudin, rhoncus accumsan purus.
              Pellentesque varius dictum purus
            </p>
            <p>
              Fusce tincidunt interdum suscipit. Praesent semper ullamcorper
              sapien, vel blandit eros dapibus sed. Donec at nulla non nibh
              tempor pellentesque sit amet vitae turpis. Pellentesque varius
              neque nisi, in commodo eros aliquam ut. Etiam a gravida leo.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget fermentum mi. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Vivamus ut maximus
              velit. Aenean erat elit, ornare sed malesuada eu, viverra sed
              ante. Fusce tincidunt interdum suscipit"
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
