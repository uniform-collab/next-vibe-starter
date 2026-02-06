import Image from "next/image";
import { RichTextParamValue } from "@uniformdev/canvas";
import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

type HeroProps = ComponentProps<{
  title: string;
  description?: RichTextParamValue;
}>;

const Hero: React.FC<HeroProps> = () => (
  <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#5786ff]/10 text-[#5786ff]">
          Uniform Platform
        </span>
        <UniformText
          className="m-0 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center lg:text-left text-[#000918] [&>a]:text-[#5786ff] [&>a]:no-underline hover:[&>a]:underline"
          parameterId="title"
          as="h1"
          data-test-id="hero-title"
          placeholder="Hero title goes here"
        />
        <UniformRichText
          parameterId="description"
          className="mt-4 mb-6 text-lg sm:text-xl leading-relaxed text-center lg:text-left text-neutral-600"
          placeholder="Hero description goes here"
          data-test-id="hero-description"
        />
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <a
            href="https://uniform.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold no-underline rounded-lg bg-[#5786ff] text-white hover:bg-[#3d6df0] transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://docs.uniform.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold no-underline rounded-lg border border-neutral-300 text-[#000918] hover:border-[#5786ff] hover:text-[#5786ff] transition-colors"
          >
            Read the Docs
          </a>
        </div>
      </div>
      <div className="flex-1 w-full max-w-lg lg:max-w-none">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200">
          <Image
            src="/images/hero-visual.jpg"
            alt="Uniform composable content platform visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
