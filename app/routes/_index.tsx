import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { type CSSProperties, type MouseEvent, useRef } from 'react';
import { NavigationList } from '~/components/NavigationList';
import { getPublicEnv } from '~/components/PublicEnv';

export const meta: V2_MetaFunction = (args) => {
  return [
    { title: 'Gonz — software engineer' },
    { name: 'description', content: 'Buenos Aires based software engineer' },
    {
      property: 'og:title',
      content: 'Gonz',
    },
    {
      property: 'og:url',
      content: 'https://gonzarascon.tech',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:description',
      content: 'Building cool stuff with love from Buenos Aires 🇦🇷',
    },
    {
      property: 'og:image',
      content: `https://gonzarascon.tech/images/og-image.png`,
    },
  ];
};

const urls = [
  {
    name: 'blog',
    url: getPublicEnv('SUBSTACK_URL'),
    external: true,
  },
  {
    name: 'projects',
    url: 'https://github.com/gonzarascon',
    external: false,
  },
  {
    name: 'contact me',
    url: 'https://www.linkedin.com/in/gonzarascon/',
    external: true,
  },
];

export default function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hueRange = [255, 323];
  const hue = useTransform(
    mouseY,
    [0, (sectionRef.current?.clientHeight || 100) * 5],
    hueRange,
  );

  // Function to handle the mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (sectionRef.current) {
      const { x, y } = getRelativeCoordinates(e, sectionRef.current);
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <section
        onMouseMove={handleMouseMove}
        ref={sectionRef}
        className="text-slate-50 relative h-[60vh] py-10 text-center flex flex-col items-center after:content-[''] after:block after:w-1/3 after:border-b-slate-200 after:border-solid after:border-b after:mt-auto"
        style={{
          backgroundImage: 'linear-gradient(transparent 85%, currentColor)',
          backgroundBlendMode: 'multiply',
        }}>
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          style={
            {
              background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, hsla(var(--hue), 50%, 80%, 50%), transparent 80%)`,
              '--hue': useMotionTemplate`${hue}`,
              '--y': useMotionTemplate`${mouseY}`,
            } as any as CSSProperties
          }
          transition={{ duration: 0.2 }}
        />
        <h2 className="selection:bg-indigo-800 selection:bg-opacity-10 bg-gradient-to-t from-indigo-800 from-10% via-35% to-80% via-indigo-500 to-pink-500 bg-clip-text text-transparent font-bold text-7xl leading-tight">
          Hey
        </h2>
        <span className="text-slate-500 selection:bg-indigo-800 selection:bg-opacity-10">
          I'm Gonz, software engineer from Buenos Aires, Argentina 🇦🇷
        </span>
      </section>
      <NavigationList>
        {urls.map((url) => (
          <NavigationList.Item key={url.url}>
            <Link
              target={url.external ? '_blank' : undefined}
              to={url.url}
              rel={url.external ? 'noopener noreferrer' : undefined}>
              {url.name}
            </Link>
          </NavigationList.Item>
        ))}
      </NavigationList>
    </div>
  );
}

function getRelativeCoordinates(
  event: MouseEvent,
  referenceElement: HTMLDivElement,
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}
