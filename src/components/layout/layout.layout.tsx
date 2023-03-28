import React, { useEffect } from 'react'
import Navigation from '../nav/nav.component'
import Header from '../header/header.component'
import classes from '@/styles/layout.module.css'
import Filter from '../filter/filter.component'
import Calendar from '../calendar/calendar.component'

type Props = {}

const Layout = (props: Props) => {

  return (
    <div className={classes.layoutContainer}>
        <Navigation></Navigation>
        <main className={classes.mainContainer}>
          <Header/>
          <Filter/>
          <Calendar />
        </main>
    </div>
  )
}

export default Layout