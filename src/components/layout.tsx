import { useState } from 'react'
import Link from 'next/link'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  List,
  ListItem,
  DrawerAppContent,
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  Card,
} from 'rmwc/dist'
import { useOpen } from 'client'

export function Layout({ children, ...rest }) {
  const [open, updateOpen] = useOpen()

  function toggle() {
    if (updateOpen && typeof updateOpen === 'function') {
      updateOpen(!open)
    }
  }
  return (
    <div
      className="mdc-theme--background mdc-typography h-screen max-h-screen overflow-hidden relative"
      id="page"
      {...rest}
    >
      <Drawer dismissible open={!!open}>
        <DrawerHeader>
          <DrawerTitle>Static Dev</DrawerTitle>
          <DrawerSubtitle>✌️</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <Link href="/">
              <ListItem as="a" ripple>
                Home
              </ListItem>
            </Link>
            <Link href="/blog">
              <ListItem as="a" ripple>
                Blog
              </ListItem>
            </Link>
            <Link href="/about">
              <ListItem tag="a" ripple>
                About
              </ListItem>
            </Link>
          </List>
        </DrawerContent>
      </Drawer>

      {/* Optional DrawerAppContent */}
      <DrawerAppContent className="app-content h-full max-h-full overflow-y-auto">
        <TopAppBar theme={['secondaryBg']} fixed>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarNavigationIcon onClick={toggle} icon="menu" />
              <Link href="/">
                <TopAppBarTitle tag="a" className="cursor-pointer">
                  Static Dev
                </TopAppBarTitle>
              </Link>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
        <main className="p-8 max-w-screen-lg w-full mx-auto">
          <Card className="p-4">{children}</Card>
        </main>
      </DrawerAppContent>
      <style jsx>{`
        & :global(.mdc-drawer) {
          background-color: var(--mdc-theme-surface);
        }
      `}</style>
    </div>
  )
}
