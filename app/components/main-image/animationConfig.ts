/**
 * Centralized animation configuration for all components
 * Update these values to control animation timing across the entire image
 */

// Header Text Animation Configuration
export const headerTextAnimationConfig = {
  // Durations in milliseconds
  greetingDuration: 3000,
  mainDuration: 4000,
  dayDuration: 3000,

  // Start delays in milliseconds (overlapping animations)
  greetingDelay: 1100,
  mainDelay: 2000, // Start main after greeting has started
  dayDelay: 3000, // Start day after greeting has started

  // Initial delay before any animation starts
  initialDelay: 100,
} as const;

// Date Banner Animation Configuration
// Calculated to appear last:
// - Header text finishes: dayDelay (3000ms) + dayDuration (3000ms) = 6000ms
// - Wreath finishes: baseDelay (3000ms) + stagger (24 * 80ms) + duration (400ms) ≈ 5320ms
// - Date banner starts at 6500ms to ensure it's last, with 3500ms duration
export const dateBannerAnimationConfig = {
  duration: 3000, // milliseconds - animation duration
  initialDelay: 5000, // milliseconds - delay before animation starts (after all other animations)
} as const;

// Wreath Animation Configuration (for LeafyWreath components)
export const wreathAnimationConfig = {
  baseDelay: 3, // seconds
  staggerDelay: 0.08, // seconds
  duration: 0.4, // seconds
} as const;

/**
 * Calculate animation delay for a specific element index in a reversed sequence
 * @param totalElements - Total number of elements in the wreath
 * @param elementIndex - Zero-based index of the element (0 = first element, will animate last)
 * @returns Delay value in seconds
 */
export function getReversedAnimationDelay(
  totalElements: number,
  elementIndex: number
): number {
  return (
    wreathAnimationConfig.baseDelay +
    wreathAnimationConfig.staggerDelay * (totalElements - 1 - elementIndex)
  );
}
