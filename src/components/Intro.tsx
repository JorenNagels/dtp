import Logo from './Logo';
import { site } from '@/lib/data';

/**
 * Title card. Assembles the mark piece by piece, then wipes upward off the page.
 *
 * A server component with no state: the animation is pure CSS (see `.intro` in
 * `globals.css`), so it runs identically with JavaScript on or off and nothing
 * here waits on hydration. Lives in the root layout, which persists across
 * client-side navigation — so it plays once per document load, not per route.
 */
export default function Intro() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-inner">
        <Logo className="intro-mark" />
        <span className="intro-word font-display leading-none">{site.name}</span>
        <span className="intro-rule" />
      </div>
    </div>
  );
}
