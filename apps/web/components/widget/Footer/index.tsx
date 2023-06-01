import { Section } from '../Section'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <footer className="bg-slate-100 border-t mx-auto flex w-full lg:container justify-center mt-6">
      <div className="relative flex items-center f6 flex-column-reverse lg:flex-row flex-wrap lg:flex-nowrap mt-6 py-6 mx-4">
        <div className="list-style-none flex flex-wrap col-0 col-lg-2 justify-start lg:justify-between mb-2 lg:mb-0">
          <div className="mt-2 lg:mt-0 flex items-center">
            <a
              aria-label="Homepage"
              title="Wesbitty"
              className="footer-octicon mr-2"
              href="https://wesbitty.org"
            >
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-mark-github"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <span className="text-scale-1100 text-sm leading-loose font-medium">
              © {currentYear} Wesbitty, Inc.
            </span>
          </div>
        </div>

        <nav aria-label="Footer" className="col-12 col-lg-8">
          <h3 className="sr-only" id="sr-footer-heading">
            Footer Navigation
          </h3>
          <ul className="list-style-none flex flex-wrap col-12  justify-center  text-sm leading-loose text-brand-1100 font-medium lg:justify-between mb-2 lg:mb-0">
            <li className="mr-3">
              <a href="/terms">Terms</a>
            </li>
            <li className="mr-3">
              <a href="/privacy">Privacy</a>
            </li>

            <li className="mr-3">
              <a href="/security">Security</a>
            </li>
            <li className="mr-3">
              <a href="/status">Status</a>
            </li>
            <li className="mr-3">
              <a href="/docs">Docs</a>
            </li>
            <li className="mr-3">
              <a href="/support">Help Center</a>
            </li>
            <li className="mr-3 lg:mr-0">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="mr-3 lg:mr-0">
              <a href="/docs">API</a>
            </li>
            <li className="mr-3 lg:mr-0">
              <a href="/training">Training</a>
            </li>
            <li className="mr-3 lg:mr-0">
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
