import { useEffect } from 'react';

/**
 * Adds an IntersectionObserver that toggles the `in-view` class on any
 * element with the `.reveal` class once it scrolls into the viewport.
 * Also watches the DOM for newly added `.reveal` elements (e.g. when a
 * filter or tab swaps out cards) so they get observed too, not just the
 * ones present when this hook first ran.
 * Call once near the app root.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => observer.observe(el));
    };

    observeAll();

    // Watch for new .reveal elements being added later (e.g. filter/tab changes)
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}