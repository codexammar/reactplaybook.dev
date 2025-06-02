import { UseStateDemo, UseEffectDemo, UseRefDemo, UseMemoDemo, UseCallbackDemo} from "./concepts/hooks";

export const concepts = [
  {
    slug: "hooks-useState",
    title: "useState Hook",
    description: "Track and update state in functional components.",
    component: UseStateDemo,
    titleSuffix: "useState",
  },
  {
    slug: "hooks-useEffect",
    title: "useEffect Hook",
    description: "Perform side effects like data fetching or DOM updates.",
    component: UseEffectDemo,
    titleSuffix: "useEffect",
  },
  {
    slug: "hooks-useRef",
    title: "useRef Hook",
    description: "Access DOM elements and persist values without re-rendering.",
    component: UseRefDemo,
    titleSuffix: "useRef",
  },
  {
    slug: "hooks-useMemo",
    title: "useMemo Hook",
    description: "Optimize performance by memoizing expensive calculations.",
    component: UseMemoDemo,
  },
  {
  slug: "hooks-useCallback",
  title: "useCallback Hook",
  description: "Memoize callbacks to prevent unnecessary re-renders.",
  component: UseCallbackDemo,
  }
];
