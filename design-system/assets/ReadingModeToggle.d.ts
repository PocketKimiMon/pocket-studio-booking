export interface ReadingModeToggleProps {
  /** Icon-only form (label hidden; still has an accessible aria-label). */
  compact?: boolean;
  /** Extra class names appended to the control. */
  className?: string;
}

/**
 * Branded, accessible switch for PocketStudio's dyslexia reading mode.
 *
 * Reading mode is ON by default and system-wide: the toggle reads/writes the
 * persisted user preference (`localStorage['ps-reading-mode']`) and mirrors it
 * onto `document.documentElement[data-reading-mode="dyslexic"]`, which the
 * foundation stylesheet keys its OpenDyslexic override layer off of. Switching
 * it OFF restores the brand typography exactly. Fully compatible with the
 * framework-free `assets/reading-mode.js` helper (same key + attribute).
 */
export function ReadingModeToggle(props: ReadingModeToggleProps): JSX.Element;
