import { Carousel} from 'react-bootstrap';

const Slider = () => {
    return (
        <div className=" mt-5 mb-5">
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://revitalizingsmiles.com/wp-content/uploads/2018/01/Dental-care.jpg"
      alt="Cavity protection"
    />
    <Carousel.Caption>
      <h5>Children Dental Care</h5>
      <p>Children Dental Care Regular dental visits are important for you. By the time children have most of there Baby teeth, they are ready to come with their parents for a dental visit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://elmums.com/wp-content/uploads/2020/01/What-Are-The-Benefits-Of-Dental-Care.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Adult Dental Care</h5>
      <p>Adult Dental Care . Oral-Health Assessment – including detection of gum disease or periodontitis. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.deansdentalcare.com/wp-content/uploads/2016/10/DeansDentalCareMens.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Cosmetic Teeth Whitening</h5>
      <p>About Teeth Whitening Tooth Whitening has enjoyed a tremendous increase in popularity over recent years</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider;