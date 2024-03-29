import { Link, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const currentPath = useMatches()[1].id.split('/')[1];

  return (
    <div>
      <div className="text-white xs:flex hidden flex-wrap gap-3">
        <motion.article
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: currentPath === '_index' ? '15rem' : '11rem', opacity: 1 }}
          exit={{ width: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          style={{ position: 'relative' }}>
          <Link to='/'>
            <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === '_index' ? 'bg-green-200 w-60' : 'w-44'}`}>
              Yusuf R
            </div>
          </Link>
        </motion.article>
        <motion.article
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: currentPath === '_index' ? '11rem' : '15rem', opacity: 1 }}
          exit={{ width: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          style={{ position: 'relative' }}>
          <Link to='/projects'>
            <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === 'projects' ? 'bg-green-200 w-60' : 'w-44'}`}>
              Project
            </div>
          </Link>
        </motion.article>
      </div >

      <div className="text-white xs:hidden flex flex-wrap gap-3">
        <Link to='/'>
          <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 truncate ${currentPath === '_index' && 'bg-green-200'}`}>
            Yusuf R
          </div>
        </Link>

        <Link to='/projects'>
          <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 truncate ${currentPath === 'projects' && 'bg-green-200'}`}>
            Projects
          </div>
        </Link>
      </div >
    </div>
  )
}

export default Navbar