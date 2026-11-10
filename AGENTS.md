# Implementation rules
- Keep single-page section navigation as scroll actions rather than fragment routes because HashRouter uses the URL fragment for routing.
- Use semantic global CSS tokens and the shared Button component for all interactive controls so page styles remain consistent.
- Font asset URLs must resolve from the Lovable hosting origin, not the GitHub Pages origin, because the asset serving endpoint is only hosted by Lovable.
- Keep generated illustrative photographs as Vite imports and clearly disclose their illustrative status; client logos remain the existing uploaded assets.