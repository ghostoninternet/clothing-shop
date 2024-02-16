import styles from './Information.module.scss'
import NormalCard from '../../../../components/Cards/NormalCard'

function Information({ information }) {
  return (
    <div className={`${styles["information-wrapper"]}`}>
      {
        information.map((info, index) => {
          return (
            <div className={`${styles["information-item"]}`} key={index}>
              <NormalCard
                url={info.url}
                image={info.image}
                title={info.title}
                description={info.description}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Information