import NormalCard from '../../../../components/Cards/NormalCard'
import Button from '../Button'
import AdvertisementBanner from '../Banner/AdvertisementBanner'
import styles from './Collection.module.scss'
import Information from '../Information'

function Collection({utCollection, utUrl, specialCollection, specialUrl }) {
  return (
    <div className={`${styles["collection-wrapper"]}`}>
      {
        utCollection && (
          <div className={`${styles["ut-collection"]}`}>
            <div className={`${styles["title"]}`}>
              BỘ SƯU TẬP UT
            </div>
            <div className={`${styles["ut-collection-items"]}`}>
              <Information information={utCollection} />
            </div>
            
            <div className='button'>
              <Button buttonText={"xem thêm"} buttonUrl={utUrl} />
            </div>
          </div>
        )
      }
      {
        specialCollection && (
          <div className={`${styles["special-collection"]}`}>
            <div className={`${styles["title"]}`}>
              Bộ Sưu Tập Đặc Biệt
            </div>
            <div className='slider-container'>
              <AdvertisementBanner 
                isImage={true}
                imageSrc={"https://im.uniqlo.com/global-cms/spa/res89a66710db6128804f50177e0a6c5ebefr.jpg"}
                toUrl={"https://www.uniqlo.com/vn/vi/products/E460268-000"}
              />
            </div>
            <div className='button'>
              <Button buttonText={"xem thêm"} buttonUrl={specialUrl} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Collection