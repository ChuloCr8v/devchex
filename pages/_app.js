import '../styles/globals.css'
import Layout from './layout/Layout'
import {motion, AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <AnimatePresence >
    <motion.div 
    animate ={{
      x: [50, -50, 0, -50, 50, 0], 
      y: [-50, 50, 0, 50, -50, 0], 
      filter: [
        'hue-rotate(360deg) contrast(100%)', 
        'hue-rotate(180deg) contrast(200%)', 
        'hue-rotate(90deg) contrast(300%)', 
        'hue-rotate(180deg) contrast(100%)',
        'hue-rotate(90deg) contrast(500%)', 
        'hue-rotate(0) contrast(100%)'
     ] 
    }}
    >
          <Component {...pageProps} />
      </motion.div >
      </AnimatePresence >
    </Layout>
    ) 
}

export default MyApp
