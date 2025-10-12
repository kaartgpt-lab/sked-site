import React from 'react'

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 8h2v13H3zM9 8h2v2.1C11.8 9.4 13 8 15.3 8 19 8 20 10.4 20 13.9V21h-2v-6.2c0-2-0.5-3.7-2.6-3.7-2 0-2.9 1.5-2.9 3.7V21H10V8z" />
    </svg>
  )
}