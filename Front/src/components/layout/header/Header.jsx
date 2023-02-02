import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ backLink }) => {
	//кнопка назад с пропса

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>
      <Hamburger/>
		</header>
	)
}

export default Header
