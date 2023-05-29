import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.miniboxbar.com/773-thickbox_default/mini-botella-ron-zacapa-23.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ron Zacapa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://walmartgt.vtexassets.com/arquivos/ids/330963/Whisky-Johnnie-Walker-Gold-Label-750ml-2-44381.jpg?v=638067694027030000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Whisky Jonnie Walker</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0396/7107/0882/products/34-Cabro_1080x.png?v=1605999873"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cabro</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;