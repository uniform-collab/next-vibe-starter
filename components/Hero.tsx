import {
  LinkParamValue,
  RichTextParamValue,
  flattenValues,
} from "@uniformdev/canvas";
import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

type HeroProps = ComponentProps<{
  title: string;
  description?: RichTextParamValue;
  buttonTitle?: string;
  buttonUrl?: LinkParamValue;
}>;

const Hero: React.FC<HeroProps> = ({ buttonUrl }) => {
  const link = flattenValues(buttonUrl, { toSingle: true });

  return (
    <div>
      <div
        className="relative overflow-hidden w-full py-4"
        data-test-id="hero-title"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <UniformText
              key={i}
              className="mx-8 m-0 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-neutral-900 shrink-0"
              parameterId="title"
              as="h1"
              aria-hidden={i > 0 ? true : undefined}
              placeholder="Hero title goes here"
            />
          ))}
        </div>
      </div>
      <UniformRichText
        parameterId="description"
        className="my-4 text-xl sm:text-2xl leading-normal text-center"
        placeholder="Hero description goes here"
        data-test-id="hero-description"
      />
      <div className="flex justify-center mt-8">
        <a
          href={link?.path ?? "#"}
          className="inline-block px-10 py-5 text-lg sm:text-xl font-bold uppercase tracking-wide text-neutral-50 bg-neutral-900 rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          <UniformText
            parameterId="buttonTitle"
            placeholder="Button text"
          />
        </a>
      </div>
    </div>
  );
};

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
