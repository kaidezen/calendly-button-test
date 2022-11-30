import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider'
import Layout from '../components/layout'
import theme from '../theme';
import SEO from '../components/seo';
import AboveTheFold from '../sections/above-the-fold';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout isLightBG={false}>
            <SEO title="Kaidezen Coaching" />
            <AboveTheFold />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}