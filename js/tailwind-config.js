// InnoVAherb — Shared Tailwind Configuration
// This file MUST be loaded BEFORE the Tailwind CDN script in every HTML page.

tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f8f1',
          100: '#dceedd',
          200: '#b8ddb9',
          300: '#8cc68e',
          400: '#5eaa61',
          500: '#4caf50',
          600: '#3d8b41',
          700: '#2e7d32',
          800: '#256528',
          900: '#1b4d1e',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dfd3',
          300: '#d6c9b6',
          400: '#c4b299',
          500: '#b09a7c',
          600: '#9a8265',
          700: '#7d6a52',
          800: '#655544',
          900: '#504337',
        },
        earth: {
          50: '#fdf5ed',
          100: '#fae8d4',
          200: '#f4cda8',
          300: '#edae76',
          400: '#e59449',
          500: '#c4874a',
          600: '#a86f3a',
          700: '#8c5a30',
          800: '#72482a',
          900: '#5e3b24',
        },
        grey: {
          50: '#f5f7f5',
          100: '#e8ece9',
          200: '#d1d8d3',
          300: '#b0bab3',
          400: '#8a968d',
          500: '#6f7c72',
          600: '#5a6b5e',
          700: '#48574c',
          800: '#3a463e',
          900: '#2d3830',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '-0.03em',
        'tight': '-0.02em',
      },
      lineHeight: {
        'body': '1.7',
        'heading': '1.15',
      },
      boxShadow: {
        'elevated': '0 1px 3px rgba(107,123,110,0.08), 0 4px 12px rgba(107,123,110,0.06)',
        'floating': '0 4px 12px rgba(107,123,110,0.1), 0 16px 40px rgba(107,123,110,0.08)',
        'hover': '0 8px 24px rgba(61,139,65,0.12), 0 2px 8px rgba(107,123,110,0.08)',
        'product': '0 2px 8px rgba(107,123,110,0.06), 0 8px 24px rgba(107,123,110,0.08)',
        'product-hover': '0 8px 32px rgba(61,139,65,0.14), 0 4px 12px rgba(107,123,110,0.08)',
        'inset': 'inset 0 2px 4px rgba(107,123,110,0.06)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
};
