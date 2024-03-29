import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { LANGUAGES } from '@/config/constants'
import { Grandstander, Expletus_Sans } from 'next/font/google'
import Container from './Container'

const comfortaa = Expletus_Sans({
  weight: ['700', '500'],
  subsets: ['latin'],
  display: 'swap'
})

const navigations = [{
  url: '/blog',
  label: 'labels.blog',
  ariaLabel: 'Blog'
}, {
  url: '/investment',
  label: 'labels.investment',
  ariaLabel: 'Investment'
}, {
  url: '/insurance',
  label: 'labels.insurance',
  ariaLabel: 'Insurance'
}, {
  url: '/planners',
  label: 'labels.planners',
  ariaLabel: 'Planners'
}, {
  url: '/calculators',
  label: 'labels.calculators',
  ariaLabel: 'Calculators'
}]

export default function Header() {
  const [menu, setMenu] = useState(false)
  const router = useRouter();

  const switchLanguage = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value })
  }

  return (
    <header className='bg-gray-50 py-4' aria-label='header'>
      <Container className="flex justify-between items-center">
        <Link href="/" className={`font-bold text-primary text-4xl ${comfortaa.className}`} aria-label='FinChamp'>Finchamp</Link>
        <button className='lg:hidden' onClick={() => setMenu(!menu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <nav className='hidden lg:flex' role="navigation" aria-label="nav">
          {navigations && <ul className='flex' aria-hidden>
            {navigations.map(el => <li key={el.url}><Link href={el.url} role='listitem' aria-label={el.ariaLabel} className={`${router.pathname === el.url ? 'text-primary' : 'text-gray-700'} flex p-4 font-semibold`}><FormattedMessage id={el.label} /></Link></li>)}
          </ul>}
          <div className='flex p-4'>
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <select aria-describedby="language-picker" className='text-gray-700 flex pl-2 font-semibold appearance-none focus:outline-none' onChange={switchLanguage} defaultValue={router.locale}>
              {LANGUAGES.map(el => <option key={el.value} value={el.value} >{el.label}</option>)}
            </select>
          </div>
        </nav>
      </Container>
      <aside className={`w-96 fixed lg:hidden top-0 right-0 bg-white min-h-screen shadow-2xl p-8 transition-all duration-300 overflow-auto z-10 h-screen ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between border-b pb-4">
            <h3 className="font-bold">FinChamp</h3>
            <button className="" onClick={() => setMenu(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {navigations && <ul className='flex flex-col' aria-hidden>
            {navigations.map(el => <li key={el.url}><Link href={el.url} role='listitem' aria-label={el.ariaLabel} className={`${router.pathname === el.url ? 'text-primary' : 'text-gray-700'} flex p-4 font-semibold`}><FormattedMessage id={el.label} /></Link></li>)}
          </ul>}
          <div className='flex p-4'>
            <select aria-describedby="language-picker" className='text-gray-700 flex font-semibold appearance-none focus:outline-none' onChange={switchLanguage} defaultValue={router.locale}>
              {LANGUAGES.map(el => <option key={el.value} value={el.value} >{el.label}</option>)}
            </select>
          </div>
        </div>
      </aside>
    </header>
  )
}
