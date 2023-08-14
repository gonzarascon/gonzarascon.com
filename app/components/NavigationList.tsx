import { type AnimationControls, useAnimation, motion } from 'framer-motion';
import { type PropsWithChildren, createContext, useContext } from 'react';

type NavContextType = {
  controls: AnimationControls;
};

const NavigationContext = createContext<NavContextType | null>(null);

const NavigationList = ({ children }: PropsWithChildren) => {
  const controls = useAnimation();

  return (
    <NavigationContext.Provider value={{ controls }}>
      <ul
        onMouseEnter={() => controls.start({ opacity: 100 })}
        onMouseLeave={() => controls.start({ opacity: 0 })}
        className="flex items-center mx-auto gap-4 relative">
        {children}
        <motion.span
          animate={controls}
          className="h-px w-3 absolute bg-indigo-300 bottom-0"
        />
      </ul>
    </NavigationContext.Provider>
  );
};

const Item = ({ children }: PropsWithChildren) => {
  const { controls } = useContext(NavigationContext) as NavContextType;
  return (
    <li
      onMouseEnter={(e) =>
        controls.start({
          left: e.currentTarget.offsetLeft,
          width: e.currentTarget.clientWidth,
        })
      }>
      {children}
    </li>
  );
};

NavigationList.Item = Item;

export { NavigationList };
